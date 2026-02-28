import { type ReactNode } from "react";
import { cn } from "../../lib/utils";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export function PageWrapper({ children, className, narrow = false }: PageWrapperProps) {
  return (
    <main
      className={cn(
        "mx-auto w-full px-4 py-10",
        narrow ? "max-w-2xl" : "max-w-6xl",
        className
      )}
    >
      {children}
    </main>
  );
}

export function PageHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-8 flex items-start justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h1>
        {description && (
          <p className="mt-1 text-zinc-500 dark:text-zinc-400">{description}</p>
        )}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </div>
  );
}
