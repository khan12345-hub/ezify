import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { ScrollProgress } from "@/components/motion/scroll-progress";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ezify — One Team for Your Whole Business",
  description:
    "Ezify provides website development, e-commerce, sales operations, marketing and accounting services for businesses and individuals.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${serif.variable}`}>
      {/* browser extensions (e.g. ColorZilla) inject attributes on <body>; don't treat that as a hydration error */}
      <body className="min-h-screen" suppressHydrationWarning>
        <SmoothScroll />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
