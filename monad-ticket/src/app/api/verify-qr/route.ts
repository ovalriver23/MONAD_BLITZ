import { NextRequest, NextResponse } from "next/server";
import { ethers } from "ethers";

// Minimal ABI — only the function we need
const TICKET_ABI = [
    "function hasTicket(address user, uint256 eventId) external view returns (bool)",
];

const MONAD_RPC = "https://testnet-rpc.monad.xyz";
const QR_EXPIRY_MS = 10_000; // 10 seconds

export async function POST(req: NextRequest) {
    try {
        const { signature, timestamp, walletAddress, eventId } = await req.json();

        // Validate input
        if (!signature || !timestamp || !walletAddress || eventId === undefined) {
            return NextResponse.json(
                { valid: false, reason: "Missing required fields" },
                { status: 400 }
            );
        }

        // 1. Check timestamp freshness (10-second window)
        const age = Date.now() - Number(timestamp);
        if (age > QR_EXPIRY_MS) {
            return NextResponse.json({
                valid: false,
                reason: "QR code expired (older than 10 seconds)",
            });
        }
        if (age < 0) {
            return NextResponse.json({
                valid: false,
                reason: "Invalid timestamp (future)",
            });
        }

        // 2. Recover signer and verify it matches server key
        const privateKey = process.env.PRIVATE_KEY;
        if (!privateKey) {
            return NextResponse.json(
                { valid: false, reason: "Server key not configured" },
                { status: 500 }
            );
        }

        const serverWallet = new ethers.Wallet(privateKey);
        const message = JSON.stringify({
            walletAddress: walletAddress.toLowerCase(),
            eventId: Number(eventId),
            timestamp: Number(timestamp),
        });

        const recoveredAddress = ethers.verifyMessage(message, signature);
        if (recoveredAddress.toLowerCase() !== serverWallet.address.toLowerCase()) {
            return NextResponse.json({
                valid: false,
                reason: "Invalid signature — not signed by server",
            });
        }

        // 3. Check on-chain ticket ownership
        const contractAddress = process.env.CONTRACT_ADDRESS;
        if (!contractAddress) {
            return NextResponse.json(
                { valid: false, reason: "Contract address not configured" },
                { status: 500 }
            );
        }

        const provider = new ethers.JsonRpcProvider(MONAD_RPC);
        const contract = new ethers.Contract(contractAddress, TICKET_ABI, provider);
        const ownsTicket = await contract.hasTicket(walletAddress, eventId);

        if (!ownsTicket) {
            return NextResponse.json({
                valid: false,
                reason: "No ticket found for this wallet/event",
            });
        }

        return NextResponse.json({ valid: true });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Internal server error";
        return NextResponse.json(
            { valid: false, reason: message },
            { status: 500 }
        );
    }
}
