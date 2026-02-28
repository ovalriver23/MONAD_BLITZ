"use client";

import { PageHeader, PageWrapper } from "../../components/layout/PageWrapper";
import { TicketList } from "../../components/tickets/TicketList";
import { WalletGuard } from "../../components/wallet/WalletGuard";

export default function MyTicketsPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="My Tickets"
        description="Your soulbound tickets — locked to your wallet, impossible to scalp."
      />
      <WalletGuard>
        <TicketList />
      </WalletGuard>
    </PageWrapper>
  );
}
