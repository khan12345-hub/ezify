"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LEADERS, TEAM, VALUES, SERVICES, TONES, CONTACT, type TeamMember, type Tone } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Reveal } from "./reveal";
import { SplitWords } from "./motion/split-words";
import { Counter } from "./motion/counter";
import { SpotlightCard } from "./motion/spotlight-card";
import { ScrollMarquee } from "./motion/scroll-marquee";
import { Magnetic } from "./motion/magnetic";

const ease = [0.16, 1, 0.3, 1] as const;

const LEADER_TONES: Tone[] = ["blue", "peach", "mint"];

const LINKEDIN =
  "M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5c0-1.2-.02-2.73-1.66-2.73-1.67 0-1.93 1.3-1.93 2.64V21h-4z";

function toneFor(dept: string): Tone {
  return SERVICES.find((s) => s.title === dept)?.tone ?? "blue";
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

/* ── avatar: photo when provided, otherwise tinted initials ─── */
function Avatar({ member, className, big, tone: toneKey }: { member: TeamMember; className?: string; big?: boolean; tone?: Tone }) {
  const tone = TONES[toneKey ?? toneFor(member.dept)];
  return (
    <div className={cn("relative overflow-hidden", tone.bg, className)}>
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40"
            style={{ backgroundImage: "radial-gradient(rgba(21,23,28,0.12) 1px, transparent 1px)", backgroundSize: "16px 16px" }}
          />
          <span
            aria-hidden="true"
            className={cn(
              "absolute inset-0 grid place-items-center font-display font-semibold tracking-[-0.04em] transition-transform duration-700 group-hover:scale-110",
              tone.text,
              big ? "text-[clamp(4rem,9vw,7rem)]" : "text-5xl",
            )}
          >
            {initials(member.name)}
          </span>
        </>
      )}
    </div>
  );
}

