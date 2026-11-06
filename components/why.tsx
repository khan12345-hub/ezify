import { FEATURES } from "@/lib/content";
import { Reveal } from "./reveal";
import { SplitWords } from "./motion/split-words";
import { SpotlightCard } from "./motion/spotlight-card";

export function Why() {
  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow">Why Ezify</p>
          </Reveal>
          <h2 className="h-section mt-4">
            <SplitWords text="Every Business Challenge Deserves a" inView />{" "}
            <SplitWords text="Smarter Solution." inView delay={0.2} wordClassName="accent pr-[0.06em]" />
          </h2>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-2xl text-ink-muted">
              Slow sales, messy books, endless manual work, not enough hands. We&rsquo;ve
              seen it all, and we&rsquo;ve built a team to fix every bit of it, so your
              business can finally grow the way you planned.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.08} y={40}>
              <SpotlightCard className="card h-full transition-[transform,border-color] duration-300 hover:-translate-y-1.5 hover:border-brand/40">
                <div className="p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-8 text-xl">{f.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{f.desc}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
