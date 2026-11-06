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
  Workflow,
  Zap,
  ShieldCheck,
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
  visual?: "pipeline" | "campaign" | "ledger" | "automation";
  /** Button label on the home page card (defaults to "Start a project"). */
  cta?: string;
};

/**
 * The 7 departments shown on the home page (stacking cards + hero ticker).
 * Kept separate from SERVICES, which the team page, footer and contact form still use.
 */
export const HOME_SERVICES: Service[] = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    tagline: "Get found by the people ready to buy.",
    desc: "Campaigns that bring in real customers, not just clicks. We plan, create and run your marketing, then show you exactly what every dollar brought back.",
    points: ["SEO & local search", "Google & Meta ads", "Social media management", "Content & copywriting", "Email marketing", "Monthly performance reports"],
    visual: "campaign",
    tone: "lilac",
    cta: "Grow my reach",
  },
  {
    icon: TrendingUp,
    title: "Sales & Business Development",
    tagline: "More leads. More bids. More wins.",
    desc: "From the first call to the signed contract, our team finds opportunities, follows up on every lead and puts your best foot forward on every bid.",
    points: ["Lead generation", "Outbound calling (BPO)", "Business development", "RFP & tender bidding", "Proposal writing", "CRM & pipeline management"],
    visual: "pipeline",
    tone: "mint",
    cta: "Boost my sales",
  },
  {
    icon: Workflow,
    title: "Data Automation",
    tagline: "Less manual work. Fewer mistakes.",
    desc: "Stop copying data from one sheet to another. We automate the repetitive tasks that eat up your team’s day, so the work gets done faster and right the first time.",
    points: ["Workflow automation", "Data entry & cleanup", "Custom reports & dashboards", "Spreadsheet systems", "App & tool integrations", "Process mapping"],
    visual: "automation",
    tone: "blue",
    cta: "Automate my work",
  },
  {
    icon: Users,
    title: "HR & Dispatch Operations",
    tagline: "The right people, in the right place, on time.",
    desc: "We handle the people side of your business, from hiring and onboarding to scheduling and dispatching your security teams, so every shift is covered.",
    points: ["Recruitment & onboarding", "HR administration", "Payroll support", "Staff scheduling", "Security guard dispatch", "24/7 shift coverage"],
    image: "/images/security.jpg",
    tone: "lilac",
    cta: "Manage my team",
  },
  {
    icon: ShoppingCart,
    title: "Supply Chain & E-Commerce",
    tagline: "Your store, stocked, listed and selling.",
    desc: "We run your online store across every major marketplace, from product listings to order fulfilment, so your customers get what they ordered, when they expected it.",
    points: ["Amazon, Shopify, Walmart & more", "Product listings & optimization", "Order management", "Inventory tracking", "Supplier coordination", "Customer service"],
    image: "/images/ecommerce.jpg",
    tone: "peach",
    cta: "Grow my store",
  },
  {
    icon: Calculator,
    title: "Accounts & Finance",
    tagline: "Clean books. Clear numbers. No surprises.",
    desc: "Know exactly where your money is going. We keep your books current, your invoices moving and your reports ready, so you can make decisions with confidence.",
    points: ["Bookkeeping", "Invoicing & receivables", "Accounts payable", "Payroll processing", "Financial reporting", "Tax-ready records"],
    visual: "ledger",
    tone: "butter",
    cta: "Sort my books",
  },
  {
    icon: Code2,
    title: "IT Solutions",
    tagline: "Technology that works as hard as you do.",
    desc: "From a new website to keeping your systems running smoothly, our IT team builds, fixes and supports the tech your business depends on.",
    points: ["Website development", "Web apps & portals", "Hosting & maintenance", "IT support & helpdesk", "Software setup", "Security & backups"],
    image: "/images/web-dev.jpg",
    tone: "blue",
    cta: "Start a project",
  },
];

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
  /** Photo for the card; brands without one show a branded placeholder tile. */
  image?: string;
  /** Full URL of the brand's website; omit to make the card non-clickable. */
  url?: string;
};

