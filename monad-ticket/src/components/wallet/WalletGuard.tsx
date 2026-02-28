"use client";

import { type ReactNode } from "react";
import { useWallet } from "../../context/WalletContext";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface WalletGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/** Renders children only when wallet is connected; otherwise renders a connect prompt. */
export function WalletGuard({ children, fallback }: WalletGuardProps) {
  const { isConnected } = useWallet();

  if (isConnected) return <>{children}</>;

  return (
    fallback ?? (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <p className="text-zinc-500 dark:text-zinc-400">
          Connect your wallet to continue.
        </p>
        <ConnectButton />
      </div>
    )
  );
}

