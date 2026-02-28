"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import { APP_NAME, ROUTES } from "../../lib/constants";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const NAV_LINKS = [
  { label: "Events", href: ROUTES.events },
  { label: "My Tickets", href: ROUTES.myTickets },
  { label: "Waitlist", href: ROUTES.waitlist },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href={ROUTES.home}
          className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white"
        >
          <span className="text-violet-600">◈</span>
          {APP_NAME}
        </Link>

        {/* Nav links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === href
                  ? "bg-violet-50 text-violet-700 dark:bg-violet-900/20 dark:text-violet-400"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
              )}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Wallet — RainbowKit */}
        <ConnectButton
          showBalance={false}
          accountStatus="address"
          chainStatus="icon"
        />
      </nav>
    </header>
  );
}

