import Link from "next/link";
import { ROUTES, APP_NAME } from "../lib/constants";
import { Button } from "../components/ui/Button";

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-24 text-center">
      {/* Hero pill */}
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 dark:bg-violet-900/20 dark:text-violet-400">
        🔒 Soulbound tickets on Monad
      </div>

      <h1 className="mt-4 max-w-3xl text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
        Concert tickets that{" "}
        <span className="text-violet-600">can&apos;t be scalped.</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg text-zinc-500 dark:text-zinc-400">
        {APP_NAME} locks every ticket to your wallet forever. No reselling, no
        bots, no inflated prices — just fair access for real fans. Return it at
        the original price if you can&apos;t make it.
      </p>

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <Link href={ROUTES.events}>
          <Button size="lg">Browse Events</Button>
        </Link>
        <Link href={ROUTES.myTickets}>
          <Button size="lg" variant="secondary">My Tickets</Button>
        </Link>
      </div>

      {/* Feature grid */}
      <div className="mt-24 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-zinc-200 bg-white p-5 text-left dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="mb-3 text-2xl">{f.icon}</div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{f.title}</h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

const FEATURES = [
  {
    icon: "🔒",
    title: "Soulbound NFT",
    desc: "Tickets are ERC-721 tokens locked to your wallet. Transfer is disabled at the contract level.",
  },
  {
    icon: "🔄",
    title: "Fair Returns",
    desc: "Can't attend? Return your ticket at the original price and the waitlist moves forward automatically.",
  },
  {
    icon: "📋",
    title: "Waitlist",
    desc: "Join the queue for sold-out events. When a ticket is returned, you're next in line.",
  },
];
