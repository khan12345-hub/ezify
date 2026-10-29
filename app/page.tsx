import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Brands } from "@/components/brands";
import { About } from "@/components/about";
import { Why } from "@/components/why";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";
import { ContactCTA } from "@/components/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Brands />
      <About />
      <Why />
      <Projects />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
