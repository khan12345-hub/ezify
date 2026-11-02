import Link from "next/link";
import { cn } from "@/lib/cn";
import { Emblem } from "./emblem";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="Ezify home" className={cn("inline-flex items-center gap-2", className)}>
      <Emblem className="h-8 w-8" />
      <span className="font-display text-[1.35rem] font-semibold tracking-tight text-ink">Ezify</span>
    </Link>
  );
}
