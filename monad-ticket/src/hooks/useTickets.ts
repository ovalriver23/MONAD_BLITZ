"use client";

import { useCallback, useEffect, useState } from "react";
import { getReadContract } from "../lib/contract";
import { useWallet } from "../context/WalletContext";
import { getMockTickets } from "../lib/mockTicketStore";
import { MOCK_EVENTS } from "../lib/mockEvents";
import type { Ticket } from "../types/ticket";

// ---------------------------------------------------------------------------
// useMyTickets — all tickets owned by the connected wallet
// ---------------------------------------------------------------------------

export function useMyTickets() {
  const { address, isConnected } = useWallet();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTickets = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Always include locally-stored mock tickets
      const mockTickets = getMockTickets();

      // Try to also pull real on-chain tickets if wallet is connected
      const chainTickets: Ticket[] = [];
      if (isConnected && address) {
        try {
          const contract = getReadContract();
          if (contract) {
            const eventCount: bigint = await contract.eventCount();
            for (let eventId = 0; eventId < Number(eventCount); eventId++) {
              const count: bigint = await contract.userTicketCount(address, eventId);
              for (let i = 0; i < Number(count); i++) {
                chainTickets.push({
                  tokenId: eventId * 1000 + i,
                  eventId,
                  owner: address,
                  purchasedAt: new Date().toISOString(),
                  isUsed: false,
                });
              }
            }
          }
        } catch {
          // contract unavailable — that's fine, mock tickets still show
        }
      }

      // Merge: chain tickets first, then mock tickets (skip duplicates)
      const chainTokenIds = new Set(chainTickets.map((t) => t.tokenId));
      const unique = [
        ...chainTickets,
        ...mockTickets.filter((t) => !chainTokenIds.has(t.tokenId)),
      ];

      // Enrich with event metadata from mock list
      const enriched = unique.map((t) => {
        const event = MOCK_EVENTS.find((e) => e.id === t.eventId);
        return event ? { ...t, event } : t;
      });

      setTickets(enriched);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to fetch tickets");
    } finally {
      setLoading(false);
    }
  }, [address, isConnected]);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  return { tickets, loading, error, refetch: fetchTickets };
}

// ---------------------------------------------------------------------------
// useHasTicket — check if wallet holds a ticket for a specific event
// ---------------------------------------------------------------------------

export function useHasTicket(eventId: number) {
  const { address, isConnected } = useWallet();
  const [hasTicket, setHasTicket] = useState(false);
  const [loading, setLoading] = useState(false);

  const check = useCallback(async () => {
    if (!isConnected || !address) return;
    setLoading(true);
    try {
      const contract = getReadContract();
      if (!contract) return;
      const result: boolean = await contract.hasTicket(address, eventId);
      setHasTicket(result);
    } catch {
      setHasTicket(false);
    } finally {
      setLoading(false);
    }
  }, [address, isConnected, eventId]);

  useEffect(() => {
    check();
  }, [check]);

  return { hasTicket, loading, recheck: check };
}
