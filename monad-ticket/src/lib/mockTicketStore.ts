import type { Ticket } from "../types/ticket";

const STORAGE_KEY = "whitepass_mock_tickets";
const RETURNED_KEY = "whitepass_returned_tickets";

export function getMockTickets(): Ticket[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as Ticket[];
  } catch {
    return [];
  }
}

export function saveMockTicket(ticket: Ticket): void {
  if (typeof window === "undefined") return;
  const existing = getMockTickets();
  // avoid duplicates
  if (existing.some((t) => t.tokenId === ticket.tokenId)) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, ticket]));
}

export function removeMockTicket(tokenId: number): void {
  if (typeof window === "undefined") return;
  // Remove from mock tickets list
  const existing = getMockTickets();
  const filtered = existing.filter((t) => t.tokenId !== tokenId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  // Also add to returned blacklist (handles on-chain tickets too)
  markTicketReturned(tokenId);
}

export function clearMockTickets(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

// ---------------------------------------------------------------------------
// Returned tickets blacklist — hides on-chain tickets that can't be burned
// ---------------------------------------------------------------------------

export function markTicketReturned(tokenId: number): void {
  if (typeof window === "undefined") return;
  const returned = getReturnedTokenIds();
  if (!returned.includes(tokenId)) {
    returned.push(tokenId);
    localStorage.setItem(RETURNED_KEY, JSON.stringify(returned));
  }
}

export function isTicketReturned(tokenId: number): boolean {
  return getReturnedTokenIds().includes(tokenId);
}

function getReturnedTokenIds(): number[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(RETURNED_KEY) ?? "[]") as number[];
  } catch {
    return [];
  }
}
