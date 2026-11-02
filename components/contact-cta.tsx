"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { CONTACT } from "@/lib/content";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";
import { ScrollMarquee } from "./motion/scroll-marquee";

export function ContactCTA() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.35"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [80, 36]);

  return (
    <section id="contact" className="scroll-mt-16 pb-[clamp(4.5rem,9vw,7.5rem)] pt-10">
      <ScrollMarquee text="Let's work together" />
      <ScrollMarquee text="Grow with Ezify" reverse outline />

      <div className="container mt-10">
        <motion.div
          ref={ref}
          style={reduce ? { borderRadius: 36 } : { scale, borderRadius: radius }}
          className="relative overflow-hidden bg-brand p-6 sm:p-10 lg:p-14"
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10"
            animate={reduce ? undefined : { x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#8b6cff]/30 blur-2xl"
            animate={reduce ? undefined : { x: [0, 60, 0], y: [0, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="text-sm font-semibold text-white/75">Get in touch</p>
              <h2 className="mt-4 text-[clamp(2.2rem,4.6vw,3.8rem)] text-white">
                Let&apos;s build something <span className="font-serif font-normal italic">great</span> together.
              </h2>
              <p className="mt-5 max-w-md text-white/80">
                Have a project in mind or need expert advice? Tell us a little
                about it and the right team will reach out.
              </p>
              <ul className="mt-8 space-y-3 text-white">
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15"><Phone className="h-4 w-4" /></span>
                  {CONTACT.phone}
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15"><Mail className="h-4 w-4" /></span>
                  {CONTACT.email}
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[26px] bg-surface p-6 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
