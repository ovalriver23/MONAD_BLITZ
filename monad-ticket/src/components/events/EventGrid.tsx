import { EventCard } from "./EventCard";
import { PageSpinner } from "../ui/Spinner";
import type { Event } from "../../types/event";

interface EventGridProps {
  events: Event[];
  loading?: boolean;
  emptyMessage?: string;
}

export function EventGrid({ events, loading, emptyMessage = "No events found." }: EventGridProps) {
  if (loading) return <PageSpinner />;

  if (events.length === 0) {
    return (
      <p className="py-16 text-center text-zinc-400">{emptyMessage}</p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
