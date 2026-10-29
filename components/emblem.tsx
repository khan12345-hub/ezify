import { cn } from "@/lib/cn";

export function Emblem({
  className,
  glow = false,
}: {
  className?: string;
  glow?: boolean;
}) {
  return (
    <span className={cn("relative inline-block", className)}>
      {glow && (
        <span className="pointer-events-none absolute inset-0 rounded-[26%] bg-blue blur-xl opacity-70" />
      )}
      <svg viewBox="0 0 48 48" className="relative h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="ezGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4f9bff" />
            <stop offset="0.55" stopColor="#2f7cf6" />
            <stop offset="1" stopColor="#19cfc3" />
          </linearGradient>
          <linearGradient id="ezShine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="0.5" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#ezGrad)" />
        <rect x="2" y="2" width="44" height="22" rx="12" fill="url(#ezShine)" />
        {/* E mark */}
        <g fill="#ffffff">
          <rect x="16" y="14" width="4" height="20" rx="1" />
          <rect x="16" y="14" width="16" height="4" rx="1" />
          <rect x="16" y="22" width="12" height="4" rx="1" />
          <rect x="16" y="30" width="16" height="4" rx="1" />
        </g>
      </svg>
    </span>
  );
}
