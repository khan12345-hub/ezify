import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Services } from "@/components/services";
import { Brands } from "@/components/brands";
import { ContactCTA } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "Services & Brands — Ezify",
  description:
    "Explore Ezify's services and trusted brands across web, e-commerce, sales, marketing and accounting.",
};

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services & brands"
        title={<>Everything your business needs, <span className="accent">in one place.</span></>}
        subtitle="Websites, e-commerce, sales operations, marketing and accounting — one partner for all of it, plus a growing family of trusted brands."
      />
      <Services />
      <Brands />
      <ContactCTA />
    </>
  );
}
