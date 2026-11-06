import Link from "next/link";
import { Logo } from "./logo";
import { Wordmark } from "./motion/wordmark";
import { HOME_SERVICES, CONTACT } from "@/lib/content";

/** Footer-only links (the header menu keeps using NAV). */
const COMPANY_LINKS = [
  { href: "/", label: "Home" },
  { href: "/team", label: "About Us" },
  { href: "/portfolio", label: "Our Portfolio" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

/** Replace each "#" with the real profile URL. */
const SOCIALS: { label: string; href: string; path: string }[] = [
  { label: "LinkedIn", href: "#", path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" },
  { label: "Facebook", href: "#", path: "M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8.2V14h2.3v7h3z" },
  { label: "Instagram", href: "#", path: "M12 8.2A3.8 3.8 0 1 0 12 15.8 3.8 3.8 0 0 0 12 8.2zm0 6.3A2.5 2.5 0 1 1 12 9.5a2.5 2.5 0 0 1 0 5zM16 7A.9.9 0 1 0 16 8.8.9.9 0 0 0 16 7zM19.5 8.3c0-1.3-.3-2.5-1.2-3.4S16.3 3.5 15 3.5c-1.3-.1-5.2-.1-6.5 0-1.3 0-2.5.3-3.4 1.2S3.6 7 3.5 8.3c-.1 1.3-.1 5.2 0 6.5 0 1.3.3 2.5 1.2 3.4s2.1 1.2 3.4 1.2c1.3.1 5.2.1 6.5 0 1.3 0 2.5-.3 3.4-1.2s1.2-2.1 1.2-3.4c.1-1.3.1-5.2 0-6.5zm-1.6 7.9c-.3.7-.8 1.2-1.5 1.5-1 .4-3.5.3-4.7.3s-3.7.1-4.7-.3c-.7-.3-1.2-.8-1.5-1.5-.4-1-.3-3.5-.3-4.7s-.1-3.7.3-4.7c.3-.7.8-1.2 1.5-1.5 1-.4 3.5-.3 4.7-.3s3.7-.1 4.7.3c.7.3 1.2.8 1.5 1.5.4 1 .3 3.5.3 4.7s.1 3.7-.3 4.7z" },
];

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line bg-surface">
      <div className="container grid gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
            From winning new customers to balancing your books, our expert teams
            take care of the work that holds your business back. You focus on the
            big picture, and we make sure everything behind it runs smoothly,
            every single day.
          </p>
          <div className="mt-6 flex gap-2">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-muted transition-colors hover:border-ink hover:text-ink">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Company" className="md:col-span-2">
          {COMPANY_LINKS.map((l) => (
            <li key={l.label}><Link href={l.href} className="hover:text-ink">{l.label}</Link></li>
          ))}
        </FooterCol>

        <FooterCol title="Services" className="md:col-span-2">
          {HOME_SERVICES.map((s) => (
            <li key={s.title}><Link href="/#services" className="hover:text-ink">{s.title}</Link></li>
          ))}
        </FooterCol>

        <FooterCol title="Contact" className="md:col-span-3">
          <li><a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-ink">{CONTACT.phone}</a></li>
          <li><a href={`mailto:${CONTACT.email}`} className="hover:text-ink">{CONTACT.email}</a></li>
          <li><a href={`mailto:${CONTACT.careersEmail}`} className="hover:text-ink">{CONTACT.careersEmail}</a></li>
          <li className="leading-relaxed">{CONTACT.address}</li>
        </FooterCol>
      </div>

      <div className="container">
        <Wordmark text="Ezify" />
      </div>

      <div className="border-t border-line">
        <div className="container flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink-muted sm:flex-row">
          <p>© 2026 Ezify SMC (Pvt.) Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-ink">Privacy Policy</Link>
            <Link href="#" className="hover:text-ink">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <h4 className="font-sans text-sm font-semibold tracking-normal">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">{children}</ul>
    </div>
  );
}
