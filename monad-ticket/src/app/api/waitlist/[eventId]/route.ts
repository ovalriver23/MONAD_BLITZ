import { store } from "../route";
import type { WaitlistEntry, WaitlistStats } from "../../../../types/waitlist";

interface Params {
  params: Promise<{ eventId: string }>;
}

// ---------------------------------------------------------------------------
// GET /api/waitlist/[eventId]?address=0x...
// ---------------------------------------------------------------------------

export async function GET(request: Request, { params }: Params) {
  const { eventId } = await params;
  const id = parseInt(eventId);
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address")?.toLowerCase();

  const waiting = store.entries.filter(
    (e) => e.eventId === id && e.status === "waiting"
  );

  const userEntry = address
    ? waiting.find((e) => e.userAddress.toLowerCase() === address)
    : undefined;

  const stats: WaitlistStats = {
    eventId: id,
    totalWaiting: waiting.length,
    userPosition: userEntry ? userEntry.position : undefined,
  };

  return Response.json(stats);
}

// ---------------------------------------------------------------------------
// POST /api/waitlist/[eventId] — join waitlist
// ---------------------------------------------------------------------------

export async function POST(request: Request, { params }: Params) {
  const { eventId } = await params;
  const id = parseInt(eventId);
  const { address } = await request.json();

  if (!address) {
    return Response.json({ error: "address required" }, { status: 400 });
  }

  const alreadyIn = store.entries.find(
    (e) =>
      e.eventId === id &&
      e.userAddress.toLowerCase() === address.toLowerCase() &&
      e.status === "waiting"
  );

  if (alreadyIn) {
    return Response.json({ error: "Already on waitlist" }, { status: 409 });
  }

  const position =
    store.entries.filter((e) => e.eventId === id && e.status === "waiting")
      .length + 1;

  const entry: WaitlistEntry = {
    id: String(store.nextId++),
    eventId: id,
    userAddress: address.toLowerCase(),
    joinedAt: new Date().toISOString(),
    position,
    status: "waiting",
  };

  store.entries.push(entry);
  return Response.json(entry, { status: 201 });
}

// ---------------------------------------------------------------------------
// DELETE /api/waitlist/[eventId] — leave waitlist
// ---------------------------------------------------------------------------

export async function DELETE(request: Request, { params }: Params) {
  const { eventId } = await params;
  const id = parseInt(eventId);
  const { address } = await request.json();

  const idx = store.entries.findIndex(
    (e) =>
      e.eventId === id &&
      e.userAddress.toLowerCase() === address.toLowerCase() &&
      e.status === "waiting"
  );

  if (idx === -1) {
    return Response.json({ error: "Not on waitlist" }, { status: 404 });
  }

  store.entries.splice(idx, 1);

  // Re-rank remaining entries for this event
  let pos = 1;
  store.entries
    .filter((e) => e.eventId === id && e.status === "waiting")
    .sort(
      (a, b) => new Date(a.joinedAt).getTime() - new Date(b.joinedAt).getTime()
    )
    .forEach((e) => {
      e.position = pos++;
    });

  return new Response(null, { status: 204 });
}
