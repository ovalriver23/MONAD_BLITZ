import { ethers } from "ethers";

// ---------------------------------------------------------------------------
// ETH / price formatting
// ---------------------------------------------------------------------------

export function weiToEth(wei: bigint | string, decimals = 4): string {
  return Number(ethers.formatEther(wei)).toFixed(decimals);
}

export function ethToWei(eth: string): bigint {
  return ethers.parseEther(eth);
}

export function formatPrice(priceWei: string): string {
  const eth = weiToEth(BigInt(priceWei));
  return `${eth} MON`;
}

// ---------------------------------------------------------------------------
// Date / time
// ---------------------------------------------------------------------------

export function formatEventDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function isEventPast(iso: string): boolean {
  return new Date(iso) < new Date();
}

export function timeUntilEvent(iso: string): string {
  const diff = new Date(iso).getTime() - Date.now();
  if (diff <= 0) return "Event has passed";
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  if (days > 0) return `${days}d ${hours}h away`;
  const mins = Math.floor((diff % 3_600_000) / 60_000);
  return `${hours}h ${mins}m away`;
}

// ---------------------------------------------------------------------------
// Address formatting
// ---------------------------------------------------------------------------

export function shortenAddress(address: string, chars = 4): string {
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}

// ---------------------------------------------------------------------------
// Availability helpers
// ---------------------------------------------------------------------------

export function availabilityPercent(sold: number, max: number): number {
  if (max === 0) return 100;
  return Math.round((sold / max) * 100);
}

export function isSoldOut(sold: number, max: number): boolean {
  return sold >= max;
}

export function remainingTickets(sold: number, max: number): number {
  return Math.max(0, max - sold);
}

// ---------------------------------------------------------------------------
// Class name merging (lightweight alternative to clsx)
// ---------------------------------------------------------------------------

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
