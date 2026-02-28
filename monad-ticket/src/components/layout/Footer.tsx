import Link from "next/link";
import { APP_NAME, ROUTES } from "../../lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white py-8 dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
          <span>
            <span className="font-semibold text-violet-600">◈ {APP_NAME}</span>
            {" "}— Scalping-free concert tickets on Monad.
          </span>
          <div className="flex items-center gap-4">
            <Link href={ROUTES.verify} className="hover:text-zinc-900 dark:hover:text-zinc-50">
              Venue Verify
            </Link>
            <Link href={ROUTES.admin} className="hover:text-zinc-900 dark:hover:text-zinc-50">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
