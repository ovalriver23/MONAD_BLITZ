"use client";

import { useState } from "react";
import { formatPrice, isSoldOut, remainingTickets } from "../../lib/utils";
import { useMintTicket } from "../../hooks/useEvents";
import { useHasTicket } from "../../hooks/useTickets";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import { WalletGuard } from "../wallet/WalletGuard";
import type { Event } from "../../types/event";

export function BuyTicketPanel({ event }: { event: Event }) {
  const soldOut = isSoldOut(event.soldCount, event.maxTickets);
  const { hasTicket } = useHasTicket(event.id);
  const { mint, tx, reset } = useMintTicket();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleBuy = async () => {
    await mint(event.id, event.priceWei);
    setConfirmOpen(false);
  };

  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          {formatPrice(event.priceWei)}
        </span>
        {soldOut ? (
          <Badge variant="danger">Sold Out</Badge>
        ) : (
          <Badge variant="success">{remainingTickets(event.soldCount, event.maxTickets)} available</Badge>
        )}
      </div>

      {/* Soulbound notice */}
      <div className="mb-4 rounded-xl bg-violet-50 p-3 text-sm text-violet-700 dark:bg-violet-900/20 dark:text-violet-300">
        🔒 This ticket is <strong>soulbound</strong> — it cannot be transferred,
        sold, or given away. Only returns at original price.
      </div>

      <WalletGuard>
        {hasTicket ? (
          <Badge variant="soulbound" className="text-sm py-1 px-3">
            ✓ You own a ticket for this event
          </Badge>
        ) : soldOut ? (
          <Button fullWidth variant="secondary" disabled>
            Sold Out — Join Waitlist Below
          </Button>
        ) : (
          <Button fullWidth onClick={() => setConfirmOpen(true)}>
            Buy Ticket
          </Button>
        )}
      </WalletGuard>

      {/* Confirm modal */}
      <Modal open={confirmOpen} onClose={() => { setConfirmOpen(false); reset(); }} title="Confirm Purchase">
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
          You are about to purchase 1 ticket for{" "}
          <strong className="text-zinc-900 dark:text-zinc-50">{event.name}</strong>.
        </p>
        <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
          Price: <strong>{formatPrice(event.priceWei)}</strong>
        </p>
        {tx.status === "error" && (
          <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{tx.error}</p>
        )}
        {tx.status === "success" && (
          <p className="mb-4 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">
            Ticket minted! 🎉
          </p>
        )}
        <div className="flex gap-2">
          <Button variant="secondary" fullWidth onClick={() => setConfirmOpen(false)}>
            Cancel
          </Button>
          <Button
            fullWidth
            loading={tx.status === "pending"}
            disabled={tx.status === "success"}
            onClick={handleBuy}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </div>
  );
}
