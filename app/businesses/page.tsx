import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Services } from "@/components/services";
import { ContactCTA } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "Our Services — Ezify",
  description:
    "Explore Ezify's seven expert departments: digital marketing, sales, data automation, HR & dispatch, e-commerce, accounts & finance and IT.",
};

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={<>Everything your business needs, <span className="accent">in one place.</span></>}
        subtitle="Seven expert departments, from marketing and sales to automation, HR, e-commerce, finance and IT — one partner for all of it."
      />
      <Services />
      <ContactCTA />
    </>
  );
}