export function TeamIntro() {
  const offices = CONTACT.address.split("·").length;
  const stats = [
    { value: String(LEADERS.length + TEAM.length), label: "Team members" },
    { value: String(SERVICES.length), label: "Departments" },
    { value: String(offices), label: "Offices" },
  ];
  // founder first, then one person from each department so the stack shows every colour
  const stack = [LEADERS[0], ...SERVICES.map((s) => TEAM.find((m) => m.dept === s.title)).filter((m): m is TeamMember => !!m)];

  return (
    <section className="relative overflow-hidden border-b border-line pt-36 pb-16 lg:pt-44 lg:pb-20">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-8%] h-[520px] w-[520px] rounded-full bg-brand-soft blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-[28%] h-[300px] w-[300px] rounded-full bg-tint-mint/70 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div>
          <Reveal>
            <p className="eyebrow">Our team</p>
          </Reveal>
          <h1 className="mt-5 text-[clamp(2.8rem,6.4vw,5.4rem)] leading-[0.98]">
            <SplitWords text="The people behind" delay={0.05} />{" "}
            <SplitWords text="Ezify." delay={0.25} wordClassName="accent pr-[0.06em]" />
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-[1.08rem] text-ink-muted">
              Designers, developers, marketers, sales specialists and accountants —
              one team that works together so your business doesn&apos;t have to
              juggle five.
            </p>
          </Reveal>

          {/* avatar stack */}
          <Reveal delay={0.4}>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {stack.map((m, i) => (
                  <motion.span
                    key={m.name}
                    initial={{ opacity: 0, x: -12, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.07, ease }}
                    className={cn(
                      "grid h-11 w-11 place-items-center rounded-full border-2 border-bg text-xs font-semibold",
                      TONES[toneFor(m.dept)].bg,
                      TONES[toneFor(m.dept)].text,
                    )}
                    title={m.name}
                  >
                    {initials(m.name)}
                  </motion.span>
                ))}
              </div>
              <p className="text-sm text-ink-muted">
                and growing — <Link href="/careers" className="font-semibold text-ink underline-offset-4 hover:underline">join us</Link>
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <dl className="grid grid-cols-3 divide-x divide-line rounded-[24px] border border-line bg-surface/80 p-6 backdrop-blur">
            {stats.map((s) => (
              <div key={s.label} className="px-4 first:pl-0 last:pr-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl font-semibold tracking-tight">
                  <Counter value={s.value} />
                </dd>
                <dd className="mt-1 text-xs text-ink-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export function Leadership() {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">Leadership</p>
            </Reveal>
            <h2 className="h-section mt-4">
              <SplitWords text="Leading the" inView />{" "}
              <SplitWords text="way" inView delay={0.15} wordClassName="accent pr-[0.06em]" />
            </h2>
          </div>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="text-ink-muted">
              The people who set the standard for every project — and who you can
              always reach when it matters.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {LEADERS.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1} y={50}>
              <article className="group h-full rounded-[28px] border border-line bg-surface p-2 transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(21,23,28,0.3)]">
                <div className="relative">
                  <Avatar member={m} big tone={LEADER_TONES[i % LEADER_TONES.length]} className="aspect-[4/5] rounded-[22px]" />
                  <a
                    href={m.linkedin ?? "#"}
                    aria-label={`${m.name} on LinkedIn`}
                    className="absolute right-3 top-3 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-white text-ink opacity-0 shadow-sm transition-all duration-300 hover:bg-brand hover:text-white group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d={LINKEDIN} /></svg>
                  </a>
                </div>
                <div className="p-5">
                  <h3 className="text-2xl">{m.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand">{m.role}</p>
                  {m.bio && <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{m.bio}</p>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamGrid() {
  const tabs = ["All", ...SERVICES.map((s) => s.title)];
  const [active, setActive] = useState("All");
  const shown = active === "All" ? TEAM : TEAM.filter((m) => m.dept === active);

  return (
    <section className="section border-y border-line bg-surface">
      <div className="container">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">The whole team</p>
            </Reveal>
            <h2 className="h-section mt-4">
              <SplitWords text="Five teams," inView />{" "}
              <SplitWords text="one" inView delay={0.15} wordClassName="accent pr-[0.06em]" />{" "}
              <SplitWords text="Ezify" inView delay={0.2} />
            </h2>
          </div>

          {/* department filter */}
          <Reveal delay={0.1}>
            <LayoutGroup>
              <div role="tablist" aria-label="Filter by department" className="flex flex-wrap gap-1.5 rounded-[22px] border border-line bg-bg p-1.5 lg:max-w-[640px]">
                {tabs.map((t) => (
                  <button
                    key={t}
                    role="tab"
                    aria-selected={active === t}
                    onClick={() => setActive(t)}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      active === t ? "text-white" : "text-ink-muted hover:text-ink",
                    )}
                  >
                    {active === t && (
                      <motion.span
                        layoutId="team-tab"
                        className="absolute inset-0 rounded-full bg-ink"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{t.replace(" Solutions", "")}</span>
                  </button>
                ))}
              </div>
            </LayoutGroup>
          </Reveal>
        </div>

        <motion.div layout className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {shown.map((m, i) => (
              <motion.article
                key={m.name}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease }}
                className="group"
              >
                <Avatar member={m} className="aspect-square rounded-[22px]" />
                <div className="mt-3 px-1">
                  <h3 className="text-lg leading-tight">{m.name}</h3>
                  <p className="mt-0.5 text-sm text-ink-muted">{m.role}</p>
                  <p className={cn("mt-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium", TONES[toneFor(m.dept)].bg, TONES[toneFor(m.dept)].text)}>
                    {m.dept.replace(" Solutions", "")}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export function Values() {
  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">How we work</p>
          </Reveal>
          <h2 className="h-section mt-4">
            <SplitWords text="What we" inView />{" "}
            <SplitWords text="believe" inView delay={0.12} wordClassName="accent pr-[0.06em]" />
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={(i % 4) * 0.08} y={40}>
              <SpotlightCard className="card h-full transition-[transform,border-color] duration-300 hover:-translate-y-1.5 hover:border-brand/40">
                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                      <v.icon className="h-5 w-5" />
                    </span>
                    <span className="font-serif text-3xl italic text-ink/15">0{i + 1}</span>
                  </div>
                  <h3 className="mt-8 text-xl">{v.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{v.desc}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JoinTeam() {
  return (
    <section className="pb-[clamp(4.5rem,9vw,7.5rem)]">
      <ScrollMarquee text="Join the team" outline />

      <div className="container mt-10">
        <Reveal y={40}>
          <div className="relative overflow-hidden rounded-[36px] bg-brand p-8 sm:p-12 lg:p-16">
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10"
              animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#8b6cff]/30 blur-2xl"
              animate={{ x: [0, 60, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-sm font-semibold text-white/75">We&apos;re hiring</p>
                <h2 className="mt-4 max-w-2xl text-[clamp(2.2rem,4.6vw,3.8rem)] text-white">
                  Want to build something <span className="font-serif font-normal italic">great</span> with us?
                </h2>
                <p className="mt-5 max-w-md text-white/80">
                  We&apos;re always looking for talented people across technology,
                  sales, marketing and finance.
                </p>
              </div>
              <Magnetic>
                <Link href="/careers" className="btn btn-white group shrink-0">
                  See open roles
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </Link>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
