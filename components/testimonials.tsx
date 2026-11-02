import { TESTIMONIALS } from "@/lib/content";
import { Reveal } from "./reveal";

const AVATAR_TONES = ["bg-tint-blue text-[#2440d8]", "bg-tint-peach text-[#b4511f]"];

export function Testimonials() {
  return (
    <section className="section border-y border-line bg-surface">
      <div className="container">
        <Reveal className="mb-12 max-w-2xl">
          <p className="eyebrow">Testimonials</p>
          <h2 className="h-section mt-4">
            What our clients <span className="accent">say</span>
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-[28px] border border-line bg-bg p-8 sm:p-10">
                <span className="font-serif text-6xl leading-none text-brand">&ldquo;</span>
                <blockquote className="mt-2 font-display text-[1.35rem] font-medium leading-snug tracking-tight sm:text-[1.5rem]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 pt-8">
                  <span className={`grid h-11 w-11 place-items-center rounded-full font-semibold ${AVATAR_TONES[i % AVATAR_TONES.length]}`}>
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-ink-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
