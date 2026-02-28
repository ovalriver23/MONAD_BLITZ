"use client";

import { useCallback, useEffect, useState } from "react";
import { useWallet } from "../context/WalletContext";
import type { WaitlistEntry, WaitlistStats } from "../types/waitlist";

// ---------------------------------------------------------------------------
// useWaitlist — manage the waitlist for a specific event
// ---------------------------------------------------------------------------

export function useWaitlist(eventId: number) {
  const { address, isConnected } = useWallet();
  const [stats, setStats] = useState<WaitlistStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [joining, setJoining] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({ eventId: String(eventId) });
      if (address) params.set("address", address);
      const res = await fetch(`/api/waitlist/${eventId}?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch waitlist");
      const data: WaitlistStats = await res.json();
      setStats(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error");
    } finally {
      setLoading(false);
    }
  }, [eventId, address]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const join = useCallback(async () => {
    if (!isConnected || !address) return;
    setJoining(true);
    setError(null);
    try {
      const res = await fetch(`/api/waitlist/${eventId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address }),
      });
      if (!res.ok) throw new Error("Failed to join waitlist");
      await fetchStats();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error");
    } finally {
      setJoining(false);
    }
  }, [isConnected, address, eventId, fetchStats]);

  const leave = useCallback(async () => {
    if (!isConnected || !address) return;
    setLeaving(true);
    setError(null);
    try {
      const res = await fetch(`/api/waitlist/${eventId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address }),
      });
      if (!res.ok) throw new Error("Failed to leave waitlist");
      await fetchStats();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error");
    } finally {
      setLeaving(false);
    }
  }, [isConnected, address, eventId, fetchStats]);

  return { stats, loading, joining, leaving, error, join, leave, refetch: fetchStats };
}

// ---------------------------------------------------------------------------
// useMyWaitlistEntries — all events the connected wallet is queued for
// ---------------------------------------------------------------------------

export function useMyWaitlistEntries() {
  const { address, isConnected } = useWallet();
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isConnected || !address) return;
    const fetch_ = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/waitlist?address=${address}`);
        if (!res.ok) throw new Error("Failed to fetch waitlist entries");
        const data: WaitlistEntry[] = await res.json();
        setEntries(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Error");
      } finally {
        setLoading(false);
      }
    };
    fetch_();
  }, [address, isConnected]);

  return { entries, loading, error };
}
