"use client";

import { type ReactNode } from "react";
import { WagmiProvider, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    RainbowKitProvider,
    darkTheme,
    getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import { type Chain } from "viem";
import "@rainbow-me/rainbowkit/styles.css";

// ---------------------------------------------------------------------------
// Monad Testnet chain definition
// ---------------------------------------------------------------------------

const monadTestnet: Chain = {
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
// wagmi config
// ---------------------------------------------------------------------------

const config = getDefaultConfig({
    appName: "WhitePass",
    projectId: "whitepass-monad-ticket", // WalletConnect project ID (placeholder)
    chains: [monadTestnet],
    transports: {
        [monadTestnet.id]: http("https://testnet-rpc.monad.xyz"),
    },
    ssr: true,
});

const queryClient = new QueryClient();

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export function Web3Provider({ children }: { children: ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider
                    theme={darkTheme({
                        accentColor: "#7c3aed", // violet-600 to match existing design
                        accentColorForeground: "white",
                        borderRadius: "large",
                    })}
                >
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
