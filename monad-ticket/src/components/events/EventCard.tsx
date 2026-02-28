"use client";

import Link from "next/link";
import { ROUTES } from "../../lib/constants";
import {
  availabilityPercent,
  cn,
  formatPrice,
  isSoldOut,
  remainingTickets,
} from "../../lib/utils";
import { Badge } from "../ui/Badge";
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "../ui/Card";
import type { Event } from "../../types/event";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const soldOut = isSoldOut(event.soldCount, event.maxTickets);
  const remaining = remainingTickets(event.soldCount, event.maxTickets);
  const pct = availabilityPercent(event.soldCount, event.maxTickets);

  return (
    <Link href={ROUTES.event(event.id)}>
      <Card hover className="flex flex-col h-full">
        {/* Placeholder image */}
        <div className="mb-4 h-36 w-full rounded-xl bg-linear-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-3xl text-white">
          🎵
        </div>

        <CardHeader>
          <CardTitle className="line-clamp-2">{event.name}</CardTitle>
          {soldOut ? (
            <Badge variant="danger">Sold Out</Badge>
          ) : (
            <Badge variant="success">{remaining} left</Badge>
          )}
        </CardHeader>

        <CardBody>
          <p className="line-clamp-1">{event.artist || "—"}</p>
          <p className="line-clamp-1">{event.venue || "—"}</p>
        </CardBody>

        <CardFooter>
          <span className="font-semibold text-zinc-800 dark:text-zinc-100">
            {formatPrice(event.priceWei)}
          </span>
          {/* Availability bar */}
          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
            <div
              className={cn(
                "h-full rounded-full transition-all",
                soldOut ? "bg-red-500" : pct > 80 ? "bg-amber-500" : "bg-green-500"
              )}
              style={{ width: `${pct}%` }}
            />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
