import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BRANDS } from "@/lib/content";
import { Reveal } from "./reveal";

export function Brands() {
  return (
    <section id="brands" className="section scroll-mt-16">
      <div className="container">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow">Products &amp; brands</p>
            <h2 className="h-section mt-4">
              Brands people <span className="accent">trust</span>
            </h2>
            <p className="mt-4 max-w-lg text-ink-muted">
              A growing family of products that bring convenience, quality and
              value to everyday life.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/businesses#brands" className="btn btn-outline">
              View all brands <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {BRANDS.map((b, i) => (
            <Reveal key={b.name} delay={(i % 4) * 0.07}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-line">
                  <img
                    src={b.image}
                    alt={b.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white text-ink opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-2 px-1">
                  <h3 className="text-xl">{b.name}</h3>
                  <p className="text-xs text-ink-muted sm:text-sm">{b.category}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
