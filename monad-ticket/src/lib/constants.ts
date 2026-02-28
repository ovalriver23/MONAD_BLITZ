// ---------------------------------------------------------------------------
// Chain & contract configuration
// ---------------------------------------------------------------------------

/** Monad Testnet chain ID */
export const MONAD_CHAIN_ID = 10143;

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
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ??
  "0x9c3EB06F5e56baF84B9DD4c2490d9feF29905a17";

/**
 * Platform treasury address — receives payment for mock/demo ticket purchases.
 * Set NEXT_PUBLIC_PLATFORM_ADDRESS in .env.local to your own wallet.
 */
export const PLATFORM_ADDRESS =
  process.env.NEXT_PUBLIC_PLATFORM_ADDRESS ?? CONTRACT_ADDRESS;

/** Contract owner wallet address — only this wallet can access /admin */
export const OWNER_ADDRESS = "0x36d1921b5856F87F8C76c720898a7322C43079f5";

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
