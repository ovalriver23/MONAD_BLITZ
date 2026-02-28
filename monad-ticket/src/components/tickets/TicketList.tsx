"use client";

import { useMyTickets } from "../../hooks/useTickets";
import { TicketCard } from "./TicketCard";
import { PageSpinner } from "../ui/Spinner";

export function TicketList() {
  const { tickets, loading, error } = useMyTickets();

  if (loading) return <PageSpinner />;
  if (error) return <p className="text-red-500">{error}</p>;
  if (tickets.length === 0) {
    return (
      <p className="py-16 text-center text-zinc-400">
        You don&apos;t have any tickets yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.tokenId} ticket={ticket} event={ticket.event} />
      ))}
    </div>
  );
}
