"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getBrowserProvider, isCorrectChain, switchToMonad } from "../lib/contract";
import type { WalletState } from "../types/contract";

// ---------------------------------------------------------------------------
// Context shape
// ---------------------------------------------------------------------------

interface WalletContextValue extends WalletState {
  connect: () => Promise<void>;
  disconnect: () => void;
  ensureCorrectChain: () => Promise<boolean>;
}

const WalletContext = createContext<WalletContextValue | null>(null);

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export function WalletProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<WalletState>({
    address: null,
    chainId: null,
    isConnected: false,
    isConnecting: false,
    error: null,
  });

  // ── auto-reconnect on mount ──────────────────────────────────────────────
  useEffect(() => {
    const tryAutoConnect = async () => {
      const provider = getBrowserProvider();
      if (!provider) return;
      try {
        const accounts: string[] = await provider.send("eth_accounts", []);
        if (accounts.length > 0) {
          const network = await provider.getNetwork();
          setState((s) => ({
            ...s,
            address: accounts[0],
            chainId: Number(network.chainId),
            isConnected: true,
          }));
        }
      } catch {}
    };
    tryAutoConnect();
  }, []);

  // ── wallet event listeners ───────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined" || !window.ethereum) return;

    const onAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        setState({
          address: null,
          chainId: null,
          isConnected: false,
          isConnecting: false,
          error: null,
        });
      } else {
        setState((s) => ({ ...s, address: accounts[0], isConnected: true }));
      }
    };

    const onChainChanged = (chainId: string) => {
      setState((s) => ({ ...s, chainId: parseInt(chainId, 16) }));
    };

    window.ethereum.on("accountsChanged", onAccountsChanged);
    window.ethereum.on("chainChanged", onChainChanged);
    return () => {
      window.ethereum?.removeListener("accountsChanged", onAccountsChanged);
      window.ethereum?.removeListener("chainChanged", onChainChanged);
    };
  }, []);

  // ── actions ──────────────────────────────────────────────────────────────
  const connect = useCallback(async () => {
    const provider = getBrowserProvider();
    if (!provider) {
      setState((s) => ({ ...s, error: "No Web3 wallet detected. Install MetaMask." }));
      return;
    }
    setState((s) => ({ ...s, isConnecting: true, error: null }));
    try {
      const accounts: string[] = await provider.send("eth_requestAccounts", []);
      const network = await provider.getNetwork();
      setState({
        address: accounts[0],
        chainId: Number(network.chainId),
        isConnected: true,
        isConnecting: false,
        error: null,
      });
    } catch (err: unknown) {
      setState((s) => ({
        ...s,
        isConnecting: false,
        error: err instanceof Error ? err.message : "Connection rejected",
      }));
    }
  }, []);

  const disconnect = useCallback(() => {
    setState({
      address: null,
      chainId: null,
      isConnected: false,
      isConnecting: false,
      error: null,
    });
  }, []);

  const ensureCorrectChain = useCallback(async (): Promise<boolean> => {
    const ok = await isCorrectChain();
    if (ok) return true;
    try {
      await switchToMonad();
      return true;
    } catch {
      setState((s) => ({ ...s, error: "Please switch to Monad Testnet." }));
      return false;
    }
  }, []);

  return (
    <WalletContext.Provider value={{ ...state, connect, disconnect, ensureCorrectChain }}>
      {children}
    </WalletContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used inside <WalletProvider>");
  return ctx;
}
