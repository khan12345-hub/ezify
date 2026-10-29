"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const go = (d: number) => setI((p) => (p + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="section relative overflow-hidden bg-navy-900 text-paper">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-teal/12 blur-[120px]" />

      <div className="container relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="kicker">Client Testimonials</p>
          <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,2.8rem)]">
            Trusted by Businesses<br />&amp; Individuals
          </h2>
          <p className="mt-5 text-paper-muted">
            Our clients trust us to deliver quality, reliability and results.
            Here&apos;s what they have to say.
          </p>
          <div className="mt-7 flex gap-3">
            <button onClick={() => go(-1)} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line-dark)] text-paper/80 transition-colors hover:border-blue-bright hover:text-paper">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => go(1)} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line-dark)] text-paper/80 transition-colors hover:border-blue-bright hover:text-paper">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="card-dark relative p-8 md:p-10">
          <Quote className="h-9 w-9 text-blue-bright/60" fill="currentColor" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              <p className="mt-5 text-lg leading-relaxed text-paper">{t.quote}</p>
              <div className="mt-7 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-paper">{t.name}</p>
                  <p className="text-sm text-paper-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex gap-2">
            {TESTIMONIALS.map((_, d) => (
              <button
                key={d}
                onClick={() => setI(d)}
                aria-label={`Testimonial ${d + 1}`}
                className={`h-1.5 rounded-full transition-all ${d === i ? "w-6 bg-blue-bright" : "w-1.5 bg-white/25"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
