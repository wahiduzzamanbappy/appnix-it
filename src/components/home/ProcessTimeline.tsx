"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/company";

/** Horizontal on desktop, vertical on mobile. The progress line draws once when scrolled into view. */
export function ProcessTimeline({ tone = "light", withHeading = true }: { tone?: "light" | "dark"; withHeading?: boolean }) {
  const reduce = useReducedMotion();
  const dark = tone === "dark";
  const draw = (axis: "x" | "y") => reduce
    ? { initial: false as const }
    : { initial: axis === "x" ? { scaleX: 0 } : { scaleY: 0 }, whileInView: axis === "x" ? { scaleX: 1 } : { scaleY: 1 }, viewport: { once: true, margin: "0px 0px -120px 0px" }, transition: { duration: 1.6, ease: "easeInOut" as const } };

  return (
    <section className={dark ? "bg-ink py-24 lg:py-32" : "bg-paper py-24 lg:py-32"}>
      <Container>
        {withHeading && <SectionHeading tone={tone} eyebrow="Process" title="From idea to impact." />}
        <div className={withHeading ? "mt-16 lg:mt-20" : ""}>
          <ol className="relative grid gap-10 pl-8 lg:grid-cols-5 lg:gap-8 lg:pl-0 lg:pt-10">
            {/* track + progress (desktop) */}
            <span aria-hidden="true" className={`absolute left-0 right-0 top-0 hidden h-px lg:block ${dark ? "bg-white/15" : "bg-ink/15"}`} />
            <motion.span aria-hidden="true" {...draw("x")} className="absolute left-0 right-0 top-0 hidden h-px origin-left bg-gradient-to-r from-orange to-gold lg:block" />
            {/* track + progress (mobile) */}
            <span aria-hidden="true" className={`absolute bottom-2 left-[5px] top-2 w-px lg:hidden ${dark ? "bg-white/15" : "bg-ink/15"}`} />
            <motion.span aria-hidden="true" {...draw("y")} className="absolute bottom-2 left-[5px] top-2 w-px origin-top bg-gradient-to-b from-orange to-gold lg:hidden" />

            {processSteps.map(([title, text], i) => (
              <li key={title} className="relative">
                <span aria-hidden="true" className="absolute -left-8 top-1.5 h-[11px] w-[11px] rounded-full bg-orange ring-4 ring-orange/20 lg:-top-[45px] lg:left-0" />
                <p className={`font-display text-sm font-medium ${dark ? "text-gold" : "text-ember"}`}>Step {i + 1}</p>
                <h3 className={`mt-1 font-display text-2xl font-semibold ${dark ? "text-white" : "text-ink"}`}>{title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-muted" : "text-graphite"}`}>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
