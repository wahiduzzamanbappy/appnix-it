type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

/** Safe no-op when analytics is not configured or blocked. */
export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  try { window.gtag("event", name, params); } catch { /* never break the UI for analytics */ }
}
