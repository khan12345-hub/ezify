import {
  Code2,
  ShoppingCart,
  TrendingUp,
  Megaphone,
  Calculator,
  Users,
  BadgeCheck,
  Headset,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export type Tone = "blue" | "peach" | "mint" | "lilac" | "butter";

export type Service = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  desc: string;
  points: string[];
  tone: Tone;
  /** Featured services show a photo; the rest show a small UI visual. */
  image?: string;
  visual?: "pipeline" | "campaign" | "ledger";
};

export const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Website Development",
    tagline: "Fast, modern sites that win customers.",
    desc: "Custom websites and web apps designed around your brand, built to load fast, rank well and turn visitors into leads.",
    points: ["Business websites", "Landing pages", "Web apps & portals", "Responsive design", "SEO-ready builds", "Hosting & care plans"],
    image: "/images/web-dev.jpg",
    tone: "blue",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    tagline: "Your online store, launched and looked after.",
    desc: "Launch and grow your online store with end-to-end support — from setup and design to products, payments and day-to-day management.",
    points: ["Store setup & design", "Product listings", "Payments & checkout", "Order management", "Marketplace selling", "Ongoing store support"],
    image: "/images/ecommerce.jpg",
    tone: "peach",
  },
  {
    icon: TrendingUp,
    title: "Sales Operations",
    tagline: "A pipeline that never drops a lead.",
    desc: "We set up and run the systems behind your sales team, so every lead is tracked and every deal is followed up.",
    points: ["CRM setup & management", "Lead tracking", "Sales reporting"],
    visual: "pipeline",
    tone: "mint",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    tagline: "Get seen by the right people.",
    desc: "Campaigns that bring in customers — planned, created and measured by one team.",
    points: ["Social media", "SEO & paid ads", "Content & email"],
    visual: "campaign",
    tone: "lilac",
  },
  {
    icon: Calculator,
    title: "Accounting",
    tagline: "Clean books, clear numbers.",
    desc: "Day-to-day bookkeeping and reporting, so you always know where your business stands.",
    points: ["Bookkeeping", "Invoicing & payables", "Monthly reports"],
    visual: "ledger",
    tone: "butter",
  },
];

/** Background + accent classes for each service tone. */
export const TONES: Record<Tone, { bg: string; chip: string; text: string; bar: string }> = {
  blue: { bg: "bg-tint-blue", chip: "bg-white text-[#2440d8]", text: "text-[#2440d8]", bar: "bg-[#2440d8]" },
  peach: { bg: "bg-tint-peach", chip: "bg-white text-[#b4511f]", text: "text-[#b4511f]", bar: "bg-[#b4511f]" },
  mint: { bg: "bg-tint-mint", chip: "bg-white text-[#16794f]", text: "text-[#16794f]", bar: "bg-[#16794f]" },
  lilac: { bg: "bg-tint-lilac", chip: "bg-white text-[#6a3fd4]", text: "text-[#6a3fd4]", bar: "bg-[#6a3fd4]" },
  butter: { bg: "bg-tint-butter", chip: "bg-white text-[#8a6100]", text: "text-[#8a6100]", bar: "bg-[#8a6100]" },
};

export type Brand = {
  name: string;
  category: string;
  image: string;
};

export const BRANDS: Brand[] = [
  { name: "Beddora", category: "Home Essentials", image: "/images/brand-beddora.jpg" },
  { name: "EzCommerce", category: "Online Store", image: "/images/brand-ecommerce.jpg" },
  { name: "EzClean", category: "Cleaning Products", image: "/images/brand-clean.jpg" },
  { name: "EzSecurity", category: "Security Solutions", image: "/images/brand-security.jpg" },
];

export const FEATURES: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Users, title: "One Team, Many Skills", desc: "Web, commerce, sales, marketing and accounts under one roof — no juggling agencies." },
  { icon: BadgeCheck, title: "Quality & Reliability", desc: "Consistent standards and dependable delivery, every single time." },
  { icon: Headset, title: "Dedicated Support", desc: "One account manager who knows your business and stays with you." },
  { icon: Rocket, title: "Built to Grow", desc: "Start with one service and add more as your business grows." },
];

