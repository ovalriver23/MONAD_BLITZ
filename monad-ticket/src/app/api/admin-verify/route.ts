import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const SESSION_SECRET = process.env.PRIVATE_KEY ?? "fallback-secret-key";

function verifyToken(token: string): boolean {
    const parts = token.split(".");
    if (parts.length !== 2) return false;

    const [payloadB64, signature] = parts;
    const payload = Buffer.from(payloadB64, "base64").toString();

    // Verify HMAC
    const hmac = crypto.createHmac("sha256", SESSION_SECRET);
    hmac.update(payload);
    const expected = hmac.digest("hex");

    if (signature !== expected) return false;

    // Check age (4 hours max)
    const timestamp = parseInt(payload.split(":")[1], 10);
    const age = Date.now() - timestamp;
    if (age > 4 * 60 * 60 * 1000) return false;

    return true;
}

export async function GET(req: NextRequest) {
    const token = req.cookies.get("admin_session")?.value;

    if (!token || !verifyToken(token)) {
        return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json({ authenticated: true });
}
