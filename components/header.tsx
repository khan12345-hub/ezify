"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Logo } from "./logo";
import { NAV } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-navy-900/85 backdrop-blur-md border-b border-[color:var(--line-dark)]" : "border-b border-transparent",
      )}
    >
      <div className="container flex h-[74px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-paper/75 transition-colors hover:text-paper"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden h-10 w-10 place-items-center rounded-full border border-[color:var(--line-dark)] text-paper/70 transition-colors hover:text-paper sm:grid" aria-label="Search">
            <Search className="h-4 w-4" />
          </button>
          <Link href="/contact" className="btn btn-grad hidden sm:inline-flex">
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-[5px] p-2 text-paper lg:hidden"
            aria-label="Menu"
          >
            <span className={cn("h-0.5 w-6 bg-current transition", open && "translate-y-[7px] rotate-45")} />
            <span className={cn("h-0.5 w-6 bg-current transition", open && "opacity-0")} />
            <span className={cn("h-0.5 w-6 bg-current transition", open && "-translate-y-[7px] -rotate-45")} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[color:var(--line-dark)] bg-navy-900 lg:hidden"
          >
            <div className="container flex flex-col py-3">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[color:var(--line-dark)] py-3.5 text-paper/85 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-grad mt-4">
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
