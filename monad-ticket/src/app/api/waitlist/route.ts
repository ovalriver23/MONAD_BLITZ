/**
 * In-memory waitlist store (replace with a DB in production).
 *
 * GET  /api/waitlist?address=0x...          → all entries for address
 * GET  /api/waitlist/[eventId]?address=0x.. → stats for event
 * POST /api/waitlist/[eventId]              → join
 * DELETE /api/waitlist/[eventId]            → leave
 */

import type { WaitlistEntry } from "../../../types/waitlist";

// ---------------------------------------------------------------------------
// Shared in-memory store (module-level singleton in dev)
// ---------------------------------------------------------------------------

interface WaitlistStore {
  entries: WaitlistEntry[];
  nextId: number;
}

const g = globalThis as typeof globalThis & { _waitlist?: WaitlistStore };
if (!g._waitlist) g._waitlist = { entries: [], nextId: 1 };
export const store = g._waitlist;

// ---------------------------------------------------------------------------
// GET /api/waitlist?address=0x...
// ---------------------------------------------------------------------------

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address")?.toLowerCase();

  if (!address) {
    return Response.json(
      { error: "address query param required" },
      { status: 400 }
    );
  }

  const entries = store.entries.filter(
    (e) => e.userAddress.toLowerCase() === address && e.status === "waiting"
  );

  return Response.json(entries);
}
