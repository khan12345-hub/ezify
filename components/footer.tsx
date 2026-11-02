import Link from "next/link";
import { Logo } from "./logo";
import { Wordmark } from "./motion/wordmark";
import { SERVICES, CONTACT, NAV } from "@/lib/content";

const SOCIALS: { label: string; path: string }[] = [
  { label: "Facebook", path: "M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8.2V14h2.3v7h3z" },
  { label: "X", path: "M17.5 3h2.7l-5.9 6.7L21 21h-5.4l-4.2-5.5L6.5 21H3.8l6.3-7.2L3 3h5.5l3.8 5.1L17.5 3zm-1 16h1.5L8 4.5H6.4L16.5 19z" },
  { label: "Instagram", path: "M12 8.2A3.8 3.8 0 1 0 12 15.8 3.8 3.8 0 0 0 12 8.2zm0 6.3A2.5 2.5 0 1 1 12 9.5a2.5 2.5 0 0 1 0 5zM16 7A.9.9 0 1 0 16 8.8.9.9 0 0 0 16 7zM19.5 8.3c0-1.3-.3-2.5-1.2-3.4S16.3 3.5 15 3.5c-1.3-.1-5.2-.1-6.5 0-1.3 0-2.5.3-3.4 1.2S3.6 7 3.5 8.3c-.1 1.3-.1 5.2 0 6.5 0 1.3.3 2.5 1.2 3.4s2.1 1.2 3.4 1.2c1.3.1 5.2.1 6.5 0 1.3 0 2.5-.3 3.4-1.2s1.2-2.1 1.2-3.4c.1-1.3.1-5.2 0-6.5zm-1.6 7.9c-.3.7-.8 1.2-1.5 1.5-1 .4-3.5.3-4.7.3s-3.7.1-4.7-.3c-.7-.3-1.2-.8-1.5-1.5-.4-1-.3-3.5-.3-4.7s-.1-3.7.3-4.7c.3-.7.8-1.2 1.5-1.5 1-.4 3.5-.3 4.7-.3s3.7-.1 4.7.3c.7.3 1.2.8 1.5 1.5.4 1 .3 3.5.3 4.7s.1 3.7-.3 4.7z" },
  { label: "YouTube", path: "M21.6 7.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16 4 12 4 12 4s-4 0-6.8.3c-.4 0-1.2.1-2 .9-.6.6-.8 2-.8 2S2.2 8.8 2.2 10.5v1.8c0 1.6.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.8.8 2.3.9 1.6.1 6.5.2 6.5.2s4 0 6.8-.3c.4 0 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.8c0-1.6-.2-3.3-.2-3.3zM10 14.6V9.4l4.2 2.6-4.2 2.6z" },
];

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line bg-surface">
      <div className="container grid gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            Web, e-commerce, sales, marketing and accounting — delivered by one
            trusted team.
          </p>
          <div className="mt-6 flex gap-2">
            {SOCIALS.map((s) => (
              <a key={s.label} href="#" aria-label={s.label} className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-muted transition-colors hover:border-ink hover:text-ink">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Company" className="md:col-span-2">
          {NAV.map((l) => (
            <li key={l.label}><Link href={l.href} className="hover:text-ink">{l.label}</Link></li>
          ))}
        </FooterCol>

        <FooterCol title="Services" className="md:col-span-2">
          {SERVICES.map((s) => (
            <li key={s.title}><Link href="/businesses" className="hover:text-ink">{s.title}</Link></li>
          ))}
        </FooterCol>

        <FooterCol title="Contact" className="md:col-span-3">
          <li>{CONTACT.phone}</li>
          <li>{CONTACT.email}</li>
          <li>{CONTACT.address}</li>
        </FooterCol>
      </div>

      <div className="container">
        <Wordmark text="Ezify" />
      </div>

      <div className="border-t border-line">
        <div className="container flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink-muted sm:flex-row">
          <p>© 2026 Ezify. All rights reserved.</p>
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
