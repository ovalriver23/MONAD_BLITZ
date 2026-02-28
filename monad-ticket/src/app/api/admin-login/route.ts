import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const ADMIN_USER = process.env.ADMIN_USER ?? "whitepass";
const ADMIN_PASS = process.env.ADMIN_PASS ?? "whitepass2026";
const SESSION_SECRET = process.env.PRIVATE_KEY ?? "fallback-secret-key";

function makeSessionToken(username: string): string {
    const payload = `${username}:${Date.now()}`;
    const hmac = crypto.createHmac("sha256", SESSION_SECRET);
    hmac.update(payload);
    return `${Buffer.from(payload).toString("base64")}.${hmac.digest("hex")}`;
}

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json();

        if (!username || !password) {
            return NextResponse.json(
                { error: "Username and password are required" },
                { status: 400 }
            );
        }

        if (username !== ADMIN_USER || password !== ADMIN_PASS) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        const token = makeSessionToken(username);

        const response = NextResponse.json({ success: true });
        response.cookies.set("admin_session", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 4, // 4 hours
            path: "/",
        });

        return response;
    } catch {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
