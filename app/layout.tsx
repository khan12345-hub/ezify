import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const script = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ezify — Multi-Service Solutions, One Brand",
  description:
    "Ezify is a multi-service company delivering website development, e-commerce, cleaning and security solutions for businesses and individuals.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${script.variable}`}>
      <body className="min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
