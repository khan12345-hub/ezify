"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BRANDS, type Brand } from "@/lib/content";
import { Reveal } from "./reveal";

/** Placeholder tile colours for brands that don't have a photo yet. */
const TILE_TONES = [
  "bg-tint-blue text-[#0b78b2]",
  "bg-tint-peach text-[#b4511f]",
  "bg-tint-mint text-[#16794f]",
  "bg-tint-lilac text-[#6a3fd4]",
  "bg-tint-butter text-[#8a6100]",
];

/**
 * Portfolio section.
 * - default (home page): heading + swipeable slider of the first few brands + "View full portfolio".
 * - `full` (/portfolio page): grid of every brand, no heading (the page hero has it).
 */
export function Brands({ full = false }: { full?: boolean }) {
  if (full) {
    return (
      <section id="brands" className="section scroll-mt-16">
        <div className="container">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {BRANDS.map((b, i) => (
              <Reveal key={b.name} delay={(i % 4) * 0.07}>
                <BrandLink brand={b} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return <BrandsSlider />;
}

function BrandsSlider() {
  const half = Math.ceil(BRANDS.length / 2);
  const rows = [BRANDS.slice(0, half), BRANDS.slice(half)];

  return (
    <section id="brands" className="section scroll-mt-16 overflow-hidden">
      <div className="container">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow">Our portfolio</p>
            <h2 className="h-section mt-4">
              Powering brands across <span className="accent">North America.</span>
            </h2>
            <p className="mt-4 max-w-xl text-ink-muted">
              Our teams support a diverse portfolio of businesses across Canada and
              the USA, spanning staffing, logistics, security, real estate and more.
              The same expertise that drives their growth is ready to drive yours.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="shrink-0">
            <Link href="/portfolio" className="btn btn-outline">
              View full portfolio <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* two auto-scrolling rows moving in opposite directions; full-bleed with faded edges */}
      <div className="marquee-wrap space-y-4 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
        {rows.map((row, r) => (
          <div key={r} className="overflow-hidden">
            <ul
              className={`marquee flex w-max gap-4 ${r === 1 ? "marquee-reverse" : ""}`}
              style={{ ["--marquee-duration" as string]: `${row.length * 7}s` }}
            >
              {/* list rendered twice so the loop is seamless; the copy is hidden from screen readers */}
              {[0, 1].flatMap((copy) =>
                row.map((b, i) => (
                  <li
                    key={`${copy}-${b.name}`}
                    aria-hidden={copy === 1 || undefined}
                    className="w-[220px] shrink-0 sm:w-[260px] lg:w-[290px]"
                  >
                    <BrandLink brand={b} index={r * half + i} tabbable={copy === 0} />
                  </li>
                )),
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

type CardProps = { brand: Brand; index: number; compact?: boolean };

function BrandLink({ tabbable = true, ...props }: CardProps & { tabbable?: boolean }) {
  const b = props.brand;
  if (!b.url) return <BrandCard {...props} />;
  return (
    <a
      href={b.url}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={tabbable ? undefined : -1}
      aria-label={`${b.name} (opens in a new tab)`}
      className="block rounded-[24px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
    >
      <BrandCard {...props} />
    </a>
  );
}

/** "Star Employment" → "SE", "247 Gard" → "247". */
function initials(name: string) {
  const words = name.split(" ");
  if (/^\d+$/.test(words[0])) return words[0];
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

function BrandCard({ brand: b, index, compact = false }: CardProps) {
  return (
    <article className="group">
      <div className={`relative overflow-hidden rounded-[24px] bg-line ${compact ? "aspect-[4/3]" : "aspect-[4/5]"}`}>
        {b.image ? (
          <img
            src={b.image}
            alt={b.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            aria-hidden="true"
            className={`absolute inset-0 flex flex-col justify-between p-5 transition-transform duration-700 group-hover:scale-105 sm:p-6 ${TILE_TONES[index % TILE_TONES.length]}`}
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] opacity-70">{b.category}</span>
            <span
              className={`font-display font-semibold leading-none tracking-[-0.04em] ${compact ? "text-6xl" : "text-[clamp(3rem,7vw,5.5rem)]"}`}
            >
              {initials(b.name)}
            </span>
          </div>
        )}
        {b.url && (
          <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white text-ink opacity-0 transition-opacity group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        )}
      </div>
      <div className="mt-4 px-1">
        <h3 className="text-lg sm:text-xl">{b.name}</h3>
        <p className="mt-0.5 text-xs text-ink-muted sm:text-sm">{b.category}</p>
      </div>
    </article>
  );
}
