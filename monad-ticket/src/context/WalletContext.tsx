"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";
import { useAccount, useChainId, useSwitchChain } from "wagmi";
import type { WalletState } from "../types/contract";

// ---------------------------------------------------------------------------
// Context shape — same API as before so all components keep working
// ---------------------------------------------------------------------------

interface WalletContextValue extends WalletState {
  connect: () => Promise<void>;
  disconnect: () => void;
  ensureCorrectChain: () => Promise<boolean>;
}

const WalletContext = createContext<WalletContextValue | null>(null);

const MONAD_CHAIN_ID = 10143;

// ---------------------------------------------------------------------------
// Provider — thin wrapper around wagmi hooks
// ---------------------------------------------------------------------------

export function WalletProvider({ children }: { children: ReactNode }) {
  const { address, isConnected, isConnecting } = useAccount();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();

  const state: WalletState = {
    address: address ?? null,
    chainId: chainId ?? null,
    isConnected,
    isConnecting,
    error: null,
  };

  // RainbowKit handles connect/disconnect via its modal,
  // but we keep the API for WalletGuard backward compatibility
  const connect = async () => {
    // No-op: RainbowKit's ConnectButton handles connection
  };

  const disconnect = () => {
    // No-op: RainbowKit's ConnectButton handles disconnection
  };

  const ensureCorrectChain = async (): Promise<boolean> => {
    if (chainId === MONAD_CHAIN_ID) return true;
    try {
      switchChain({ chainId: MONAD_CHAIN_ID });
      return true;
    } catch {
      return false;
    }
  };

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
