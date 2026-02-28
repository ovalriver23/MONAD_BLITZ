export interface WaitlistEntry {
  id: string;
  eventId: number;
  userAddress: string;
  joinedAt: string; // ISO string
  position: number;
  status: WaitlistStatus;
}

export type WaitlistStatus = "waiting" | "notified" | "fulfilled" | "expired";

export interface WaitlistStats {
  eventId: number;
  totalWaiting: number;
  userPosition?: number; // undefined if user is not on the list
}
