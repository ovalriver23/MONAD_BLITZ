"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import type { Ticket } from "../../types/ticket";

interface ReturnTicketModalProps {
  ticket: Ticket;
  onConfirm: (tokenId: number) => Promise<void>;
}

export function ReturnTicketModal({ ticket, onConfirm }: ReturnTicketModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onConfirm(ticket.tokenId);
      setDone(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button variant="danger" size="sm" onClick={() => setOpen(true)}>
        Return Ticket
      </Button>

      <Modal open={open} onClose={() => setOpen(false)} title="Return Ticket">
        {done ? (
          <div className="py-4 text-center">
            <p className="text-green-600 font-medium">
              ✓ Ticket returned. Refund will be processed shortly.
            </p>
            <Button className="mt-4" onClick={() => setOpen(false)}>Close</Button>
          </div>
        ) : (
          <>
            <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
              You are about to return ticket <strong>#{ticket.tokenId}</strong> for
              event <strong>#{ticket.eventId}</strong>. You will receive a full
              refund at the original purchase price.
            </p>
            <p className="mb-6 text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
              ⚠️ This action is irreversible. The ticket will be burned and the
              next person on the waitlist will receive it automatically.
            </p>
            <div className="flex gap-2">
              <Button variant="secondary" fullWidth onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" fullWidth loading={loading} onClick={handleConfirm}>
                Confirm Return
              </Button>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
