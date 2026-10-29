import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Logo } from "./logo";
import { SERVICES, CONTACT } from "@/lib/content";

const SOCIALS: { label: string; path: string }[] = [
  { label: "Facebook", path: "M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8.2V14h2.3v7h3z" },
  { label: "X", path: "M17.5 3h2.7l-5.9 6.7L21 21h-5.4l-4.2-5.5L6.5 21H3.8l6.3-7.2L3 3h5.5l3.8 5.1L17.5 3zm-1 16h1.5L8 4.5H6.4L16.5 19z" },
  { label: "Instagram", path: "M12 8.2A3.8 3.8 0 1 0 12 15.8 3.8 3.8 0 0 0 12 8.2zm0 6.3A2.5 2.5 0 1 1 12 9.5a2.5 2.5 0 0 1 0 5zM16 7A.9.9 0 1 0 16 8.8.9.9 0 0 0 16 7zM19.5 8.3c0-1.3-.3-2.5-1.2-3.4S16.3 3.5 15 3.5c-1.3-.1-5.2-.1-6.5 0-1.3 0-2.5.3-3.4 1.2S3.6 7 3.5 8.3c-.1 1.3-.1 5.2 0 6.5 0 1.3.3 2.5 1.2 3.4s2.1 1.2 3.4 1.2c1.3.1 5.2.1 6.5 0 1.3 0 2.5-.3 3.4-1.2s1.2-2.1 1.2-3.4c.1-1.3.1-5.2 0-6.5zm-1.6 7.9c-.3.7-.8 1.2-1.5 1.5-1 .4-3.5.3-4.7.3s-3.7.1-4.7-.3c-.7-.3-1.2-.8-1.5-1.5-.4-1-.3-3.5-.3-4.7s-.1-3.7.3-4.7c.3-.7.8-1.2 1.5-1.5 1-.4 3.5-.3 4.7-.3s3.7-.1 4.7.3c.7.3 1.2.8 1.5 1.5.4 1 .3 3.5.3 4.7s.1 3.7-.3 4.7z" },
  { label: "YouTube", path: "M21.6 7.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16 4 12 4 12 4s-4 0-6.8.3c-.4 0-1.2.1-2 .9-.6.6-.8 2-.8 2S2.2 8.8 2.2 10.5v1.8c0 1.6.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.8.8 2.3.9 1.6.1 6.5.2 6.5.2s4 0 6.8-.3c.4 0 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.8c0-1.6-.2-3.3-.2-3.3zM10 14.6V9.4l4.2 2.6-4.2 2.6z" },
];

const QUICK = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/businesses", label: "Services" },
  { href: "/businesses#brands", label: "Products & Brands" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-paper">
      <div className="container grid gap-10 border-t border-[color:var(--line-dark)] py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper-muted">
            Innovative solutions for a smarter, safer and more connected future.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map((s) => (
              <a key={s.label} href="#" aria-label={s.label} className="grid h-9 w-9 place-items-center rounded-lg border border-[color:var(--line-dark)] text-paper/70 transition-colors hover:border-blue-bright hover:text-paper">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-sm font-bold text-paper">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-paper-muted">
            {QUICK.map((l) => (
              <li key={l.label}><Link href={l.href} className="hover:text-paper">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-sm font-bold text-paper">Our Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-paper-muted">
            {SERVICES.map((s) => (
              <li key={s.title}><Link href="/businesses" className="hover:text-paper">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-sm font-bold text-paper">Contact Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-paper-muted">
            <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-blue-bright" /> {CONTACT.phone}</li>
            <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-blue-bright" /> {CONTACT.email}</li>
            <li className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-blue-bright" /> {CONTACT.address}</li>
          </ul>
          <form className="mt-5">
            <p className="text-xs text-paper-muted">Subscribe to our newsletter</p>
            <div className="mt-2 flex overflow-hidden rounded-full border border-[color:var(--line-dark)] bg-white/5">
              <input placeholder="Your email address" className="w-full bg-transparent px-4 py-2.5 text-sm text-paper outline-none placeholder:text-paper-muted" />
              <button type="submit" aria-label="Subscribe" className="grid w-12 place-items-center bg-gradient-to-br from-blue to-teal text-white">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-[color:var(--line-dark)]">
        <div className="container flex flex-col items-center justify-between gap-2 py-5 text-xs text-paper-muted sm:flex-row">
          <p>© 2025 Ezify. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-paper">Privacy Policy</Link>
            <Link href="#" className="hover:text-paper">Terms &amp; Conditions</Link>
            <Link href="#" className="hover:text-paper">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
