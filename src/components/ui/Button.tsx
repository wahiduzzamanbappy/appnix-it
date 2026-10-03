"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

type Variant = "primary" | "outline" | "outlineDark" | "text";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: "md" | "lg";
  arrow?: boolean;
  /** Analytics event label, sent as `cta_click` */
  track?: string;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 min-h-[44px] disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98]";
const sizes = { md: "px-6 py-3 text-[0.95rem]", lg: "px-8 py-4 text-base" };
const variants: Record<Variant, string> = {
  primary: "bg-gradient-to-r from-orange to-gold text-ink hover:shadow-[0_0_32px_-4px_rgba(255,122,0,0.65)]",
  outline: "border border-white/25 text-white hover:border-orange hover:text-gold",
  outlineDark: "border border-ink/25 text-ink hover:border-ember hover:text-ember",
  text: "px-0 py-0 min-h-0 text-orange hover:text-gold",
};

export function Button({ children, href, variant = "primary", size = "md", arrow = true, track, className, type = "button", disabled, loading, onClick }: ButtonProps) {
  const cls = cn(base, variant === "text" ? "" : sizes[size], variants[variant], className);
  const handle = () => {
    if (track) trackEvent("cta_click", { label: track });
    onClick?.();
  };
  const content = (
    <>
      <span>{loading ? "Sending…" : children}</span>
      {arrow && !loading && <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );
  if (href) return <Link href={href} className={cls} onClick={handle}>{content}</Link>;
  return <button type={type} className={cls} disabled={disabled || loading} onClick={handle} aria-busy={loading || undefined}>{content}</button>;
}
