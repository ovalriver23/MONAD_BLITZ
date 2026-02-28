"use client";

import { useWaitlist } from "../../hooks/useWaitlist";
import { Button } from "../ui/Button";
import { Spinner } from "../ui/Spinner";
import { WalletGuard } from "../wallet/WalletGuard";

interface JoinWaitlistProps {
  eventId: number;
}

export function JoinWaitlistButton({ eventId }: JoinWaitlistProps) {
  const { stats, loading, joining, leaving, error, join, leave } =
    useWaitlist(eventId);

  if (loading) return <Spinner size="sm" />;

  const onList = stats?.userPosition !== undefined;

  return (
    <WalletGuard>
      <div className="space-y-1">
        {stats && (
          <p className="text-sm text-zinc-500">
            {stats.totalWaiting} people waiting
            {onList && ` • You are #${stats.userPosition}`}
          </p>
        )}
        {error && <p className="text-xs text-red-500">{error}</p>}
        {onList ? (
          <Button variant="secondary" size="sm" loading={leaving} onClick={leave}>
            Leave Waitlist
          </Button>
        ) : (
          <Button variant="secondary" size="sm" loading={joining} onClick={join}>
            Join Waitlist
          </Button>
        )}
      </div>
    </WalletGuard>
  );
}
