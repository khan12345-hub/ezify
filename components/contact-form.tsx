"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";

const SERVICES = ["Website Development", "E-Commerce", "Cleaning Services", "Security Services", "Other"];

const field =
  "w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/60 focus:border-white focus:bg-white/15";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-2xl border border-white/25 bg-white/10 p-8 text-center text-white"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-teal">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-xl font-bold">Message sent!</h3>
        <p className="mt-1 text-sm text-white/80">We&apos;ll get back to you within one business day.</p>
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
      <input name="name" required placeholder="Your Name *" className={field} />
      <input name="email" type="email" required placeholder="Email Address *" className={field} />
      <select name="service" className={field} defaultValue="">
        <option value="" disabled className="text-ink">Service Interest</option>
        {SERVICES.map((s) => (
          <option key={s} className="text-ink">{s}</option>
        ))}
      </select>
      <input name="subject" placeholder="Your Message *" className={field} />
      <textarea name="message" rows={4} required placeholder="Tell us about your project…" className={`${field} sm:col-span-2 resize-none`} />
      <button type="submit" className="btn btn-light sm:col-span-2">
        Send Message
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
