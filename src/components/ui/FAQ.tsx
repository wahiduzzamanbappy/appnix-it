"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/types";

export function FAQ({ items, tone = "light" }: { items: FAQItem[]; tone?: "dark" | "light" }) {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();
  const dark = tone === "dark";
  return (
    <div className={cn("divide-y border-y", dark ? "divide-white/10 border-white/10" : "divide-ink/10 border-ink/10")}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={`${uid}-q${i}`}
                aria-expanded={isOpen}
                aria-controls={`${uid}-a${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn("flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-medium md:text-xl", dark ? "text-white" : "text-ink")}
              >
                {item.question}
                <Plus aria-hidden="true" className={cn("h-5 w-5 shrink-0 text-orange transition-transform duration-300", isOpen && "rotate-45")} />
              </button>
            </h3>
            <div id={`${uid}-a${i}`} role="region" aria-labelledby={`${uid}-q${i}`}
              className={cn("grid transition-[grid-template-rows] duration-300 ease-out", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden">
                <p className={cn("max-w-2xl pb-6 leading-relaxed", dark ? "text-muted" : "text-graphite")}>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
