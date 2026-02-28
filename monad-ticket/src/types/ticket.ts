import type { Event } from "./event";

export interface Ticket {
  tokenId: number;
  eventId: number;
  event?: Event;
  owner: string;
  purchasedAt: string; // ISO string
  isUsed: boolean;
  qrPayload?: string; // signed QR payload
}

export interface TicketQRPayload {
  tokenId: number;
  eventId: number;
  owner: string;
  issuedAt: number; // unix timestamp
  signature: string;
}

export interface TicketVerifyResult {
  valid: boolean;
  reason?: string;
}

export interface ReturnTicketRequest {
  tokenId: number;
  eventId: number;
}
