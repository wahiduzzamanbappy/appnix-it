import { siteConfig } from "@/config/site";

export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export function absoluteUrl(path = "/"): string {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(iso));
}

/** Placeholder stats and draft articles are visible in development, hidden in production by default. */
export const showDevContent =
  process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_SHOW_DEV_CONTENT === "true";
