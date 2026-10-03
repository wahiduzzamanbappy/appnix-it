"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { mainNav } from "@/data/navigation";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled && !open ? "border-b border-white/10 bg-ink/80 py-2 backdrop-blur-xl" : "border-b border-transparent py-4 lg:py-5",
        )}
      >
        <div className="mx-auto flex w-full max-w-site items-center justify-between px-5 sm:px-8 lg:px-12">
          <Logo priority className={cn("w-auto transition-all duration-300", scrolled ? "h-8" : "h-9")} />

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-[0.92rem] transition-colors hover:text-white",
                      isActive(item.href) ? "text-white" : "text-white/70",
                    )}
                  >
                    {item.label}
                    <span aria-hidden="true" className={cn("absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-orange to-gold transition-transform duration-300 origin-left", isActive(item.href) ? "scale-x-100" : "scale-x-0")} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/contact" track="navbar_lets_talk" arrow={false} className="hidden px-5 py-2.5 sm:inline-flex">Let&apos;s Talk</Button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 xl:hidden"
            >
              <span aria-hidden="true" className="relative block h-3.5 w-5">
                <span className={cn("absolute left-0 h-0.5 w-5 bg-white transition-all duration-300", open ? "top-1.5 rotate-45" : "top-0")} />
                <span className={cn("absolute left-0 top-1.5 h-0.5 w-5 bg-white transition-opacity duration-200", open && "opacity-0")} />
                <span className={cn("absolute left-0 h-0.5 w-5 bg-white transition-all duration-300", open ? "top-1.5 -rotate-45" : "top-3")} />
              </span>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
