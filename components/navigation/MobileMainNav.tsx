"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileMainNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex md:hidden font-serif rounded-none p-5">
          <HiOutlineMenuAlt3 />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="hidden">Mobile Navigation</SheetTitle>
        </SheetHeader>

        <nav className="h-full flex md:hidden items-center justify-center">
          <ul className="flex flex-col items-center justify-center gap-10 font-serif text-3xl">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <li
                  key={item.href}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Link href={item.href}>
                    <span
                      className={`uppercase ${
                        isActive
                          ? "text-accent border-b border-accent"
                          : "hover:text-accent hover:border-b hover:border-accent transition-all duration-300 ease-in-out"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
