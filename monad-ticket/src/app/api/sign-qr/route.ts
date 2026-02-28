import { NextRequest, NextResponse } from "next/server";
import { ethers } from "ethers";

export async function POST(req: NextRequest) {
    try {
        const { walletAddress, eventId } = await req.json();

        if (!walletAddress || eventId === undefined) {
            return NextResponse.json(
                { error: "walletAddress and eventId are required" },
                { status: 400 }
            );
        }

        const privateKey = process.env.PRIVATE_KEY;
        if (!privateKey) {
            return NextResponse.json(
                { error: "Server signing key not configured" },
                { status: 500 }
            );
        }

        const timestamp = Date.now();

        // Create a deterministic message to sign
        const message = JSON.stringify({
            walletAddress: walletAddress.toLowerCase(),
            eventId: Number(eventId),
            timestamp,
        });

        const wallet = new ethers.Wallet(privateKey);
        const signature = await wallet.signMessage(message);

        return NextResponse.json({
            signature,
            timestamp,
            walletAddress: walletAddress.toLowerCase(),
            eventId: Number(eventId),
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Internal server error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
