"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/** Fires `insight_read` once when the reader passes ~75% of the page. */
export function ReadTracker({ slug }: { slug: string }) {
  useEffect(() => {
    let sent = false;
    const onScroll = () => {
      const doc = document.documentElement;
      const progress = (window.scrollY + window.innerHeight) / doc.scrollHeight;
      if (!sent && progress > 0.75) { sent = true; trackEvent("insight_read", { slug }); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);
  return null;
}
