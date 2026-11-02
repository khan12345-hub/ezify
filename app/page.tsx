import { Hero } from "@/components/hero";
import { Statement } from "@/components/statement";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Why } from "@/components/why";
import { Brands } from "@/components/brands";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { ContactCTA } from "@/components/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Services />
      <Process />
      <Why />
      <Testimonials />
      <Brands />
      <Faq />
      <ContactCTA />
    </>
  );
}
