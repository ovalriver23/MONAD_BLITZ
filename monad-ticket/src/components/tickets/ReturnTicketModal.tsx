"use client";

import { Button } from "../ui/Button";
import type { Ticket } from "../../types/ticket";

interface ReturnTicketModalProps {
  ticket: Ticket;
  onConfirm: (tokenId: number) => Promise<void>;
}

export function ReturnTicketModal({ ticket: _ticket, onConfirm: _onConfirm }: ReturnTicketModalProps) {
  return (
    <Button variant="secondary" size="sm" disabled>
      Return Ticket — Coming Soon
    </Button>
  );
}

