"use client";

import { useCallback, useEffect, useState } from "react";
import {
  useWriteContract,
  useSendTransaction,
  useWaitForTransactionReceipt,
} from "wagmi";
import { readContract } from "wagmi/actions";
import { parseEther } from "viem";
import { useWallet } from "../context/WalletContext";
import { MOCK_EVENTS } from "../lib/mockEvents";
import { saveMockTicket } from "../lib/mockTicketStore";
import { CONTRACT_ADDRESS, PLATFORM_ADDRESS } from "../lib/constants";
import { wagmiConfig } from "../lib/wagmiConfig";
import type { Event } from "../types/event";

// ---------------------------------------------------------------------------
// ABI fragments (only what we need — keeps bundle small)
// ---------------------------------------------------------------------------

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
    name: "getEventInfo",
    stateMutability: "view",
    inputs: [{ name: "eventId", type: "uint256" }],
    outputs: [
      { name: "name", type: "string" },
      { name: "maxTickets", type: "uint256" },
      { name: "soldCount", type: "uint256" },
      { name: "priceWei", type: "uint256" },
    ],
  },
  {
    type: "function",
    name: "mintTicket",
    stateMutability: "payable",
    inputs: [{ name: "eventId", type: "uint256" }],
    outputs: [],
  },
  {
    type: "function",
    name: "createEvent",
    stateMutability: "nonpayable",
    inputs: [
      { name: "name", type: "string" },
      { name: "maxTickets", type: "uint256" },
      { name: "priceWei", type: "uint256" },
    ],
    outputs: [],
  },
] as const;

const contractAddress = CONTRACT_ADDRESS as `0x${string}`;

// ---------------------------------------------------------------------------
// useEvents — fetch all events (wagmi readContract actions)
// ---------------------------------------------------------------------------

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let count: bigint;
      try {
        count = (await readContract(wagmiConfig, {
          address: contractAddress,
          abi: TICKET_ABI,
          functionName: "eventCount",
        })) as bigint;
      } catch {
        setEvents(MOCK_EVENTS);
        return;
      }

      if (Number(count) === 0) {
        setEvents(MOCK_EVENTS);
        return;
      }

      const chainEvents: Event[] = [];
      for (let i = 0; i < Number(count); i++) {
        try {
          const result = (await readContract(wagmiConfig, {
            address: contractAddress,
            abi: TICKET_ABI,
            functionName: "getEventInfo",
            args: [BigInt(i)],
          })) as [string, bigint, bigint, bigint];

          const [name, maxTickets, soldCount, priceWei] = result;
          chainEvents.push({
            id: i,
            name,
            description: "",
            venue: "",
            city: "",
            date: "",
            imageUrl: "",
            maxTickets: Number(maxTickets),
            soldCount: Number(soldCount),
            priceWei: priceWei.toString(),
            priceEth: "",
            category: "concert",
            artist: "",
            exists: true,
          });
        } catch {
          // skip failed reads
        }
      }

      // Merge: on-chain data overlays mock events
      const chainMap = new Map(chainEvents.map((e) => [e.id, e]));
      const merged = MOCK_EVENTS.map((mock) => {
        const chain = chainMap.get(mock.id);
        if (!chain) return mock;
        return {
          ...mock,
          name: chain.name || mock.name,
          maxTickets: chain.maxTickets,
          soldCount: chain.soldCount,
          priceWei: chain.priceWei,
          exists: true,
        };
      });
      chainEvents.forEach((e) => {
        if (!MOCK_EVENTS.some((m) => m.id === e.id)) merged.push(e);
      });
      setEvents(merged);
    } catch {
      setEvents(MOCK_EVENTS);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return { events, loading, error, refetch: fetchEvents };
}

// ---------------------------------------------------------------------------
// useEvent — single event detail
// ---------------------------------------------------------------------------

export function useEvent(eventId: number) {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      setError(null);
      try {
        try {
          const result = (await readContract(wagmiConfig, {
            address: contractAddress,
            abi: TICKET_ABI,
            functionName: "getEventInfo",
            args: [BigInt(eventId)],
          })) as [string, bigint, bigint, bigint];

          const [name, maxTickets, soldCount, priceWei] = result;
          if (name) {
            // Merge with mock data for metadata (venue, date, etc.)
            const mock = MOCK_EVENTS.find((e) => e.id === eventId);
            setEvent({
              ...(mock ?? {
                id: eventId,
                description: "",
                venue: "",
                city: "",
                date: "",
                imageUrl: "",
                priceEth: "",
                category: "concert" as const,
                artist: "",
              }),
              id: eventId,
              name: name || mock?.name || "",
              maxTickets: Number(maxTickets),
              soldCount: Number(soldCount),
              priceWei: priceWei.toString(),
              exists: true,
            });
            return;
          }
        } catch {
          // fall through to mock
        }
        setEvent(MOCK_EVENTS.find((e) => e.id === eventId) ?? null);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Failed to fetch event");
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [eventId]);

  return { event, loading, error };
}

// ---------------------------------------------------------------------------
// useMintTicket — purchase a ticket (wagmi writeContract + sendTransaction)
// ---------------------------------------------------------------------------

interface TxState {
  status: "idle" | "pending" | "success" | "error";
  hash?: string;
  error?: string;
}

export function useMintTicket() {
  const { address, ensureCorrectChain } = useWallet();
  const [tx, setTx] = useState<TxState>({ status: "idle" });

  const { writeContractAsync } = useWriteContract();
  const { sendTransactionAsync } = useSendTransaction();

  const mint = useCallback(
    async (eventId: number, priceWei: string) => {
      const onCorrectChain = await ensureCorrectChain();
      if (!onCorrectChain) return;

      // Check if event exists on-chain
      let isMockEvent = true;
      try {
        const result = (await readContract(wagmiConfig, {
          address: contractAddress,
          abi: TICKET_ABI,
          functionName: "getEventInfo",
          args: [BigInt(eventId)],
        })) as [string, bigint, bigint, bigint];
        if (result[0]) isMockEvent = false;
      } catch {
        // doesn't exist on-chain
      }

      setTx({ status: "pending" });

      if (isMockEvent) {
        // Mock event → send MON to platform address via wagmi
        try {
          const hash = await sendTransactionAsync({
            to: PLATFORM_ADDRESS as `0x${string}`,
            value: BigInt(priceWei),
          });
          const tokenId = Date.now();
          saveMockTicket({
            tokenId,
            eventId,
            owner: address ?? "",
            purchasedAt: new Date().toISOString(),
            isUsed: false,
          });
          setTx({ status: "success", hash });
        } catch (err: unknown) {
          setTx({
            status: "error",
            error: err instanceof Error ? err.message : "Transaction failed",
          });
        }
        return;
      }

      // On-chain event → call mintTicket via wagmi
      try {
        const hash = await writeContractAsync({
          address: contractAddress,
          abi: TICKET_ABI,
          functionName: "mintTicket",
          args: [BigInt(eventId)],
          value: BigInt(priceWei),
        });
        setTx({ status: "success", hash });
      } catch (err: unknown) {
        setTx({
          status: "error",
          error: err instanceof Error ? err.message : "Transaction failed",
        });
      }
    },
    [address, ensureCorrectChain, writeContractAsync, sendTransactionAsync]
  );

  const reset = useCallback(() => setTx({ status: "idle" }), []);
  return { mint, tx, reset };
}
