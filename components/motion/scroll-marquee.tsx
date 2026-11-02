"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/** Oversized text that slides sideways as the page scrolls past it. */
export function ScrollMarquee({ text, reverse = false, outline = false }: { text: string; reverse?: boolean; outline?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const raw = useTransform(scrollYProgress, [0, 1], reverse ? ["-30%", "0%"] : ["0%", "-30%"]);
  const x = useSpring(raw, { stiffness: 80, damping: 25 });

  return (
    <div ref={ref} aria-hidden="true" className="overflow-hidden py-2">
      <motion.p style={{ x }} className="flex w-max gap-10 whitespace-nowrap font-display text-[clamp(3.5rem,10vw,9rem)] font-semibold leading-none tracking-[-0.05em]">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className={outline ? "text-transparent [-webkit-text-stroke:1.5px_var(--ink)]" : undefined}>{text}</span>
            <span className="accent text-[0.7em]">✦</span>
          </span>
        ))}
      </motion.p>
    </div>
  );
}
