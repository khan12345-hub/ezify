"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { CONTACT } from "@/lib/content";

/**
 * Sticky bottom bar for phones/tablets (hidden at lg, where the header shows "Get a quote").
 * Appears after the visitor scrolls past the first screen; never shown on /contact.
 */
export function MobileCTA() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "120%" }}
          animate={{ y: 0 }}
          exit={{ y: "120%" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-bg/90 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden"
        >
          <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5">
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="btn btn-outline h-11 gap-1.5 whitespace-nowrap px-3 py-0 text-sm"
            >
              <Phone className="h-4 w-4 shrink-0" />
              Call us
            </a>
            <Link href="/contact" className="btn btn-primary h-11 gap-1.5 whitespace-nowrap px-3 py-0 text-sm">
              Get a quote
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