export const STEPS: { title: string; desc: string }[] = [
  { title: "Tell us what you need", desc: "Share your goals in a quick call or message — no jargon required." },
  { title: "Get a clear proposal", desc: "We scope the work and send a fixed plan with timeline and price." },
  { title: "We get to work", desc: "The right specialists deliver — then stay on to support and improve." },
];

export const STATS: { value: string; label: string }[] = [
  { value: "5", label: "Core services" },
  { value: "1", label: "Point of contact" },
  { value: "24/7", label: "Support & assistance" },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Can I hire you for just one service?",
    a: "Of course. Many clients start with one service — a website, marketing or bookkeeping — and add more later.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the scope. Your proposal will include a clear timeline before any work starts, and ongoing services like accounting or marketing begin as soon as you're onboarded.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes. We work with individuals, start-ups and established companies, and shape each project around your budget and goals.",
  },
  {
    q: "Can you take over my existing website or store?",
    a: "Absolutely. We can redesign, migrate or simply maintain what you already have.",
  },
];

export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [
  {
    quote:
      "Ezify has been a great partner for our business. Their team is professional, responsive and always delivers on time. Highly recommended.",
    name: "Sarah Khan",
    role: "Business Owner",
  },
  {
    quote:
      "From our website to our marketing and bookkeeping, having one reliable partner has saved us time and money.",
    name: "David Miller",
    role: "Operations Manager",
  },
];

/* ── Team ─────────────────────────────────────────────────────
   Placeholder people — replace names, roles and bios with the real team.
   Add `photo: "/images/team/<file>.jpg"` to show a portrait instead of initials. */

export type TeamMember = {
  name: string;
  role: string;
  /** A service title from SERVICES; leaders use "Leadership". */
  dept: string;
  bio?: string;
  photo?: string;
  linkedin?: string;
};

export const LEADERS: TeamMember[] = [
  {
    name: "Ayesha Rahman",
    role: "Founder & CEO",
    dept: "Leadership",
    bio: "Started Ezify to give growing businesses one team they can rely on for everything.",
  },
  {
    name: "Omar Siddiqui",
    role: "Head of Technology",
    dept: "Leadership",
    bio: "Leads our web and e-commerce teams, from first wireframe to launch day.",
  },
  {
    name: "Hannah Clarke",
    role: "Head of Operations",
    dept: "Leadership",
    bio: "Keeps sales, marketing and accounting running smoothly for every client.",
  },
];

export const TEAM: TeamMember[] = [
  { name: "Daniel Okafor", role: "Lead Developer", dept: "Website Development" },
  { name: "Sara Malik", role: "UI/UX Designer", dept: "Website Development" },
  { name: "Liam Turner", role: "E-Commerce Manager", dept: "E-Commerce Solutions" },
  { name: "Fatima Noor", role: "Store Specialist", dept: "E-Commerce Solutions" },
  { name: "Ethan Brooks", role: "Sales Ops Lead", dept: "Sales Operations" },
  { name: "Zara Hussain", role: "CRM Specialist", dept: "Sales Operations" },
  { name: "Maya Patel", role: "Marketing Lead", dept: "Marketing" },
  { name: "Noah Williams", role: "Content & Social", dept: "Marketing" },
  { name: "Imran Qureshi", role: "Senior Accountant", dept: "Accounting" },
  { name: "Chloe Evans", role: "Bookkeeper", dept: "Accounting" },
];

export const VALUES: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: BadgeCheck, title: "Own the outcome", desc: "We measure ourselves by your results, not by hours spent." },
  { icon: Headset, title: "Say it simply", desc: "Clear updates, plain language and no surprises on the invoice." },
  { icon: Rocket, title: "Keep improving", desc: "Every project teaches us something we bring to the next one." },
  { icon: Users, title: "Win together", desc: "Five teams, one goal — your business growing." },
];

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/businesses", label: "Services" },
  { href: "/businesses#brands", label: "Brands" },
  { href: "/team", label: "Team" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const CONTACT = {
  phone: "+1 (416) 555 0100",
  email: "hello@ezify.com",
  address: "Toronto, Canada · London, UK",
};
