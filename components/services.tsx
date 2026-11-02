"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES, TONES, type Service } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Reveal } from "./reveal";
import { SplitWords } from "./motion/split-words";

export function Services() {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });

  return (
    <section id="services" className="section scroll-mt-16">
      <div className="container">
        <div className="mb-14 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">What we do</p>
            </Reveal>
            <h2 className="h-section mt-4">
              <SplitWords text="Everything you need" inView />{" "}
              <SplitWords text="to grow." inView delay={0.2} wordClassName="accent pr-[0.06em]" />
            </h2>
          </div>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="text-ink-muted">
              From your website and online store to sales, marketing and
              accounts — pick one service or let us run them all, with one team
              and one standard.
            </p>
          </Reveal>
        </div>

        {/* stacking cards: each sticks, the next slides over it */}
        <div ref={stackRef} className="relative">
          {SERVICES.map((s, i) => (
            <StackCard key={s.title} service={s} index={i} total={SERVICES.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackCard({
  service: s,
  index,
  total,
  progress,
}: {
  service: Service;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  const tone = TONES[s.tone];
  // shrink slightly once later cards start covering this one
  const start = index / total;
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - index - 1) * 0.035]);
  const dim = useTransform(progress, [start, Math.min(start + 1 / total, 1)], [0, index === total - 1 ? 0 : 0.06]);

  return (
    // sticky only on large screens — on mobile the cards are taller than the viewport
    <div className="mb-6 last:mb-0 lg:sticky" style={{ top: `calc(96px + ${index * 18}px)` }}>
      <motion.article
        style={reduce ? undefined : { scale, transformOrigin: "50% 0%" }}
        className={cn(
          "group relative grid overflow-hidden rounded-[32px] p-2 shadow-[0_-20px_50px_-30px_rgba(21,23,28,0.25)] lg:min-h-[520px] lg:grid-cols-2",
          tone.bg,
        )}
      >
        <motion.div aria-hidden="true" style={{ opacity: dim }} className="pointer-events-none absolute inset-0 z-10 bg-ink" />

        <div className="flex flex-col p-6 sm:p-10 lg:p-12">
          <div className="flex items-center justify-between">
            <span className={cn("grid h-12 w-12 place-items-center rounded-2xl", tone.chip)}>
              <s.icon className="h-5 w-5" />
            </span>
            <span className="font-display text-sm font-medium text-ink/40">
              0{index + 1} <span className="text-ink/25">/ 0{total}</span>
            </span>
          </div>
          <h3 className="mt-8 text-[clamp(2rem,3.6vw,3.1rem)]">{s.title}</h3>
          <p className={cn("mt-2 font-display text-lg font-medium", tone.text)}>{s.tagline}</p>
          <p className="mt-4 max-w-md leading-relaxed text-ink-muted">{s.desc}</p>
          <ul className="mt-7 grid gap-x-6 gap-y-2.5 text-[15px] sm:grid-cols-2">
            {s.points.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <span className={cn("grid h-5 w-5 shrink-0 place-items-center rounded-full", tone.chip)}>
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10">
            <Link href="/contact" className="btn btn-ink group/btn">
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-45" />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-[26px] sm:min-h-[340px]">
          {s.image ? (
            <img
              src={s.image}
              alt={s.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center bg-white/60 p-6 sm:p-10" aria-hidden="true">
              <s.icon className={cn("absolute -bottom-10 -right-10 h-64 w-64 opacity-[0.07]", tone.text)} strokeWidth={1.2} />
              <div className="relative w-full max-w-sm rounded-[24px] bg-surface p-5 shadow-[0_30px_60px_-30px_rgba(21,23,28,0.35)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-1deg]">
                {s.visual === "pipeline" && <Pipeline bar={tone.bar} />}
                {s.visual === "campaign" && <Campaign bar={tone.bar} />}
                {s.visual === "ledger" && <Ledger />}
              </div>
            </div>
          )}
        </div>
      </motion.article>
    </div>
  );
}

/* ── illustrative UI visuals ─────────────────────────────────── */

const grow = (i: number) => ({
  initial: { scaleX: 0 },
  whileInView: { scaleX: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
});

function Pipeline({ bar }: { bar: string }) {
  const stages = [
    { label: "New", n: 4 },
    { label: "Qualified", n: 3 },
    { label: "Won", n: 2 },
  ];
  return (
    <div>
      <p className="text-xs font-semibold">Sales pipeline</p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {stages.map((st, i) => (
          <div key={st.label} className="rounded-xl bg-bg p-2.5">
            <p className="text-[11px] font-medium text-ink-muted">{st.label}</p>
            <div className="mt-3 space-y-2">
              {Array.from({ length: st.n }).map((_, k) => (
                <motion.span
                  key={k}
                  {...grow(i * 3 + k)}
                  className={cn("block h-2.5 origin-left rounded-full", i === 2 ? bar : "bg-line")}
                  style={{ width: `${92 - k * 16}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Campaign({ bar }: { bar: string }) {
  const bars = [30, 42, 38, 55, 50, 68, 84];
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold">
        <span>Campaign reach</span>
        <span className="rounded-full bg-tint-mint px-2 py-0.5 text-[11px] font-medium text-[#16794f]">Live</span>
      </div>
      <div className="mt-4 flex h-28 items-end gap-2">
        {bars.map((h, i) => (
          <motion.span
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className={cn("flex-1 rounded-md", i === bars.length - 1 ? bar : "bg-tint-lilac")}
          />
        ))}
      </div>
    </div>
  );
}

function Ledger() {
  const rows = [
    { name: "Invoice #204", amount: "$1,240", status: "Paid", cls: "bg-tint-mint text-[#16794f]" },
    { name: "Invoice #205", amount: "$860", status: "Sent", cls: "bg-tint-blue text-[#2440d8]" },
    { name: "Supplier bill", amount: "$310", status: "Due", cls: "bg-tint-butter text-[#8a6100]" },
  ];
  return (
    <div>
      <p className="text-xs font-semibold">This month</p>
      <ul className="mt-3 divide-y divide-line">
        {rows.map((r, i) => (
          <motion.li
            key={r.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            className="flex items-center justify-between gap-3 py-2.5 text-sm"
          >
            <span className="font-medium">{r.name}</span>
            <span className="ml-auto text-ink-muted">{r.amount}</span>
            <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-medium", r.cls)}>{r.status}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
