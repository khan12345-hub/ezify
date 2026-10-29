"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Emblem } from "./emblem";
import { Reveal } from "./reveal";

type Tile = {
  src: string;
  label: string;
  wrap: string; // position + size
  rotate: number;
  delay: number;
  z: number;
};

const TILES: Tile[] = [
  { src: "/images/web-dev.jpg", label: "Digital Products", wrap: "left-[2%] bottom-[30%] w-[34%]", rotate: -7, delay: 0, z: 20 },
  { src: "/images/brand-beddora.jpg", label: "Home & Lifestyle", wrap: "left-[20%] bottom-[46%] w-[22%]", rotate: -3, delay: 0.6, z: 10 },
  { src: "/images/brand-ecommerce.jpg", label: "E-commerce Store", wrap: "right-[30%] bottom-[44%] w-[22%]", rotate: 4, delay: 1.1, z: 10 },
  { src: "/images/brand-clean.jpg", label: "", wrap: "right-[20%] bottom-[26%] w-[18%]", rotate: 3, delay: 0.9, z: 15 },
  { src: "/images/security.jpg", label: "Security Services", wrap: "right-[1%] bottom-[30%] w-[26%]", rotate: 7, delay: 1.4, z: 20 },
];

const LABELS = [
  { text: "Digital Products", pos: "left-[6%] top-[10%]" },
  { text: "E-commerce Store", pos: "left-1/2 top-[4%] -translate-x-1/2" },
  { text: "Home & Lifestyle", pos: "right-[14%] top-[12%]" },
  { text: "Security Services", pos: "right-[2%] top-[34%]" },
];

export function Brands() {
  const reduce = useReducedMotion();

  return (
    <section id="brands" className="section section-dark">
      <div className="glow-tr" />
      <div className="container relative grid gap-10 lg:grid-cols-12 lg:items-center">
        {/* copy */}
        <Reveal className="lg:col-span-4">
          <p className="kicker">Our Products &amp; Brands</p>
          <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,2.8rem)] text-paper">
            Innovative Products.<br />Trusted Brands.
          </h2>
          <p className="mt-5 text-paper-muted">
            Explore our range of products and branded solutions designed to bring
            convenience, quality and value to your everyday life.
          </p>
          <Link href="/businesses" className="btn btn-grad mt-7">
            View Our Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        {/* podium scene */}
        <div className="relative lg:col-span-8">
          <div className="relative mx-auto h-[440px] w-full max-w-2xl">
            {/* podium base */}
            <div className="absolute bottom-[14%] left-1/2 h-[90px] w-[72%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(47,124,246,0.55),rgba(47,124,246,0.08)_60%,transparent_75%)]" />
            <div className="absolute bottom-[13%] left-1/2 h-[120px] w-[80%] -translate-x-1/2 rounded-[50%] border border-cyan/25" />
            <div className="absolute bottom-[10%] left-1/2 h-[160px] w-[92%] -translate-x-1/2 rounded-[50%] border border-blue/15" />
            <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-blue/25 blur-[70px]" />

            {/* product tiles */}
            {TILES.map((t) => (
              <motion.div
                key={t.src}
                className={`absolute ${t.wrap}`}
                style={{ zIndex: t.z, rotate: `${t.rotate}deg` }}
                animate={reduce ? undefined : { y: [0, t.z > 15 ? -12 : 10, 0] }}
                transition={{ duration: 5 + t.delay, repeat: Infinity, ease: "easeInOut", delay: t.delay }}
              >
                <div className="overflow-hidden rounded-xl border border-cyan/30 shadow-[0_18px_50px_-18px_rgba(47,124,246,0.6)]">
                  <img src={t.src} alt={t.label || "Ezify product"} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                </div>
              </motion.div>
            ))}

            {/* central Ezify shopping bag */}
            <motion.div
              className="absolute bottom-[22%] left-1/2 z-30 w-24 -translate-x-1/2"
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute -top-4 left-1/2 h-7 w-12 -translate-x-1/2 rounded-t-full border-4 border-b-0 border-cyan/60" />
              <div className="relative rounded-xl border border-cyan/40 bg-gradient-to-b from-[#143e7a] to-[#0a1b33] px-3 py-4 text-center shadow-[0_0_45px_rgba(47,124,246,0.55)]">
                <Emblem className="mx-auto h-8 w-8" />
                <p className="mt-1 text-sm font-extrabold text-paper">Ezify</p>
              </div>
            </motion.div>

            {/* floating labels */}
            {LABELS.map((l, i) => (
              <motion.span
                key={l.text}
                className={`absolute ${l.pos} whitespace-nowrap rounded-full border border-cyan/25 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-paper backdrop-blur-md`}
                animate={reduce ? undefined : { y: [0, i % 2 ? 8 : -8, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              >
                {l.text}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
