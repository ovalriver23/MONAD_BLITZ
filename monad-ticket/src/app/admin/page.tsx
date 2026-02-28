"use client";

import { useState, useEffect } from "react";
import { useWriteContract } from "wagmi";
import { parseEther } from "viem";
import { PageHeader, PageWrapper } from "../../components/layout/PageWrapper";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { WalletGuard } from "../../components/wallet/WalletGuard";
import { CONTRACT_ADDRESS } from "../../lib/constants";

const TICKET_ABI = [
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

interface TxState {
  status: "idle" | "pending" | "success" | "error";
  hash?: string;
  error?: string;
}

export default function AdminPage() {
  // ── Auth state ──────────────────────────────────────────────────────────
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [loginLoading, setLoginLoading] = useState(false);

  // ── Event creation state ────────────────────────────────────────────────
  const [name, setName] = useState("");
  const [maxTickets, setMaxTickets] = useState("");
  const [priceEth, setPriceEth] = useState("");
  const [tx, setTx] = useState<TxState>({ status: "idle" });

  const { writeContractAsync } = useWriteContract();

  // ── Check auth on mount ─────────────────────────────────────────────────
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin-verify");
        if (res.ok) {
          setIsAuthenticated(true);
        }
      } catch {
        // not authenticated
      } finally {
        setAuthLoading(false);
      }
    };
    checkAuth();
  }, []);

  // ── Login handler ───────────────────────────────────────────────────────
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setAuthError(null);
    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        setAuthError(data.error || "Login failed");
        return;
      }
      setIsAuthenticated(true);
      setUsername("");
      setPassword("");
    } catch {
      setAuthError("Network error");
    } finally {
      setLoginLoading(false);
    }
  };

  // ── Logout handler ──────────────────────────────────────────────────────
  const handleLogout = async () => {
    await fetch("/api/admin-logout", { method: "POST" });
    setIsAuthenticated(false);
  };

  // ── Create event handler (wagmi) ────────────────────────────────────────
  const handleCreate = async () => {
    setTx({ status: "pending" });
    try {
      const hash = await writeContractAsync({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: TICKET_ABI,
        functionName: "createEvent",
        args: [name, BigInt(maxTickets), parseEther(priceEth)],
      });
      setTx({ status: "success", hash });
      setName("");
      setMaxTickets("");
      setPriceEth("");
    } catch (err: unknown) {
      setTx({
        status: "error",
        error: err instanceof Error ? err.message : "Failed",
      });
    }
  };

  // ── Loading state ───────────────────────────────────────────────────────
  if (authLoading) {
    return (
      <PageWrapper narrow>
        <PageHeader title="Admin" description="Platform owner controls." />
        <div className="flex justify-center py-16">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-violet-500 border-t-transparent" />
        </div>
      </PageWrapper>
    );
  }

  // ── Login form ──────────────────────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <PageWrapper narrow>
        <PageHeader title="Admin Login" description="Enter your credentials to access the admin panel." />
        <form
          onSubmit={handleLogin}
          className="mx-auto max-w-sm rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50 space-y-4"
        >
          <div className="text-center text-4xl mb-2">🔒</div>
          <Input
            label="Username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          {authError && (
            <p className="text-sm text-red-500 text-center">{authError}</p>
          )}
          <Button
            type="submit"
            fullWidth
            loading={loginLoading}
            disabled={!username || !password}
          >
            Log In
          </Button>
        </form>
      </PageWrapper>
    );
  }

  // ── Authenticated admin panel ───────────────────────────────────────────
  return (
    <PageWrapper narrow>
      <PageHeader
        title="Admin Panel"
        description="Create and manage events on-chain."
        actions={
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        }
      />

      <WalletGuard>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50 space-y-4">
          <h2 className="font-semibold text-lg text-zinc-900 dark:text-zinc-50">
            Create New Event
          </h2>

          <Input
            label="Event Name"
            placeholder="e.g. Travis Scott – Utopia Tour"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Max Tickets"
            type="number"
            placeholder="500"
            value={maxTickets}
            onChange={(e) => setMaxTickets(e.target.value)}
          />
          <Input
            label="Price (MON)"
            type="number"
            placeholder="0.05"
            value={priceEth}
            onChange={(e) => setPriceEth(e.target.value)}
          />

          {tx.status === "error" && (
            <p className="text-sm text-red-500">{tx.error}</p>
          )}
          {tx.status === "success" && (
            <p className="text-sm text-green-600">
              Event created! tx: {tx.hash}
            </p>
          )}

          <Button
            fullWidth
            loading={tx.status === "pending"}
            disabled={!name || !maxTickets || !priceEth}
            onClick={handleCreate}
          >
            Create Event
          </Button>
        </div>
      </WalletGuard>
    </PageWrapper>
  );
}
