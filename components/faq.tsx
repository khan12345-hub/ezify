import { Plus } from "lucide-react";
import { FAQS } from "@/lib/content";
import { Reveal } from "./reveal";

export function Faq() {
  return (
    <section className="section">
      <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="h-section mt-4">
            Questions, <span className="accent">answered</span>
          </h2>
          <p className="mt-5 max-w-sm text-ink-muted">
            Can&apos;t find what you&apos;re looking for? Send us a message and
            we&apos;ll get back to you within one business day.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="divide-y divide-line border-y border-line">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-medium tracking-tight">
                {f.q}
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-white">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-3 max-w-xl pr-12 leading-relaxed text-ink-muted">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
