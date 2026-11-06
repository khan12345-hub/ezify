import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Services } from "@/components/services";
import { ContactCTA } from "@/components/contact-cta";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Business Services: Marketing, Sales, IT & More | Ezify",
  description:
    "Explore Ezify’s 7 expert departments, from digital marketing and sales to data automation, e-commerce, accounting and IT. One partner for it all.",
};

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={<>Everything your business needs, <span className="accent">in one place.</span></>}
        subtitle="Seven expert departments, one reliable partner. Whether you need more customers, cleaner books or a team that never misses a shift, we have the right people ready to step in."
        actions={
          <>
            <Link href="/contact" className="btn btn-primary group shadow-[0_10px_30px_-10px_rgba(21,144,208,0.6)]">
              Get a free quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="btn btn-outline">
              <Phone className="h-4 w-4" />
              Talk to our team
            </a>
          </>
        }
      />
      <Services
        intro={{
          lead: "Pick a team.",
          accent: "We’ll handle the rest.",
          text: "Some clients come to us for one thing, like more leads or up-to-date books. Others hand over most of their back office. Either way, you get a dedicated team that learns how your business works and treats your goals like their own.",
        }}
      />
      <ContactCTA />
    </>
  );
}
