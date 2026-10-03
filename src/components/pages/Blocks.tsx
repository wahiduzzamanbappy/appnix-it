import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { Pair } from "@/types";

/** Numbered/plain pair grid used for capabilities, workflows and features on detail pages. */
export function PairGrid({ title, eyebrow, items, tone = "dark", numbered = false }: { title: string; eyebrow?: string; items: Pair[]; tone?: "dark" | "light"; numbered?: boolean }) {
  const dark = tone === "dark";
  return (
    <section className={cn("py-20 lg:py-28", dark ? "bg-ink" : "bg-paper")}>
      <Container>
        <Reveal><SectionHeading size="md" tone={tone} eyebrow={eyebrow} title={title} /></Reveal>
        <ul className={cn("mt-12 grid gap-px overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-3", dark ? "border-white/10 bg-white/10" : "border-ink/10 bg-ink/10")}>
          {items.map(([t, d], i) => (
            <li key={t} className={cn("p-7", dark ? "bg-ink" : "bg-white")}>
              {numbered && <p className={cn("mb-4 font-display text-sm font-medium", dark ? "text-gold" : "text-ember")}>Step {i + 1}</p>}
              <h3 className={cn("font-display text-xl font-semibold", dark ? "text-white" : "text-ink")}>{t}</h3>
              <p className={cn("mt-2 leading-relaxed", dark ? "text-muted" : "text-graphite")}>{d}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function CheckList({ title, eyebrow, items, tone = "light", aside }: { title: string; eyebrow?: string; items: string[]; tone?: "dark" | "light"; aside?: React.ReactNode }) {
  const dark = tone === "dark";
  return (
    <section className={cn("py-20 lg:py-28", dark ? "bg-surface" : "bg-paper")}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5"><SectionHeading size="md" tone={tone} eyebrow={eyebrow} title={title} />{aside}</div>
          <ul className="lg:col-span-7">
            {items.map((b) => (
              <li key={b} className={cn("flex items-start gap-4 border-t py-5 text-lg", dark ? "border-white/10 text-white/85" : "border-ink/10 text-ink")}>
                <Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-orange" />{b}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function LinkList({ title, items, tone = "light" }: { title: string; items: { label: string; href: string; hint?: string }[]; tone?: "dark" | "light" }) {
  if (!items.length) return null;
  const dark = tone === "dark";
  return (
    <div>
      <h3 className={cn("mb-3 border-b pb-3 font-display text-lg font-semibold", dark ? "border-white/10 text-white" : "border-ink/10 text-ink")}>{title}</h3>
      <ul>
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className={cn("group flex min-h-[48px] items-center justify-between gap-4 py-2.5", dark ? "text-white/80 hover:text-orange" : "text-graphite hover:text-ember")}>
              <span>{i.label}{i.hint && <span className="ml-2 text-sm opacity-70">{i.hint}</span>}</span>
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
