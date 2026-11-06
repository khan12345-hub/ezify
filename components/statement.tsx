"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const TEXT =
  "Behind every growing business is a team that shows up, figures it out and gets it done, every single day. We’re that team, so you can focus on what really matters, growing your business.";

/** Words fill from faint to ink as the paragraph scrolls through the viewport. */
export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = TEXT.split(" ");

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Why we exist</p>
        <p
          ref={ref}
          className="mt-8 max-w-5xl font-display text-[clamp(1.9rem,4.2vw,3.6rem)] font-medium leading-[1.12] tracking-[-0.03em]"
        >
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>
      </div>
    </section>
  );
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const highlight = /^(team|matters|growing)\b/.test(children);
  return (
    <span className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity }} className={highlight ? "accent" : undefined}>
        {children}
      </motion.span>
    </span>
  );
}
