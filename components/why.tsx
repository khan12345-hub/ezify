import { FEATURES } from "@/lib/content";
import { Reveal } from "./reveal";

export function Why() {
  return (
    <section className="section section-dark border-y border-[color:var(--line-dark)]">
      <div className="glow-tr" />
      <div className="container relative">
        <div className="mb-14 grid gap-6 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <p className="kicker">Why Choose Us</p>
            <h2 className="mt-4 text-[clamp(2rem,3.8vw,3rem)] text-paper">
              Built for <span className="text-grad">Your Success</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="text-[1.05rem] text-paper-muted">
              We combine innovation, expertise and a customer-first mindset to
              deliver exceptional results — every single time.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.08}>
              <div className={`card-dark group h-full p-7 ${i === 0 ? "card-glow" : ""}`}>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue to-teal text-white shadow-lg shadow-blue/40 transition-transform duration-300 group-hover:scale-110">
                  <f.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-paper">{f.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-paper-muted">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
