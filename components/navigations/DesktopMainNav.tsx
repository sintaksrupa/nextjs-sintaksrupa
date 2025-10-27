"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MainNavLinks } from "@/data/navigations";

export function DesktopMainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex justify-center relative z-50">
      <ul className="flex gap-5 lg:gap-7 font-serif">
        {MainNavLinks.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === item.href
              : pathname.startsWith(item.href);

          return (
            <li key={item.href} aria-current={isActive ? "page" : undefined}>
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
  );
}
