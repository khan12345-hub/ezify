import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import { STATS } from "@/lib/content";
import { Emblem } from "./emblem";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section className="section section-dark">
      <div className="glow-tr" />
      <div className="container relative grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* media */}
        <Reveal>
          <div className="group relative overflow-hidden rounded-3xl border border-[color:var(--line-dark)]">
            <img
              src="/images/about-office.jpg"
              alt="Inside Ezify"
              loading="lazy"
              className="h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
            <button className="absolute left-5 bottom-5 inline-flex items-center gap-3 text-white">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-navy-900 transition-transform group-hover:scale-110">
                <Play className="h-5 w-5" fill="currentColor" />
              </span>
              <span className="text-sm font-semibold">Watch Our Story</span>
            </button>
          </div>
        </Reveal>

        {/* text + stats */}
        <div>
          <Reveal>
            <p className="kicker">About Ezify</p>
            <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,2.9rem)] text-paper">
              More Than a Company.<br /><span className="text-grad">A Commitment.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[1.08rem] leading-relaxed text-paper-muted">
              At Ezify, we bring together diverse expertise and a customer-first
              approach to deliver solutions that make a real difference. From
              technology to essential services, we&apos;re dedicated to building a
              smarter, safer and more connected future.
            </p>
            <Link href="/about" className="link-more mt-5">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="flex items-start gap-3">
                  <Emblem className="h-10 w-10 shrink-0" />
                  <div>
                    <p className="text-3xl font-extrabold text-paper">{s.value}</p>
                    <p className="text-sm leading-snug text-paper-muted">{s.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
