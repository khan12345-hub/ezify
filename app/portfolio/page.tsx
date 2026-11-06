import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Brands } from "@/components/brands";
import { ContactCTA } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "Our Portfolio | Brands We Help Grow | Ezify",
  description:
    "See the staffing, logistics, security, healthcare and e-commerce brands across Canada and the USA that rely on Ezify’s teams to grow.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our portfolio"
        title={<>Powering brands across <span className="accent">North America.</span></>}
        subtitle="Our teams support a diverse portfolio of businesses across Canada and the USA, spanning staffing, logistics, security, real estate and more. The same expertise that drives their growth is ready to drive yours."
      />
      <Brands full />
      <ContactCTA />
    </>
  );
}
