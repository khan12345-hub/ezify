import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { About } from "@/components/about";
import { Why } from "@/components/why";
import { Testimonials } from "@/components/testimonials";
import { ContactCTA } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "About — Ezify",
  description:
    "Ezify brings together diverse expertise and a customer-first approach to build a smarter, safer and more connected future.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ezify"
        title={<>More than a company. <span className="text-grad">A commitment.</span></>}
        subtitle="We unite specialist teams under one brand and one standard — delivering technology, commerce and essential services that businesses can rely on."
      />
      <About />
      <Why />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
