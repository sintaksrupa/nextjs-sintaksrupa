"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { servicesNavLinks } from "@/data/navigations";
import { Button } from "../ui/button";

export function ServicesNav() {
  const pathname = usePathname();

  return (
    <section className="flex items-center justify-center">
      <nav className="flex w-full md:max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-3 md:mx-5">
        <ul className="flex gap-2 md:gap-4">
          {servicesNavLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Button
                  variant={isActive ? "default" : "outline"}
                  className="rounded-none p-5"
                  asChild
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
