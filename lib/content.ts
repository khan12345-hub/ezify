import {
  Code2,
  ShoppingCart,
  Sparkles,
  ShieldCheck,
  Layers,
  BadgeCheck,
  Headset,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "Custom websites, e-commerce stores and digital solutions built to perform.",
    image: "/images/web-dev.jpg",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    desc: "Launch and manage your online store with complete, end-to-end support.",
    image: "/images/ecommerce.jpg",
  },
  {
    icon: Sparkles,
    title: "Cleaning Services",
    desc: "Professional cleaning for healthier, safer residential and commercial spaces.",
    image: "/images/cleaning.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Security Services",
    desc: "Reliable, licensed security solutions for your people and your property.",
    image: "/images/security.jpg",
  },
];

export type Brand = {
  name: string;
  category: string;
  image: string;
  initial: string;
};

export const BRANDS: Brand[] = [
  { name: "Beddora", category: "Home Essentials", image: "/images/brand-beddora.jpg", initial: "B" },
  { name: "EzCommerce", category: "Online Store", image: "/images/brand-ecommerce.jpg", initial: "E" },
  { name: "EzClean", category: "Cleaning Products", image: "/images/brand-clean.jpg", initial: "E" },
  { name: "EzSecurity", category: "Security Solutions", image: "/images/brand-security.jpg", initial: "E" },
];

export const FEATURES: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Layers, title: "Multi-Service Expertise", desc: "One trusted partner across technology, commerce and facilities." },
  { icon: BadgeCheck, title: "Quality & Reliability", desc: "Consistent standards and dependable delivery, every single time." },
  { icon: Headset, title: "Dedicated Support", desc: "A team that stays with you before, during and after the project." },
  { icon: SlidersHorizontal, title: "Flexible Solutions", desc: "Services that adapt to your needs and scale as you grow." },
];

export const STATS: { value: string; label: string }[] = [
  { value: "4+", label: "Business Divisions" },
  { value: "100%", label: "Client Satisfaction Focus" },
  { value: "24/7", label: "Support & Assistance" },
];

export const PROJECTS: { title: string; category: string; image: string }[] = [
  { title: "Custom Business Website", category: "Website Development", image: "/images/web-dev.jpg" },
  { title: "Online Store Setup", category: "E-commerce Solutions", image: "/images/ecommerce.jpg" },
  { title: "Commercial Cleaning", category: "Cleaning Services", image: "/images/cleaning.jpg" },
  { title: "Facility Security", category: "Security Services", image: "/images/security.jpg" },
];

export const TESTIMONIALS: { quote: string; name: string; role: string; avatar: string }[] = [
  {
    quote:
      "Ezify has been a great partner for our business. Their team is professional, responsive and always delivers on time. Highly recommended.",
    name: "Sarah Khan",
    role: "Business Owner",
    avatar: "/images/avatar-1.jpg",
  },
  {
    quote:
      "From our website to ongoing facility support, having one reliable partner across services has saved us time and money.",
    name: "David Miller",
    role: "Operations Manager",
    avatar: "/images/avatar-1.jpg",
  },
];

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/businesses", label: "Services" },
  { href: "/businesses#brands", label: "Products & Brands" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const CONTACT = {
  phone: "+1 (416) 555 0100",
  email: "hello@ezify.com",
  address: "Toronto, Canada · London, UK",
};

export const SOCIAL_LABELS = ["Facebook", "Twitter", "Instagram", "YouTube"];
