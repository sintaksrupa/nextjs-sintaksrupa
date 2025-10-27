import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DesktopMainNav } from "@/components/navigations/DesktopMainNav";
import { MobileMainNav } from "@/components/navigations/MobileMainNav";

export function Header() {
  return (
    <header className="flex w-full fixed px-3 md:px-5 backdrop-blur supports-backdrop-filter:bg-background/25 text-primary z-50">
      <div className="w-full md:max-w-4xl lg:max-w-5xl xl:max-w-7xl flex items-center justify-between mx-auto py-3 md:py-5 border-b border-black/10">
        {/* DESKTOP MAIN NAV */}
        <DesktopMainNav />

        {/* LOGO */}
        <Link href="/">
          <Image
            src="https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/primary-black-logo-type-sintaks-rupa-png.png"
            alt="Sintaks Rupa Primary Black Logo Type PNG"
            width={250}
            height={35}
            priority
          />
        </Link>

        {/* MOBILE MAIN NAV */}
        <MobileMainNav />

        {/* ORDER SEKARANG BUTTON */}
        <Button className="hidden md:flex font-serif rounded-none p-5" asChild>
          <Link href="https://wa.me/+6287889198491" target="_blank">
            Order Sekarang <MoveRight />
          </Link>
        </Button>
      </div>
    </header>
  );
}
