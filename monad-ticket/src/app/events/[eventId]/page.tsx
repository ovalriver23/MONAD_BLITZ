"use client";

import { useParams } from "next/navigation";
import { PageWrapper } from "../../../components/layout/PageWrapper";
import { BuyTicketPanel } from "../../../components/events/BuyTicketPanel";
import { JoinWaitlistButton } from "../../../components/waitlist/JoinWaitlistButton";
import { PageSpinner } from "../../../components/ui/Spinner";
import { Badge } from "../../../components/ui/Badge";
import { formatPrice, isSoldOut } from "../../../lib/utils";
import { useEvent } from "../../../hooks/useEvents";

export default function EventDetailPage() {
  const params = useParams<{ eventId: string }>();
  const { event, loading, error } = useEvent(Number(params.eventId));

  if (loading) return <PageSpinner />;
  if (error || !event)
    return <PageWrapper><p className="text-red-500">{error ?? "Event not found"}</p></PageWrapper>;

  const soldOut = isSoldOut(event.soldCount, event.maxTickets);

  return (
    <PageWrapper>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left: details */}
        <div className="lg:col-span-2 space-y-4">
          <div className="h-64 w-full rounded-2xl bg-linear-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-6xl">
            🎵
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="soulbound">Soulbound</Badge>
            {soldOut && <Badge variant="danger">Sold Out</Badge>}
          </div>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
            {event.name}
          </h1>
          <div className="text-zinc-500 dark:text-zinc-400 space-y-1 text-sm">
            <p>Artist: {event.artist || "—"}</p>
            <p>Venue: {event.venue || "—"}</p>
            <p>City: {event.city || "—"}</p>
            <p>Date: {event.date || "—"}</p>
          </div>
          <p>{event.description || "No description provided."}</p>
        </div>

        {/* Right: buy / waitlist */}
        <div className="space-y-4">
          <BuyTicketPanel event={event} />
          {soldOut && (
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h3 className="mb-2 font-semibold text-zinc-800 dark:text-zinc-100">
                Join the Waitlist
              </h3>
              <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">
                Get notified automatically when a ticket is returned.
              </p>
              <JoinWaitlistButton eventId={event.id} />
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
