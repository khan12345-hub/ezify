"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { cn } from "@/lib/cn";

const OPTIONS = [...SERVICES.map((s) => s.title), "Something else"];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [picked, setPicked] = useState<string>(OPTIONS[0]);

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex min-h-[340px] flex-col items-center justify-center text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-tint-mint text-[#16794f]">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-2xl">Message sent!</h3>
        <p className="mt-1 text-sm text-ink-muted">We&apos;ll get back to you within one business day.</p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-4 sm:grid-cols-2"
    >
      <fieldset className="sm:col-span-2">
        <legend className="mb-2.5 text-sm font-medium">I&apos;m interested in</legend>
        <div className="flex flex-wrap gap-2">
          {OPTIONS.map((o) => (
            <label
              key={o}
              className={cn(
                "cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                picked === o ? "border-ink bg-ink text-white" : "border-line text-ink-muted hover:border-ink hover:text-ink",
              )}
            >
              <input type="radio" name="service" value={o} checked={picked === o} onChange={() => setPicked(o)} className="sr-only" />
              {o}
            </label>
          ))}
        </div>
      </fieldset>
      <input name="name" required placeholder="Your name *" className="field" />
      <input name="email" type="email" required placeholder="Email address *" className="field" />
      <textarea name="message" rows={4} required placeholder="Tell us about your project…" className="field resize-none sm:col-span-2" />
      <button type="submit" className="btn btn-ink sm:col-span-2">
        Send message
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </form>
  );
}
