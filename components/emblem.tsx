import { cn } from "@/lib/cn";

export function Emblem({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-block", className)}>
      <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
        <rect x="2" y="2" width="44" height="44" rx="14" fill="#1590d0" />
        {/* E mark */}
        <g fill="#ffffff">
          <rect x="16" y="14" width="4.5" height="20" rx="1.5" />
          <rect x="16" y="14" width="16" height="4.5" rx="1.5" />
          <rect x="16" y="21.75" width="11" height="4.5" rx="1.5" />
          <rect x="16" y="29.5" width="16" height="4.5" rx="1.5" />
        </g>
      </svg>
    </span>
  );
}
