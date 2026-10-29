import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/content";
import { Reveal } from "./reveal";

export function Projects() {
  return (
    <section className="section section-dark">
      <div className="glow-tl" />
      <div className="container relative">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <Reveal>
            <p className="kicker">Our Work &amp; Brands</p>
            <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,3rem)] text-paper">
              Featured Projects &amp; Success Stories
            </h2>
            <p className="mt-3 max-w-xl text-paper-muted">
              Explore a selection of our recent work, trusted brands and business
              solutions.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/businesses" className="btn btn-ghost">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 0.08}>
              <article className="group overflow-hidden rounded-2xl border border-[color:var(--line-dark)] transition-all duration-300 hover:border-blue/50 hover:shadow-[0_26px_60px_-28px_rgba(47,124,246,0.55)]">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
                  <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/10 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </span>
                  <div className="absolute inset-x-5 bottom-5">
                    <p className="text-sm font-semibold text-cyan">{p.category}</p>
                    <h3 className="mt-1 text-lg font-bold text-white">{p.title}</h3>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
