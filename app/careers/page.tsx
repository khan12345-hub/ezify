import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactCTA } from "@/components/contact-cta";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Careers — Ezify",
  description: "Join Ezify and build your career across technology, commerce and essential services.",
};

const PERKS = [
  "Work across multiple industries",
  "Clear growth paths & mentorship",
  "Hybrid & remote-friendly roles",
  "Be part of a fast-growing group",
];

const ROLES = [
  { title: "Full-Stack Developer", team: "Technology", type: "Full-time" },
  { title: "E-Commerce Specialist", team: "E-Commerce", type: "Full-time" },
  { title: "Operations Supervisor", team: "Cleaning Services", type: "Full-time" },
  { title: "Security Officer", team: "Security Services", type: "Shift" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build your career <span className="text-grad">with Ezify.</span></>}
        subtitle="We're always looking for talented people across technology, commerce and essential services. Find where you fit."
      />

      <section className="section section-dark">
        <div className="glow-tl" />
        <div className="container relative">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((p, i) => (
              <Reveal key={p} delay={(i % 4) * 0.07}>
                <div className="card-dark flex h-full items-center gap-3 p-5 text-sm font-semibold text-paper">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-blue to-teal" />
                  {p}
                </div>
              </Reveal>
            ))}
          </div>

          <h2 className="mt-16 text-[clamp(1.6rem,3.4vw,2.4rem)] text-paper">Open positions</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[color:var(--line-dark)] bg-white/[0.03]">
            {ROLES.map((r) => (
              <Link
                key={r.title}
                href="/contact"
                className="group flex items-center justify-between gap-4 border-b border-[color:var(--line-dark)] p-5 transition-colors last:border-0 hover:bg-white/[0.05]"
              >
                <div>
                  <h3 className="font-bold text-paper">{r.title}</h3>
                  <p className="text-sm text-paper-muted">{r.team} · {r.type}</p>
                </div>
                <span className="link-more">
                  Apply <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
