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
    <section className="border-b border-line pt-36 pb-16 lg:pt-44 lg:pb-20">
      <div className="container">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 text-[clamp(2.6rem,6vw,4.8rem)] leading-[1]">{title}</h1>
          <p className="mt-6 max-w-xl text-[1.08rem] text-ink-muted">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
