import { Reveal } from "./reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
    <section className="bg-navy-grad relative overflow-hidden pt-36 pb-16 text-paper">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-blue/20 blur-[110px]" />
      <div className="container relative">
        <Reveal className="max-w-3xl">
          <p className="kicker">{eyebrow}</p>
          <h1 className="mt-4 text-[clamp(2.3rem,5vw,4rem)] font-extrabold leading-[1.05]">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-paper-muted">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