export const BRANDS: Brand[] = [
  { name: "Beddora", category: "Home Essentials", image: "/images/brand-beddora.jpg", url: "https://beddora.ca" },
  { name: "Star Employment", category: "Industrial Staffing", url: "https://staremployment.ca" },
  { name: "ULS Freight", category: "Freight Shipping", url: "https://ulsfreight.ca" },
  { name: "247 Gard", category: "Site Protection", url: "https://247gard.com" },
  { name: "YTC Healthcare", category: "Healthcare Staffing", url: "https://ytchealthcare.com" },
  { name: "Saldan Homes", category: "Real Estate", url: "https://saldanhomes.com" },
  { name: "Zone Placements", category: "Skilled Trades Placement", url: "https://zoneplacements.ca" },
  { name: "Cleaning 365 Services", category: "Commercial Cleaning", image: "/images/cleaning.jpg", url: "https://cleaning365services.com" },
  { name: "E North Logistics", category: "Supply Chain Logistics", url: "https://enorthlogistics.com" },
  { name: "Next Employment", category: "Career Placement", url: "https://nextemployment.ca" },
  { name: "Northern Linens", category: "Hospitality Linens", url: "https://northernlinens.com" },
  { name: "G Force Security", category: "Event & Patrol Security", url: "https://gforcesecurity.ca" },
  { name: "Univerca Staffing", category: "Office Recruitment", url: "https://univerca.ca" },
  { name: "RSD Investment Group", category: "Investments" },
  { name: "Easy Workforce", category: "Temporary Workforce", url: "https://easyworkforce.ca" },
  { name: "Jobs For U", category: "Job Matching", url: "https://jobsforu.ca" },
];

export const FEATURES: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: TrendingUp, title: "Not Enough Customers?", desc: "Our marketing and sales teams bring you qualified leads, win you more bids and turn interest into real revenue." },
  { icon: Zap, title: "Drowning in Manual Work?", desc: "Our automation team takes over the repetitive tasks, so your people spend time on work that actually grows the business." },
  { icon: Users, title: "Short on Hands?", desc: "From hiring to dispatching shifts to running your online store, our HR, operations and e-commerce teams keep everything moving." },
  { icon: ShieldCheck, title: "Losing Track of Money or Tech?", desc: "Our finance and IT teams keep your books clean, your systems running and your business ready for its next big step." },
];

export const STEPS: { title: string; desc: string }[] = [
  { title: "Share what’s on your mind", desc: "Call us, message us, or just drop a line. Whatever’s slowing you down, we’re listening." },
  { title: "See your plan in black and white", desc: "Within days, you’ll know who’s working on it, when it’s done and what you’ll pay." },
  { title: "Sit back and see the difference", desc: "Your team gets to work, keeps you in the loop and keeps pushing your business forward." },
];

export const STATS: { value: string; label: string }[] = [
  { value: "7", label: "Expert departments" },
  { value: "17", label: "Businesses powered" },
  { value: "24/7", label: "Support & assistance" },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Is it necessary to engage all seven departments?",
    a: "No. Most clients begin with the department that addresses their most immediate need. Additional services can be integrated at any stage as your business grows.",
  },
  {
    q: "How soon can your team begin work?",
    a: "Onboarding typically begins within one week of finalizing the project scope. Time-sensitive requirements can be prioritized and started sooner.",
  },
  {
    q: "Where is Ezify located, and which markets do you serve?",
    a: "Ezify SMC (Pvt.) Ltd. is headquartered in Lahore, Pakistan, and serves businesses across Canada and the United States, operating in alignment with North American business hours.",
  },
  {
    q: "How do you measure and report results?",
    a: "Clients receive regular, transparent reports outlining completed work and key performance outcomes, including leads generated, sales growth, cost savings and efficiency gains.",
  },
];

export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [
  {
    quote:
      "We were spending hours every week chasing leads and updating spreadsheets. Ezify took all of that off our hands, and our sales have never been this steady.",
    name: "Michael Thompson",
    role: "Owner, Staffing Agency, Ontario",
  },
  {
    quote:
      "Our shifts used to fall through the cracks at night. Now every guard is dispatched on time, and I actually sleep through the night.",
    name: "Jennifer Campbell",
    role: "Operations Manager, Security Firm, Toronto",
  },
  {
    quote:
      "From our online store to our monthly books, it feels like we hired an entire team overnight. We’ve grown faster in one year than the three before.",
    name: "Ryan MacDonald",
    role: "Founder, E-Commerce Brand, Vancouver",
  },
  {
    quote:
      "We finally have one place to call for marketing, IT and accounts. Everything just works, and we know exactly what we’re paying for.",
    name: "Amanda Tremblay",
    role: "Director, Logistics Company, Mississauga",
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
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const CONTACT = {
  phone: "+92 329 5598556",
  email: "hr@ezify.pk",
  careersEmail: "careers@ezify.pk",
  address: "216/7, B Block, Broadway Commercial, DHA Phase 8, Lahore, Pakistan",
};
