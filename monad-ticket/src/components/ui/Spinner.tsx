import { cn } from "../../lib/utils";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" };

export function Spinner({ size = "md", className }: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={cn(
        "inline-block animate-spin rounded-full border-2 border-zinc-200 border-t-violet-600",
        sizeMap[size],
        className
      )}
    />
  );
}

export function PageSpinner() {
  return (
    <div className="flex min-h-[40vh] w-full items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
}
