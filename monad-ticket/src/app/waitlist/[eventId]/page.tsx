"use client";

import { useParams } from "next/navigation";
import { PageWrapper } from "../../../components/layout/PageWrapper";
import { JoinWaitlistButton } from "../../../components/waitlist/JoinWaitlistButton";
import { useEvent } from "../../../hooks/useEvents";
import { PageSpinner } from "../../../components/ui/Spinner";

export default function EventWaitlistPage() {
  const params = useParams<{ eventId: string }>();
  const { event, loading } = useEvent(Number(params.eventId));

  if (loading) return <PageSpinner />;

  return (
    <PageWrapper narrow>
      <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-white">
        Waitlist
      </h1>
      <p className="mb-6 text-zinc-500 dark:text-zinc-400">
        {event?.name ?? `Event #${params.eventId}`}
      </p>
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
          This event is sold out. Join the waitlist and you'll automatically
          receive a ticket if someone returns theirs — at the original price.
        </p>
        <JoinWaitlistButton eventId={Number(params.eventId)} />
      </div>
    </PageWrapper>
  );
}
