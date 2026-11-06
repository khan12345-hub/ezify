import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import logo from "@/public/images/logo.png";

/** Ezify logo (public/images/logo.png). Set the height via className, e.g. "h-10"; width follows the image ratio. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="Ezify home" className={cn("inline-flex h-10 items-center", className)}>
      <Image src={logo} alt="Ezify SMC-PVT. Limited" priority className="h-full w-auto" />
    </Link>
  );
}
