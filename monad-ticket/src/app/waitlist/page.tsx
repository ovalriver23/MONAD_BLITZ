"use client";

import { PageHeader, PageWrapper } from "../../components/layout/PageWrapper";
import { WaitlistCard } from "../../components/waitlist/WaitlistCard";
import { WalletGuard } from "../../components/wallet/WalletGuard";
import { PageSpinner } from "../../components/ui/Spinner";
import { useMyWaitlistEntries } from "../../hooks/useWaitlist";

export default function WaitlistPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="My Waitlist"
        description="Events you're queued for. You'll get priority when a ticket is returned."
      />
      <WalletGuard>
        <WaitlistEntries />
      </WalletGuard>
    </PageWrapper>
  );
}

function WaitlistEntries() {
  const { entries, loading, error } = useMyWaitlistEntries();

  if (loading) return <PageSpinner />;
  if (error) return <p className="text-red-500">{error}</p>;
  if (entries.length === 0)
    return (
      <p className="py-16 text-center text-zinc-400">
        You&apos;re not on any waitlists. Browse sold-out events to join.
      </p>
    );

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry) => (
        <WaitlistCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
}
