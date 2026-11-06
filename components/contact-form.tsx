"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, ChevronDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { CONTACT } from "@/lib/content";
import { sendContact } from "@/app/actions/contact";

const OPTIONS = [
  "Digital Marketing",
  "Sales & Bidding",
  "Data Automation",
  "HR & Dispatch",
  "E-Commerce",
  "Accounts & Finance",
  "IT Solutions",
  "Something else",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();
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
        <h3 className="mt-5 text-2xl">Thank you</h3>
        <p className="mt-1 max-w-sm text-sm text-ink-muted">
          Your request has been received, and a member of our team will contact you within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        // onSubmit (not action=) so typed values stay in the fields if sending fails
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        setError("");
        startTransition(async () => {
          try {
            const res = await sendContact(formData);
            if (res.ok) setSent(true);
            else setError(res.error);
          } catch {
            setError("Something went wrong. Please email or call us directly.");
          }
        });
      }}
      className="grid gap-4 sm:grid-cols-2"
    >
      <fieldset className="sm:col-span-2">
        <legend className="mb-2.5 text-sm font-medium">I&apos;m interested in</legend>
        {/* the chosen option is submitted once, from here; chips and dropdown just set it */}
        <input type="hidden" name="service" value={picked} />

        {/* mobile: dropdown */}
        <div className="relative sm:hidden">
          <select
            value={picked}
            onChange={(e) => setPicked(e.target.value)}
            aria-label="I'm interested in"
            className="field cursor-pointer appearance-none pr-10"
          >
            {OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
        </div>

        {/* tablet & desktop: chips */}
        <div className="hidden flex-wrap gap-2 sm:flex">
          {OPTIONS.map((o) => (
            <label
              key={o}
              className={cn(
                "cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand",
                picked === o ? "border-ink bg-ink text-white" : "border-line text-ink-muted hover:border-ink hover:text-ink",
              )}
            >
              <input type="radio" name="service-choice" value={o} checked={picked === o} onChange={() => setPicked(o)} className="sr-only" />
              {o}
            </label>
          ))}
        </div>
      </fieldset>
      <input name="name" required autoComplete="name" placeholder="Full name *" aria-label="Full name" className="field" />
      <input name="email" type="email" required autoComplete="email" placeholder="Business email *" aria-label="Business email" className="field" />
      <input name="company" autoComplete="organization" placeholder="Company name" aria-label="Company name" className="field" />
      <input name="phone" type="tel" autoComplete="tel" placeholder="Phone number" aria-label="Phone number" className="field" />
      <textarea
        name="message"
        rows={4}
        required
        placeholder="What would you like to improve in your business?"
        aria-label="What would you like to improve in your business?"
        className="field resize-none sm:col-span-2"
      />
      {/* honeypot for bots: hidden from people and screen readers */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {error && (
        <p role="alert" className="text-sm text-[#b4511f] sm:col-span-2">
          {error}{" "}
          <a href={`mailto:${CONTACT.email}`} className="underline">{CONTACT.email}</a>
        </p>
      )}
      <button type="submit" disabled={pending} className="btn btn-ink sm:col-span-2 disabled:opacity-60">
        {pending ? "Sending…" : "Request a consultation"}
        {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowUpRight className="h-4 w-4" />}
      </button>
    </form>
  );
}
