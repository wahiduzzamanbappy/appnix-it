"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

/** Subtle sticky contact bar on small screens. Appears after the hero and hides on contact pages. */
export function MobileCTA() {
  const pathname = usePathname();
  const scrolled = useScrolled(700);
  const hidden = pathname === "/contact" || pathname === "/thank-you";
  if (hidden) return null;
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-ink/90 px-5 pt-3 backdrop-blur-lg transition-transform duration-300 sm:hidden",
        scrolled ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      inert={!scrolled}
    >
      <Button href="/contact" className="w-full" track="mobile_sticky_cta">Start a conversation</Button>
    </div>
  );
}
