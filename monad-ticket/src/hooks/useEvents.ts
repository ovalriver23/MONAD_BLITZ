"use client";

import { useCallback, useEffect, useState } from "react";
import { getReadContract, getWriteContract, getSigner } from "../lib/contract";
import { useWallet } from "../context/WalletContext";
import { MOCK_EVENTS } from "../lib/mockEvents";
import { saveMockTicket } from "../lib/mockTicketStore";
import { PLATFORM_ADDRESS } from "../lib/constants";
import type { Event } from "../types/event";
import type { TxState } from "../types/contract";

// ---------------------------------------------------------------------------
// useEvents — fetch all events from the contract
// ---------------------------------------------------------------------------

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const contract = getReadContract();
      if (!contract) {
        setEvents(MOCK_EVENTS);
        return;
      }

      let count: bigint;
      try {
        count = await contract.eventCount();
      } catch {
        setEvents(MOCK_EVENTS);
        return;
      }

      // No on-chain events — use mock data for demo
      if (Number(count) === 0) {
        setEvents(MOCK_EVENTS);
        return;
      }

      const chainEvents: Event[] = [];
      for (let i = 0; i < Number(count); i++) {
        const [name, maxTickets, soldCount, priceWei] =
          await contract.getEventInfo(i);
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
      }

      // Merge: on-chain data overlays mock events (keeps mock metadata like venue, date, etc.)
      const chainMap = new Map(chainEvents.map((e) => [e.id, e]));
      const merged = MOCK_EVENTS.map((mock) => {
        const chain = chainMap.get(mock.id);
        if (!chain) return mock;
        // Use mock metadata (venue, artist, date, etc.) but chain data for sold/price/name
        return {
          ...mock,
          name: chain.name || mock.name,
          maxTickets: chain.maxTickets,
          soldCount: chain.soldCount,
          priceWei: chain.priceWei,
          exists: true,
        };
      });
      // Add any on-chain events with IDs beyond mock range
      chainEvents.forEach((e) => {
        if (!MOCK_EVENTS.some((m) => m.id === e.id)) merged.push(e);
      });
      setEvents(merged);
    } catch {
      // Unexpected error — fall back to mock events so the UI still works
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
        const contract = getReadContract();
        if (!contract) {
          setEvent(MOCK_EVENTS.find((e) => e.id === eventId) ?? null);
          return;
        }
        try {
          const [name, maxTickets, soldCount, priceWei] =
            await contract.getEventInfo(eventId);
          if (name) {
            setEvent({
              id: eventId,
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
// useMintTicket — purchase a ticket for an event
// ---------------------------------------------------------------------------

export function useMintTicket() {
  const { ensureCorrectChain } = useWallet();
  const [tx, setTx] = useState<TxState>({ status: "idle" });

  const mint = useCallback(
    async (eventId: number, priceWei: string) => {
      const isMockEvent = false;

      if (isMockEvent) {
        // Real MON transfer to the platform treasury — actual funds leave the wallet
        const onCorrectChain = await ensureCorrectChain();
        if (!onCorrectChain) return;

        setTx({ status: "pending" });
        try {
          const signer = await getSigner();
          if (!signer) throw new Error("Wallet not connected");

          const tx = await signer.sendTransaction({
            to: PLATFORM_ADDRESS,
            value: BigInt(priceWei),
          });
          await tx.wait();

          const tokenId = Date.now();
          const address = await signer.getAddress();
          saveMockTicket({
            tokenId,
            eventId,
            owner: address,
            purchasedAt: new Date().toISOString(),
            isUsed: false,
          });
          setTx({ status: "success", hash: tx.hash });
        } catch (err: unknown) {
          setTx({
            status: "error",
            error: err instanceof Error ? err.message : "Transaction failed",
          });
        }
        return;
      }

      const onCorrectChain = await ensureCorrectChain();
      if (!onCorrectChain) return;

      setTx({ status: "pending" });
      try {
        const contract = await getWriteContract();
        if (!contract) throw new Error("Wallet not connected");

        const receipt = await contract.mintTicket(eventId, {
          value: BigInt(priceWei),
        });
        await receipt.wait();
        setTx({ status: "success", hash: receipt.hash });
      } catch (err: unknown) {
        setTx({
          status: "error",
          error: err instanceof Error ? err.message : "Transaction failed",
        });
      }
    },
    [ensureCorrectChain]
  );

  const reset = useCallback(() => setTx({ status: "idle" }), []);
  return { mint, tx, reset };
}
