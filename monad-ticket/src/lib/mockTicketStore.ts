import type { Ticket } from "../types/ticket";

const STORAGE_KEY = "whitepass_mock_tickets";

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

export function clearMockTickets(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
