"use client";

import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { PageWrapper } from "../../../components/layout/PageWrapper";
import { TicketCard } from "../../../components/tickets/TicketCard";
import { ReturnTicketModal } from "../../../components/tickets/ReturnTicketModal";
import { Button } from "../../../components/ui/Button";
import { WalletGuard } from "../../../components/wallet/WalletGuard";
import { useMyTickets } from "../../../hooks/useTickets";
import { useWallet } from "../../../context/WalletContext";
import { ROUTES } from "../../../lib/constants";
import { PageSpinner } from "../../../components/ui/Spinner";

const QR_REFRESH_INTERVAL = 5; // seconds

export default function TicketDetailPage() {
  const params = useParams<{ ticketId: string }>();
  const tokenId = Number(params.ticketId);
  const { tickets, loading } = useMyTickets();
  const { address } = useWallet();

  const [qrValue, setQrValue] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(QR_REFRESH_INTERVAL);
  const [qrError, setQrError] = useState<string | null>(null);

  const ticket = loading ? undefined : tickets.find((t) => t.tokenId === tokenId);

  // ── fetch a fresh signed QR payload ────────────────────────────────────
  const refreshQR = useCallback(async () => {
    if (!address || !ticket) return;
    try {
      const res = await fetch("/api/sign-qr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ walletAddress: address, eventId: ticket.eventId }),
      });
      if (!res.ok) throw new Error("Sign request failed");
      const data = await res.json();
      // Encode the full payload as JSON string into the QR
      setQrValue(
        JSON.stringify({
          signature: data.signature,
          timestamp: data.timestamp,
          walletAddress: data.walletAddress,
          eventId: data.eventId,
        })
      );
      setQrError(null);
      setCountdown(QR_REFRESH_INTERVAL);
    } catch (err: unknown) {
      setQrError(err instanceof Error ? err.message : "QR generation failed");
    }
  }, [address, ticket]);

  // ── auto-refresh every 5 seconds ───────────────────────────────────────
  useEffect(() => {
    if (!address || !ticket) return;
    refreshQR(); // initial fetch
    const interval = setInterval(refreshQR, QR_REFRESH_INTERVAL * 1000);
    return () => clearInterval(interval);
  }, [refreshQR, address, ticket]);

  // ── countdown timer ────────────────────────────────────────────────────
  useEffect(() => {
    if (!qrValue) return;
    const timer = setInterval(() => {
      setCountdown((prev) => (prev <= 1 ? QR_REFRESH_INTERVAL : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [qrValue]);

  if (loading) return <PageSpinner />;

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
    console.log("Return ticket", _tokenId);
  };

  return (
    <PageWrapper narrow>
      <WalletGuard>
        <div className="space-y-4">
          {/* Ticket metadata (no static QR) */}
          <TicketCard ticket={ticket} />

          {/* Dynamic QR Code */}
          <div className="flex flex-col items-center gap-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
            {qrError ? (
              <p className="text-sm text-red-500">{qrError}</p>
            ) : qrValue ? (
              <>
                <QRCodeSVG
                  value={qrValue}
                  size={200}
                  includeMargin
                  className="rounded-xl"
                />
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  QR {countdown} saniye sonra yenileniyor...
                </p>
              </>
            ) : (
              <p className="text-sm text-zinc-400">QR oluşturuluyor...</p>
            )}
          </div>

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
