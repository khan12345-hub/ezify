"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight, ShoppingBag, TrendingUp, Receipt, UserPlus, Pause, Play } from "lucide-react";
import { STATS, HOME_SERVICES as TICKER } from "@/lib/content";
import { SplitWords } from "./motion/split-words";
import { Magnetic } from "./motion/magnetic";
import { Counter } from "./motion/counter";

const ease = [0.16, 1, 0.3, 1] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

const BARS = [38, 52, 44, 66, 58, 80, 92];

export function Hero() {
  const reduce = useReducedMotion();
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // scroll: the video card grows to full width and its corners soften as it reaches the top
  const { scrollYProgress } = useScroll({ target: videoWrapRef, offset: ["start end", "start 0.15"] });
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [0.86, 1]), { stiffness: 90, damping: 24 });
  const radius = useTransform(scrollYProgress, [0, 1], [48, 28]);
  const videoZoom = useTransform(scrollYProgress, [0, 1], [1.18, 1]);

  // pointer: floating cards drift at different depths
  const px = useSpring(useMotionValue(0), { stiffness: 70, damping: 20 });
  const py = useSpring(useMotionValue(0), { stiffness: 70, damping: 20 });

  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduce) return;
    v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [reduce]);

  function toggleVideo() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().then(() => setPlaying(true)).catch(() => {});
    else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <section
      className="relative overflow-hidden pt-28 lg:pt-32"
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse") return;
        px.set(e.clientX / window.innerWidth - 0.5);
        py.set(e.clientY / window.innerHeight - 0.5);
      }}
    >
      {/* drifting colour fields */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 right-[-10%] h-[620px] w-[620px] rounded-full bg-brand-soft blur-3xl"
        animate={reduce ? undefined : { x: [0, -60, 20, 0], y: [0, 40, -20, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-[-10%] h-[460px] w-[460px] rounded-full bg-tint-peach blur-3xl"
        animate={reduce ? undefined : { x: [0, 50, -30, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px] opacity-50 [mask-image:radial-gradient(55%_60%_at_50%_30%,#000,transparent)]"
        style={{ backgroundImage: "radial-gradient(#d9d4c7 1px, transparent 1px)", backgroundSize: "22px 22px" }}
      />

      {/* copy */}
      <div className="container relative text-center">
        <motion.p {...rise(0)} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 text-xs font-medium text-ink-muted backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2fbf71] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2fbf71]" />
          </span>
          Growing businesses across the globe
        </motion.p>

        <h1 className="mx-auto mt-6 max-w-5xl text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.95]">
          <SplitWords text="Empowering Businesses." delay={0.1} />{" "}
          <SplitWords text="Enabling Growth." delay={0.3} wordClassName="accent pr-[0.06em]" />
        </h1>

        <motion.p {...rise(0.45)} className="mx-auto mt-6 max-w-2xl text-[1.1rem] leading-relaxed text-ink-muted">
          You&rsquo;ve got big plans for your business. We&rsquo;ve got the people to make them happen,
          from your first lead to your last invoice, and everything in between.
        </motion.p>

        <motion.div {...rise(0.55)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Magnetic>
            <Link href="/contact" className="btn btn-primary group shadow-[0_10px_30px_-10px_rgba(21,144,208,0.6)]">
              Get a free quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="/businesses" className="btn btn-outline">
              Explore services
            </Link>
          </Magnetic>
        </motion.div>

        <motion.dl {...rise(0.65)} className="mx-auto mt-10 grid max-w-lg grid-cols-3 divide-x divide-line">
          {STATS.map((s) => (
            <div key={s.label} className="px-4">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                <Counter value={s.value} />
              </dd>
              <dd className="mt-1 text-xs leading-snug text-ink-muted">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* video banner */}
      <div ref={videoWrapRef} className="container relative mt-12 pb-24 lg:mt-14 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease }}
          className="relative"
        >
          <motion.div
            style={reduce ? { borderRadius: 28 } : { scale, borderRadius: radius }}
            className="relative aspect-[4/5] overflow-hidden bg-ink shadow-[0_50px_100px_-40px_rgba(23,40,59,0.45)] sm:aspect-[16/9] lg:aspect-[21/9]"
          >
            <motion.video
              ref={videoRef}
              style={reduce ? undefined : { scale: videoZoom }}
              className="absolute inset-0 h-full w-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
              poster="/video/poster-office.jpg"
              aria-label="Ezify team at work"
            >
              <source src="/video/hero-office.mp4" type="video/mp4" />
            </motion.video>
            {/* soft brand tint so the footage sits in the light palette */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-brand/10" />

            {/* caption */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
              <p className="max-w-sm text-left font-display text-xl font-medium leading-tight text-white sm:text-3xl">
                Dedicated teams, <span className="font-serif italic">always on.</span>
              </p>
              <button
                type="button"
                onClick={toggleVideo}
                aria-label={playing ? "Pause video" : "Play video"}
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/90 text-ink backdrop-blur transition-transform hover:scale-110"
              >
                {playing ? <Pause className="h-4 w-4" fill="currentColor" /> : <Play className="h-4 w-4 translate-x-[1px]" fill="currentColor" />}
              </button>
            </div>
          </motion.div>

          {/* floating cards over the video */}
          <Float px={px} py={py} depth={28} delay={1.2} className="left-4 top-6 sm:-left-4 sm:top-10 lg:-left-8">
            <div className="flex items-center gap-3 p-3 pr-5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-tint-peach text-[#b4511f]">
                <ShoppingBag className="h-4 w-4" />
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold leading-tight">New order received</p>
                <p className="text-xs text-ink-muted">2 items · $61.00</p>
              </div>
              <span className="ml-1 rounded-full bg-tint-mint px-2 py-0.5 text-[11px] font-medium text-[#16794f]">
                Shipped
              </span>
            </div>
          </Float>

          <Float px={px} py={py} depth={-24} delay={1.4} className="right-4 top-6 hidden w-52 sm:right-[-1rem] sm:top-12 sm:block lg:-right-8">
            <div className="p-4 text-left">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold leading-tight">Website visits</p>
                  <p className="text-[11px] text-ink-muted">This week</p>
                </div>
                <span className="flex items-center gap-1 text-xs font-semibold text-[#16794f]">
                  <TrendingUp className="h-3.5 w-3.5" /> 24%
                </span>
              </div>
              <div className="mt-3 flex h-14 items-end gap-1.5">
                {BARS.map((h, i) => (
                  <motion.span
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.7, delay: 1.6 + i * 0.07, ease }}
                    className={`flex-1 rounded-sm ${i === BARS.length - 1 ? "bg-brand" : "bg-brand-soft"}`}
                  />
                ))}
              </div>
            </div>
          </Float>

          <Float px={px} py={py} depth={40} delay={1.6} className="-bottom-8 right-6 hidden w-64 sm:block lg:right-16">
            <div className="space-y-2.5 p-4 text-left">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-tint-lilac text-[#6a3fd4]">
                  <UserPlus className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold leading-tight">New lead</p>
                  <p className="text-[11px] text-ink-muted">From your ad campaign</p>
                </div>
                <span className="rounded-full bg-tint-peach px-2 py-0.5 text-[11px] font-medium text-[#b4511f]">
                  Hot
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-tint-butter text-[#8a6100]">
                  <Receipt className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold leading-tight">Invoice #204</p>
                  <p className="text-[11px] text-ink-muted">Sent to client</p>
                </div>
                <motion.span
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 2.2 }}
                  className="rounded-full bg-tint-mint px-2 py-0.5 text-[11px] font-medium text-[#16794f]"
                >
                  Paid
                </motion.span>
              </div>
            </div>
          </Float>
        </motion.div>
      </div>

      {/* service ticker */}
      <div className="relative border-y border-line bg-surface py-5">
        <div className="flex w-max ticker">
          {Array.from({ length: 4 }).flatMap((_, k) =>
            TICKER.map((s) => (
              <span key={`${k}-${s.title}`} className="flex items-center gap-4 pl-10 font-display text-xl font-medium text-ink/80">
                <s.icon className="h-5 w-5 text-brand" />
                {s.title}
                <span className="pl-6 text-line">/</span>
              </span>
            )),
          )}
        </div>
      </div>
    </section>
  );
}

function Float({
  children,
  className,
  px,
  py,
  depth,
  delay,
}: {
  children: ReactNode;
  className?: string;
  px: MotionValue<number>;
  py: MotionValue<number>;
  depth: number;
  delay: number;
}) {
  const x = useTransform(px, (v) => v * depth);
  const y = useTransform(py, (v) => v * depth);
  return (
    <motion.div aria-hidden="true" style={{ x, y }} className={`absolute z-10 ${className ?? ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay, ease }}
        className="rounded-2xl border border-line bg-surface/95 shadow-[0_24px_60px_-20px_rgba(23,40,59,0.32)] backdrop-blur"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
