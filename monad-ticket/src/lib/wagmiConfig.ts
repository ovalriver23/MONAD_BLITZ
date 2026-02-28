import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { type Chain } from "viem";

// ---------------------------------------------------------------------------
// Monad Testnet chain definition
// ---------------------------------------------------------------------------

export const monadTestnet: Chain = {
    id: 10143,
    name: "Monad Testnet",
    nativeCurrency: {
        name: "MON",
        symbol: "MON",
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ["https://testnet-rpc.monad.xyz"] },
    },
    blockExplorers: {
        default: {
            name: "Monad Explorer",
            url: "https://testnet-explorer.monad.xyz",
        },
    },
    testnet: true,
};

// ---------------------------------------------------------------------------
// wagmi config — shared across provider and action calls
// ---------------------------------------------------------------------------

export const wagmiConfig = getDefaultConfig({
    appName: "WhitePass",
    projectId: "whitepass-monad-ticket",
    chains: [monadTestnet],
    transports: {
        [monadTestnet.id]: http("https://testnet-rpc.monad.xyz"),
    },
    ssr: true,
});
