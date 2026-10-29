import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Services } from "@/components/services";
import { Brands } from "@/components/brands";
import { Projects } from "@/components/projects";
import { ContactCTA } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "Services & Brands — Ezify",
  description:
    "Explore Ezify's services and trusted brands across technology, e-commerce, cleaning and security.",
};

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services & Brands"
        title={<>Everything your business needs, <span className="text-grad">in one place.</span></>}
        subtitle="One partner across website development, e-commerce, cleaning and security — plus a growing family of trusted brands."
      />
      <Services />
      <Brands />
      <Projects />
      <ContactCTA />
    </>
  );
}
