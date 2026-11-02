import { FEATURES } from "@/lib/content";
import { Reveal } from "./reveal";
import { SplitWords } from "./motion/split-words";
import { SpotlightCard } from "./motion/spotlight-card";

export function Why() {
  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Why Ezify</p>
          </Reveal>
          <h2 className="h-section mt-4">
            <SplitWords text="Built for" inView />{" "}
            <SplitWords text="your" inView delay={0.12} wordClassName="accent pr-[0.06em]" />{" "}
            <SplitWords text="success" inView delay={0.18} />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-5 text-ink-muted">
              We combine expertise with a customer-first mindset to deliver
              dependable results — every single time.
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
