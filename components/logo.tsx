import Link from "next/link";
import { cn } from "@/lib/cn";
import { Emblem } from "./emblem";

export function Logo({ className, light = true }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" aria-label="Ezify home" className={cn("inline-flex items-center gap-2.5", className)}>
      <Emblem className="h-9 w-9" />
      <span className={cn("text-xl font-extrabold tracking-tight", light ? "text-paper" : "text-ink")}>
        Ezify
      </span>
    </Link>
  );
}
