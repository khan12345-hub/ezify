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
        eyebrow="Contact"
        title={<>Let&apos;s <span className="text-grad">talk.</span></>}
        subtitle="Hiring, looking for a service, or exploring a partnership? Send us a message and the right team will reach out."
      />

      <section className="section section-dark">
        <div className="glow-tr" />
        <div className="container relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INFO.map((i, idx) => (
            <Reveal key={i.label} delay={(idx % 4) * 0.07}>
              <div className="card-dark h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue to-teal text-white">
                  <i.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs uppercase tracking-wider text-paper-muted">{i.label}</p>
                <p className="mt-1 font-semibold text-paper">{i.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
