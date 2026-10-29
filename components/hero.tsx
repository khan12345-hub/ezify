"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { ArrowRight, Play, Code2, ShoppingCart, Sparkles, ShieldCheck } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

type Panel = { icon: typeof Code2; label: string; pos: string; depth: number; delay: number };

const PANELS: Panel[] = [
  { icon: Code2, label: "Web Development", pos: "-left-4 top-[12%]", depth: 36, delay: 0 },
  { icon: ShoppingCart, label: "E-Commerce", pos: "-right-3 top-[6%]", depth: 52, delay: 0.6 },
  { icon: Sparkles, label: "Cleaning Services", pos: "-left-5 bottom-[16%]", depth: 44, delay: 1.1 },
  { icon: ShieldCheck, label: "Security Services", pos: "-right-4 bottom-[10%]", depth: 60, delay: 1.5 },
];

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 20 });
  const sy = useSpring(my, { stiffness: 90, damping: 20 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.22]" style={{ backgroundImage: "url(/images/hero-bg.webp)" }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_74%_44%,rgba(47,124,246,0.28),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />

      <div className="container grid min-h-[90vh] items-center gap-12 pt-28 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:pt-24">
        {/* copy */}
        <div className="relative z-10">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="kicker">
            Multi-Service Solutions
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08, ease }} className="mt-5 text-[clamp(2.8rem,6vw,5.3rem)] font-extrabold leading-[1.02] text-paper">
            One Vision.
            <br />
            <span className="text-grad">Many Possibilities.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.16, ease }} className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-paper-muted">
            Ezify is a multi-service company offering innovative solutions across
            technology, e-commerce, cleaning, security and more — helping
            businesses and individuals achieve more, efficiently.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.24, ease }} className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/businesses" className="btn btn-grad">
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="btn btn-ghost">
              <Play className="h-4 w-4" fill="currentColor" /> Watch Our Story
            </Link>
          </motion.div>
        </div>

        {/* video scene */}
        <motion.div
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="pointer-events-none absolute -inset-6 rounded-[36px] bg-blue/20 blur-[80px]" />

          {/* gradient-framed video */}
          <div className="relative rounded-[28px] bg-gradient-to-br from-cyan/60 via-blue/30 to-transparent p-[1.5px] shadow-[0_40px_90px_-30px_rgba(47,124,246,0.6)]">
            <div className="relative overflow-hidden rounded-[27px] bg-navy-900">
              <video
                className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[520px]"
                autoPlay={!reduce}
                loop
                muted
                playsInline
                poster="/video/poster-office.jpg"
                preload="metadata"
              >
                <source src="/video/hero-office.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-navy-900/20" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_100%,rgba(47,124,246,0.25),transparent_70%)]" />
              {/* corner badge */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
                </span>
                <span className="text-xs font-semibold text-white">Ezify in action</span>
              </div>
            </div>
          </div>

          {/* floating panels (desktop) */}
          <div className="hidden lg:block">
            {PANELS.map((p) => (
              <Panel key={p.label} panel={p} sx={sx} sy={sy} reduce={!!reduce} />
            ))}
            <p className="script pointer-events-none absolute -right-2 bottom-[-2.5rem] text-right text-2xl leading-tight text-cyan/90">
              Your Business<br />Our Priority
            </p>
          </div>

          {/* panels grid (mobile) */}
          <div className="mt-5 grid grid-cols-2 gap-2.5 lg:hidden">
            {PANELS.map((p) => (
              <div key={p.label} className="flex items-center gap-2 rounded-xl border border-cyan/25 bg-white/[0.06] px-3 py-2.5 backdrop-blur-md">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-blue to-teal text-white">
                  <p.icon className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-semibold text-paper">{p.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Panel({ panel, sx, sy, reduce }: { panel: Panel; sx: MotionValue<number>; sy: MotionValue<number>; reduce: boolean }) {
  const f = panel.depth / 10;
  const x = useTransform(sx, [-0.5, 0.5], [-f * 4, f * 4]);
  const y = useTransform(sy, [-0.5, 0.5], [-f * 3, f * 3]);
  return (
    <motion.div
      style={{ x: reduce ? 0 : x, y: reduce ? 0 : y }}
      animate={reduce ? undefined : { translateY: [0, panel.depth > 45 ? -12 : 10, 0] }}
      transition={{ duration: 5 + panel.depth / 20, repeat: Infinity, ease: "easeInOut", delay: panel.delay }}
      className={`absolute ${panel.pos} z-20 flex items-center gap-2.5 rounded-2xl border border-cyan/25 bg-navy-800/80 px-3.5 py-2.5 backdrop-blur-md shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)]`}
    >
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-blue to-teal text-white">
        <panel.icon className="h-4 w-4" />
      </span>
      <span className="whitespace-nowrap text-sm font-semibold text-paper">{panel.label}</span>
    </motion.div>
  );
}
