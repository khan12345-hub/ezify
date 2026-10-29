import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";

export function ContactCTA() {
  return (
    <section id="contact" className="section bg-navy-900">
      <div className="container">
        <div className="relative overflow-hidden rounded-[32px] p-8 md:p-14" style={{ background: "linear-gradient(120deg, #0d9aa0 0%, #1763d8 55%, #2f7cf6 100%)" }}>
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-cyan/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="kicker text-white/80">Get In Touch</p>
              <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,2.9rem)] text-white">
                Let&apos;s Build Something<br />Great Together
              </h2>
              <p className="mt-5 max-w-md text-white/85">
                Have a project in mind or need expert advice? Our team is here to
                help you find the right solution.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
