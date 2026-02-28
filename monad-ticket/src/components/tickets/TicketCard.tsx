"use client";

import { QRCodeSVG } from "qrcode.react";
import { formatEventDate } from "../../lib/utils";
import { Badge } from "../ui/Badge";
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "../ui/Card";
import type { Ticket } from "../../types/ticket";
import type { Event } from "../../types/event";

interface TicketCardProps {
  ticket: Ticket;
  event?: Event;
  showQR?: boolean;
  onReturn?: () => void;
}

export function TicketCard({ ticket, event, showQR = false }: TicketCardProps) {
  return (
    <Card className="relative overflow-hidden">
      {/* Dashed perforation line */}
      <div className="absolute left-0 right-0 top-1/2 border-t-2 border-dashed border-zinc-200 dark:border-zinc-700" />

      <CardHeader>
        <div>
          <CardTitle>{event?.name ?? `Event #${ticket.eventId}`}</CardTitle>
          <p className="text-sm text-zinc-500 mt-0.5">
            {event?.date ? formatEventDate(event.date) : "—"}
          </p>
        </div>
        <Badge variant="soulbound">Soulbound</Badge>
      </CardHeader>

      <CardBody>
        <p>Venue: {event?.venue ?? "—"}</p>
        <p>Token ID: #{ticket.tokenId}</p>
        {ticket.isUsed && <p className="text-red-500 font-medium">✓ Used</p>}
      </CardBody>

      {showQR && ticket.qrPayload && (
        <CardFooter className="flex justify-center pt-4 border-t-0">
          <QRCodeSVG
            value={ticket.qrPayload}
            size={160}
            includeMargin
            className="rounded-xl"
          />
        </CardFooter>
      )}
    </Card>
  );
}
