"use client";

import { motion } from "framer-motion";

/** Giant footer wordmark; letters rise in one after another when scrolled into view. */
export function Wordmark({ text }: { text: string }) {
  return (
    <motion.p
      aria-hidden="true"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ staggerChildren: 0.07 }}
      className="flex select-none overflow-hidden pb-[0.22em] font-display text-[clamp(6rem,30vw,27rem)] font-semibold leading-[0.82] tracking-[-0.06em] text-brand-soft"
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{ hidden: { y: "100%" }, show: { y: "0%" } }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {ch}
        </motion.span>
      ))}
    </motion.p>
  );
}
