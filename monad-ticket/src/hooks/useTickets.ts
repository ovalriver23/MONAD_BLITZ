"use client";

import { useCallback, useEffect, useState } from "react";
import { readContract } from "wagmi/actions";
import { useWallet } from "../context/WalletContext";
import { getMockTickets, isTicketReturned } from "../lib/mockTicketStore";
import { MOCK_EVENTS } from "../lib/mockEvents";
import { CONTRACT_ADDRESS } from "../lib/constants";
import { wagmiConfig } from "../lib/wagmiConfig";
import type { Ticket } from "../types/ticket";

const contractAddress = CONTRACT_ADDRESS as `0x${string}`;

const TICKET_ABI = [
  {
    type: "function",
    name: "eventCount",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }],
  },
  {
    type: "function",
    name: "userTicketCount",
    stateMutability: "view",
    inputs: [
      { name: "", type: "address" },
      { name: "", type: "uint256" },
    ],
    outputs: [{ type: "uint256" }],
  },
  {
    type: "function",
    name: "hasTicket",
    stateMutability: "view",
    inputs: [
      { name: "user", type: "address" },
      { name: "eventId", type: "uint256" },
    ],
    outputs: [{ type: "bool" }],
  },
] as const;

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
      const mockTickets = getMockTickets();
      const chainTickets: Ticket[] = [];

      if (isConnected && address) {
        try {
          const eventCount = (await readContract(wagmiConfig, {
            address: contractAddress,
            abi: TICKET_ABI,
            functionName: "eventCount",
          })) as bigint;

          for (let eventId = 0; eventId < Number(eventCount); eventId++) {
            const count = (await readContract(wagmiConfig, {
              address: contractAddress,
              abi: TICKET_ABI,
              functionName: "userTicketCount",
              args: [address as `0x${string}`, BigInt(eventId)],
            })) as bigint;

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
        } catch {
          // contract unavailable — mock tickets still show
        }
      }

      const chainTokenIds = new Set(chainTickets.map((t) => t.tokenId));
      const unique = [
        ...chainTickets,
        ...mockTickets.filter((t) => !chainTokenIds.has(t.tokenId)),
      ];

      // Filter out returned tickets (on-chain tickets can't be burned, so we hide them)
      const notReturned = unique.filter((t) => !isTicketReturned(t.tokenId));

      const enriched = notReturned.map((t) => {
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
      const result = (await readContract(wagmiConfig, {
        address: contractAddress,
        abi: TICKET_ABI,
        functionName: "hasTicket",
        args: [address as `0x${string}`, BigInt(eventId)],
      })) as boolean;
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
