import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactCTA } from "@/components/contact-cta";
import { CONTACT } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact — Ezify",
  description: "Get in touch with Ezify — services, partnerships and support.",
};

const INFO = [
  { icon: Phone, label: "Phone", value: CONTACT.phone },
  { icon: Mail, label: "Email", value: CONTACT.email },
  { icon: MapPin, label: "Offices", value: CONTACT.address },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 9am–6pm · 24/7 support" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={<>Let&rsquo;s build something big <span className="accent">together.</span></>}
        subtitle="Every great partnership starts with a simple conversation. Tell us where your business is today and where you want it to be, and we’ll show you how we can help you get there."
      />

      <section className="pt-16">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INFO.map((i, idx) => (
            <Reveal key={i.label} delay={(idx % 4) * 0.07}>
              <div className="card h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <i.icon className="h-5 w-5" />
                </span>
                <p className="mt-6 text-sm text-ink-muted">{i.label}</p>
                <p className="mt-1 font-semibold">{i.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
