// ---------------------------------------------------------------------------
// Chain & contract configuration
// ---------------------------------------------------------------------------

/** Monad Testnet chain ID */
export const MONAD_CHAIN_ID = 41454;

export const MONAD_CHAIN_CONFIG = {
  chainId: `0x${MONAD_CHAIN_ID.toString(16)}`,
  chainName: "Monad Testnet",
  nativeCurrency: {
    name: "MON",
    symbol: "MON",
    decimals: 18,
  },
  rpcUrls: ["https://testnet-rpc.monad.xyz"],
  blockExplorerUrls: ["https://testnet-explorer.monad.xyz"],
} as const;

/** Deployed TicketFactory address — update after deploy */
export const CONTRACT_ADDRESS =
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ?? "0x0000000000000000000000000000000000000000";

/**
 * Platform treasury address — receives payment for mock/demo ticket purchases.
 * Set NEXT_PUBLIC_PLATFORM_ADDRESS in .env.local to your own wallet.
 */
export const PLATFORM_ADDRESS =
  process.env.NEXT_PUBLIC_PLATFORM_ADDRESS ?? CONTRACT_ADDRESS;

/** Maximum tickets one wallet can hold per event */
export const MAX_TICKETS_PER_USER = 2;

// ---------------------------------------------------------------------------
// App-level constants
// ---------------------------------------------------------------------------

export const APP_NAME = "WhitePass";
export const APP_DESCRIPTION =
  "Concert tickets that can never be scalped — locked to your account forever.";

export const ROUTES = {
  home: "/",
  events: "/events",
  event: (id: number | string) => `/events/${id}`,
  myTickets: "/my-tickets",
  ticket: (id: number | string) => `/my-tickets/${id}`,
  waitlist: "/waitlist",
  eventWaitlist: (id: number | string) => `/waitlist/${id}`,
  return: "/return",
  verify: "/verify",
  admin: "/admin",
} as const;
