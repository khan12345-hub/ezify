import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Compass, GraduationCap, Laptop, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactCTA } from "@/components/contact-cta";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Careers — Ezify",
  description: "Join Ezify and build your career across web, e-commerce, sales, marketing and accounting.",
};

const PERKS = [
  { icon: Compass, text: "Work with clients across industries" },
  { icon: GraduationCap, text: "Clear growth paths & mentorship" },
  { icon: Laptop, text: "Hybrid & remote-friendly roles" },
  { icon: TrendingUp, text: "Be part of a fast-growing team" },
];

const ROLES = [
  { title: "Store Operations Associate", team: "E-Commerce", type: "Part-time" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build your career <span className="accent">with Ezify.</span></>}
        subtitle="Join a team that helps businesses across Canada and the USA grow every day. We’re hiring skilled, driven people across marketing, sales, technology, operations and finance. Find the role where you fit best."
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((p, i) => (
              <Reveal key={p.text} delay={(i % 4) * 0.07}>
                <div className="card flex h-full flex-col gap-6 p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-soft text-brand">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <p className="font-display text-lg font-medium leading-snug tracking-tight">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 flex items-end justify-between gap-4">
            <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)]">Open positions</h2>
            <p className="text-sm text-ink-muted">{ROLES.length} {ROLES.length === 1 ? "role" : "roles"}</p>
          </div>
          <div className="card mt-6 overflow-hidden">
            {ROLES.map((r) => (
              <Link
                key={r.title}
                href="/contact"
                className="group flex items-center justify-between gap-4 border-b border-line p-5 transition-colors last:border-0 hover:bg-bg sm:p-6"
              >
                <div>
                  <h3 className="text-xl">{r.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{r.team} · {r.type}</p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
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
