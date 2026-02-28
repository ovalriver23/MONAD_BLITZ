"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { PageWrapper } from "../../../components/layout/PageWrapper";
import { TicketCard } from "../../../components/tickets/TicketCard";
import { ReturnTicketModal } from "../../../components/tickets/ReturnTicketModal";
import { Button } from "../../../components/ui/Button";
import { WalletGuard } from "../../../components/wallet/WalletGuard";
import { useMyTickets } from "../../../hooks/useTickets";
import { ROUTES } from "../../../lib/constants";
import { PageSpinner } from "../../../components/ui/Spinner";

export default function TicketDetailPage() {
  const params = useParams<{ ticketId: string }>();
  const tokenId = Number(params.ticketId);
  const { tickets, loading } = useMyTickets();

  if (loading) return <PageSpinner />;
  const ticket = tickets.find((t) => t.tokenId === tokenId);

  if (!ticket) {
    return (
      <PageWrapper narrow>
        <p className="text-zinc-500">Ticket not found or not owned by you.</p>
        <Link href={ROUTES.myTickets}>
          <Button variant="secondary" className="mt-4">Back to My Tickets</Button>
        </Link>
      </PageWrapper>
    );
  }

  const handleReturn = async (_tokenId: number) => {
    // Contract call to return ticket — implement when return flow is ready
    console.log("Return ticket", _tokenId);
  };

  return (
    <PageWrapper narrow>
      <WalletGuard>
        <div className="space-y-4">
          <TicketCard ticket={ticket} showQR />
          <div className="flex items-center justify-between">
            <Link href={ROUTES.myTickets}>
              <Button variant="ghost" size="sm">← Back</Button>
            </Link>
            <ReturnTicketModal ticket={ticket} onConfirm={handleReturn} />
          </div>
        </div>
      </WalletGuard>
    </PageWrapper>
  );
}
