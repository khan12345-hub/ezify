import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { Reveal } from "./reveal";

export function Services() {
  return (
    <section id="services" className="section section-dark">
      <div className="glow-tl" />
      {/* 01 / 04 marker */}
      <div className="pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-2 text-xs font-semibold xl:flex">
        <span className="text-paper">01</span>
        <span className="h-12 w-px bg-[color:var(--line-dark)]" />
        <span className="text-paper-muted">04</span>
      </div>
      <div className="container relative">
        <div className="mb-14 grid gap-6 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <p className="kicker">Our Services</p>
            <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,3rem)] text-paper">
              Tailored Solutions<br />for <span className="text-grad">Every Need</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="text-paper-muted">
              From digital transformation to facility management, our diverse
              services are designed to help you grow, operate efficiently and stay
              ahead.
            </p>
            <Link href="/businesses" className="btn btn-grad mt-5">
              Explore All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.08}>
              <article className={`card-dark group h-full overflow-hidden ${i === 0 ? "card-glow" : ""}`}>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
                  <span className="absolute -bottom-6 left-6 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue to-teal text-white shadow-lg shadow-blue/40">
                    <s.icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="p-7 pt-11">
                  <h3 className="text-xl font-bold text-paper">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-paper-muted">{s.desc}</p>
                  <Link href="/businesses" className="link-more mt-5 text-sm">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
