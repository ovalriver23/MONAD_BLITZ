"use client";

import { useState } from "react";
import { useWriteContract } from "wagmi";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import { removeMockTicket } from "../../lib/mockTicketStore";
import { CONTRACT_ADDRESS } from "../../lib/constants";
import type { Ticket } from "../../types/ticket";

const BURN_ABI = [
  {
    type: "function",
    name: "burnTicket",
    stateMutability: "nonpayable",
    inputs: [{ name: "tokenId", type: "uint256" }],
    outputs: [],
  },
] as const;

interface ReturnTicketModalProps {
  ticket: Ticket;
  onReturned?: () => void;
}

export function ReturnTicketModal({ ticket, onReturned }: ReturnTicketModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { writeContractAsync } = useWriteContract();

  const handleReturn = async () => {
    setLoading(true);
    setError(null);
    try {
      // Try on-chain burn first (for real on-chain tickets)
      try {
        await writeContractAsync({
          address: CONTRACT_ADDRESS as `0x${string}`,
          abi: BURN_ABI,
          functionName: "burnTicket",
          args: [BigInt(ticket.tokenId)],
        });
      } catch {
        // If on-chain burn fails (mock ticket), just remove locally
      }

      // Always remove from local storage too
      removeMockTicket(ticket.tokenId);

      setDone(true);
      setTimeout(() => {
        setOpen(false);
        setDone(false);
        onReturned?.();
      }, 1500);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Return failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        variant="danger"
        size="sm"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
      >
        Return Ticket
      </Button>

      <Modal open={open} onClose={() => setOpen(false)} title="Return Ticket">
        {done ? (
          <div className="py-4 text-center">
            <p className="text-green-600 font-medium">
              ✓ Ticket returned successfully!
            </p>
          </div>
        ) : (
          <>
            <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
              You are about to return ticket <strong>#{ticket.tokenId}</strong> for
              event <strong>#{ticket.eventId}</strong>.
            </p>
            <p className="mb-6 text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
              ⚠️ This action cannot be undone. The ticket will be burned and you will receive a refund.
            </p>
            {error && (
              <p className="mb-4 text-sm text-red-500 text-center">{error}</p>
            )}
            <div className="flex gap-2">
              <Button
                variant="secondary"
                fullWidth
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="danger"
                fullWidth
                loading={loading}
                onClick={handleReturn}
              >
                Confirm Return
              </Button>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
