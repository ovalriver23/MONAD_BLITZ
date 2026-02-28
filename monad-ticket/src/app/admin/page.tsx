"use client";

import { useState } from "react";
import { PageHeader, PageWrapper } from "../../components/layout/PageWrapper";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { WalletGuard } from "../../components/wallet/WalletGuard";
import { getWriteContract } from "../../lib/contract";
import { ethToWei } from "../../lib/utils";
import type { TxState } from "../../types/contract";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [maxTickets, setMaxTickets] = useState("");
  const [priceEth, setPriceEth] = useState("");
  const [tx, setTx] = useState<TxState>({ status: "idle" });

  const handleCreate = async () => {
    setTx({ status: "pending" });
    try {
      const contract = await getWriteContract();
      if (!contract) throw new Error("Wallet not connected");
      const receipt = await contract.createEvent(
        name,
        parseInt(maxTickets),
        ethToWei(priceEth)
      );
      await receipt.wait();
      setTx({ status: "success", hash: receipt.hash });
      setName("");
      setMaxTickets("");
      setPriceEth("");
    } catch (err: unknown) {
      setTx({ status: "error", error: err instanceof Error ? err.message : "Failed" });
    }
  };

  return (
    <PageWrapper narrow>
      <PageHeader title="Admin" description="Platform owner controls." />

      <WalletGuard>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50 space-y-4">
          <h2 className="font-semibold text-lg text-zinc-900 dark:text-zinc-50">
            Create New Event
          </h2>

          <Input
            label="Event Name"
            placeholder="e.g. Travis Scott – Utopia Tour"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Max Tickets"
            type="number"
            placeholder="500"
            value={maxTickets}
            onChange={(e) => setMaxTickets(e.target.value)}
          />
          <Input
            label="Price (MON)"
            type="number"
            placeholder="0.05"
            value={priceEth}
            onChange={(e) => setPriceEth(e.target.value)}
          />

          {tx.status === "error" && (
            <p className="text-sm text-red-500">{tx.error}</p>
          )}
          {tx.status === "success" && (
            <p className="text-sm text-green-600">Event created! tx: {tx.hash}</p>
          )}

          <Button
            fullWidth
            loading={tx.status === "pending"}
            disabled={!name || !maxTickets || !priceEth}
            onClick={handleCreate}
          >
            Create Event
          </Button>
        </div>
      </WalletGuard>
    </PageWrapper>
  );
}
