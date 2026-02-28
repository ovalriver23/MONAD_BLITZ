"use client";

import { useWallet } from "../../context/WalletContext";
import { shortenAddress } from "../../lib/utils";
import { Button } from "../ui/Button";

export function ConnectWallet() {
  const { address, isConnected, isConnecting, connect, disconnect } = useWallet();

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <span className="hidden rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700 dark:bg-violet-900/20 dark:text-violet-400 sm:inline">
          {shortenAddress(address)}
        </span>
        <Button variant="ghost" size="sm" onClick={disconnect}>
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <Button size="sm" loading={isConnecting} onClick={connect}>
      Connect Wallet
    </Button>
  );
}
