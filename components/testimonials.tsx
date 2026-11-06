"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Reveal } from "./reveal";

const AVATAR_TONES = [
  "bg-tint-blue text-[#0b78b2]",
  "bg-tint-peach text-[#b4511f]",
  "bg-tint-mint text-[#16794f]",
  "bg-tint-lilac text-[#6a3fd4]",
];

const INTERVAL = 7000;
const ease = [0.16, 1, 0.3, 1] as const;

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

/** One large quote at a time; clients act as tabs underneath. Auto-advances, pauses on hover/focus. */
export function Testimonials() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = TESTIMONIALS.length;
  const t = TESTIMONIALS[active];

  const go = (dir: 1 | -1) => setActive((i) => (i + dir + total) % total);

  useEffect(() => {
    if (paused || reduce) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % total), INTERVAL);
    return () => clearTimeout(id);
  }, [active, paused, reduce, total]);

  return (
    <section className="section border-y border-line bg-surface">
      <div className="container">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Testimonials</p>
            <h2 className="h-section mt-4">
              What our clients <span className="accent">say</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="grid h-12 w-12 place-items-center rounded-full border border-line bg-bg transition-colors hover:border-ink"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white transition-transform hover:scale-105"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
        </div>

        <Reveal>
          <div
            className="relative overflow-hidden rounded-[32px] border border-line bg-bg p-8 sm:p-12 lg:p-16"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <span aria-hidden="true" className="pointer-events-none absolute -top-6 right-6 select-none font-serif text-[14rem] leading-none text-brand/10 sm:right-12">
              &rdquo;
            </span>

            {/* fixed min-height so the section doesn't jump between short and long quotes */}
            <div className="relative min-h-[240px] sm:min-h-[200px] lg:min-h-[180px]" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.figure
                  key={active}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16, filter: "blur(6px)" }}
                  transition={{ duration: 0.6, ease }}
                >
                  <blockquote className="max-w-4xl font-display text-[clamp(1.5rem,3vw,2.4rem)] font-medium leading-[1.25] tracking-tight">
                    {t.quote}
                  </blockquote>
                  <figcaption className="sr-only">
                    {t.name}, {t.role}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* client tabs */}
            <div role="tablist" aria-label="Choose a testimonial" className="relative mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {TESTIMONIALS.map((item, i) => {
                const on = i === active;
                return (
                  <button
                    key={item.name}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActive(i)}
                    className={cn(
                      "relative flex items-center gap-3 overflow-hidden rounded-2xl border p-3 text-left transition-colors",
                      on ? "border-ink/15 bg-surface" : "border-transparent hover:bg-surface/60",
                    )}
                  >
                    <span className={cn("grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-semibold", AVATAR_TONES[i % AVATAR_TONES.length])}>
                      {initials(item.name)}
                    </span>
                    <span className="min-w-0">
                      <span className={cn("block truncate text-sm font-semibold", !on && "text-ink/70")}>{item.name}</span>
                      <span className="block truncate text-xs text-ink-muted">{item.role}</span>
                    </span>
                    {/* progress bar for the auto-advance timer */}
                    {on && !reduce && (
                      <motion.span
                        key={`${active}-${paused}`}
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-brand"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: paused ? 0 : 1 }}
                        transition={{ duration: paused ? 0 : INTERVAL / 1000, ease: "linear" }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
