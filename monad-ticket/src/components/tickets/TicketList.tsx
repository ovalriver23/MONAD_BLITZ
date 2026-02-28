"use client";

import Link from "next/link";
import { useMyTickets } from "../../hooks/useTickets";
import { TicketCard } from "./TicketCard";
import { PageSpinner } from "../ui/Spinner";
import { ROUTES } from "../../lib/constants";

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
        <Link
          key={ticket.tokenId}
          href={ROUTES.ticket(ticket.tokenId)}
          className="block transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <TicketCard ticket={ticket} event={ticket.event} />
        </Link>
      ))}
    </div>
  );
}
