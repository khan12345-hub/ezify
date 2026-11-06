"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { STEPS } from "@/lib/content";
import { Reveal } from "./reveal";
import { SplitWords } from "./motion/split-words";

export function Process() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.7", "end 0.6"] });
  const fill = useSpring(scrollYProgress, { stiffness: 100, damping: 26 });

  return (
    <section className="section border-y border-line bg-surface">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="eyebrow">Our process</p>
          </Reveal>
          <h2 className="h-section mt-4">
            <SplitWords text="One call." inView />
            <br />
            <SplitWords text="The" inView delay={0.15} />{" "}
            <SplitWords text="right" inView delay={0.2} wordClassName="accent pr-[0.06em]" />{" "}
            <SplitWords text="team." inView delay={0.25} />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-md text-ink-muted">
              You&rsquo;re already busy running a business. So we kept things simple.
              You share what your business needs, and we take care of everything
              after that, without the back-and-forth.
            </p>
          </Reveal>
        </div>

        <ol ref={listRef} className="relative grid gap-5 pl-14 sm:pl-20">
          {/* timeline rail + animated fill */}
          <span aria-hidden="true" className="absolute bottom-8 left-[19px] top-8 w-[2px] rounded-full bg-line sm:left-[27px]" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: fill }}
            className="absolute bottom-8 left-[19px] top-8 w-[2px] origin-top rounded-full bg-brand sm:left-[27px]"
          />
          {STEPS.map((s, i) => (
            <Step key={s.title} index={i} total={STEPS.length} progress={fill} title={s.title} desc={s.desc} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function Step({
  index,
  total,
  progress,
  title,
  desc,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  title: string;
  desc: string;
}) {
  const at = index / Math.max(total - 1, 1);
  const on = useTransform(progress, [Math.max(at - 0.08, 0), at], [0, 1]);
  const dotBg = useTransform(on, [0, 1], ["#ffffff", "#3a57f0"]);
  const dotColor = useTransform(on, [0, 1], ["#3a57f0", "#ffffff"]);
  const cardOpacity = useTransform(on, [0, 1], [0.45, 1]);

  return (
    <li className="relative">
      <motion.span
        style={{ backgroundColor: dotBg, color: dotColor }}
        className="absolute -left-14 top-7 grid h-10 w-10 place-items-center rounded-full border-2 border-brand font-display text-sm font-semibold sm:-left-20 sm:h-14 sm:w-14 sm:text-base"
      >
        {index + 1}
      </motion.span>
      <motion.div style={{ opacity: cardOpacity }} className="rounded-[24px] border border-line bg-bg p-7 sm:p-8">
        <h3 className="text-2xl">{title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{desc}</p>
      </motion.div>
    </li>
  );
}
