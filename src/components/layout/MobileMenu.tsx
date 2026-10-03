"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { mainNav } from "@/data/navigation";
import { useScrollLock } from "@/hooks/useScrollLock";
import { cn } from "@/lib/utils";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  useScrollLock(open);

  // Escape to close, focus first link on open, simple focus trap
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusables = () => Array.from(panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const els = focusables();
        if (!els.length) return;
        const first = els[0], last = els[els.length - 1];
        const header = document.querySelector<HTMLElement>('button[aria-controls="mobile-menu"]');
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); header?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); header?.focus(); }
        else if (document.activeElement === header && !e.shiftKey) { e.preventDefault(); first.focus(); }
        else if (document.activeElement === header && e.shiftKey) { e.preventDefault(); last.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-40 overflow-y-auto bg-ink xl:hidden"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-orange/20 blur-[120px]" />
          <nav aria-label="Mobile" className="relative mx-auto flex min-h-full max-w-xl flex-col justify-between px-6 pb-10 pt-28">
            <ul>
              {mainNav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduce ? 0 : 0.05 + i * 0.04, duration: 0.35 }}
                  className="border-b border-white/10"
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={cn("flex min-h-[56px] items-center font-display text-3xl font-medium tracking-tight", pathname === item.href ? "text-gold" : "text-white")}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/contact" size="lg" className="w-full" track="mobile_menu_lets_talk">Let&apos;s Talk</Button>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
