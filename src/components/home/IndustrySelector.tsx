"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

export function IndustrySelector({ withHeading = true }: { withHeading?: boolean }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const industry = industries[active];
  const relServices = services.filter((s) => industry.services.includes(s.slug));
  const relProducts = products.filter((p) => industry.products.includes(p.slug));

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const n = industries.length;
    const next = e.key === "ArrowDown" || e.key === "ArrowRight" ? (i + 1) % n
      : e.key === "ArrowUp" || e.key === "ArrowLeft" ? (i - 1 + n) % n
      : e.key === "Home" ? 0 : e.key === "End" ? n - 1 : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section className="bg-paper py-24 lg:py-32">
      <Container>
        {withHeading && <Reveal><SectionHeading tone="light" eyebrow="Industries" title="Technology for every stage of growth." /></Reveal>}

        <div className={cn("grid gap-10 lg:grid-cols-12 lg:gap-16", withHeading && "mt-14")}>
          <div role="tablist" aria-label="Industries"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:col-span-4 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
            {industries.map((ind, i) => {
              const on = i === active;
              return (
                <button key={ind.slug} ref={(el) => { tabs.current[i] = el; }} role="tab" id={`itab-${ind.slug}`}
                  aria-selected={on} aria-controls="itabpanel" tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)} onKeyDown={(e) => onKeyDown(e, i)}
                  className={cn(
                    "flex min-h-[48px] shrink-0 items-center gap-3 rounded-full border px-5 py-2.5 text-left font-medium transition-colors lg:rounded-md lg:px-4",
                    on ? "border-ink bg-ink text-white" : "border-ink/15 text-ink hover:border-ink/40",
                  )}>
                  <Icon name={ind.icon} className={cn("h-5 w-5", on ? "text-gold" : "text-ember")} strokeWidth={1.6} />
                  <span className="whitespace-nowrap lg:whitespace-normal">{ind.name}</span>
                </button>
              );
            })}
          </div>

          <div id="itabpanel" role="tabpanel" aria-labelledby={`itab-${industry.slug}`} tabIndex={0} aria-live="polite" className="lg:col-span-8">
            <h3 className="font-display text-display-md font-semibold text-ink">{industry.name}</h3>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite">{industry.description}</p>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div>
                <h4 className="mb-3 border-b border-ink/10 pb-3 font-display text-base font-semibold text-ink">Solutions</h4>
                <ul>{relServices.map((s) => (
                  <li key={s.slug}><Link href={`/solutions/${s.slug}`} className="group flex min-h-[44px] items-center justify-between py-2 text-graphite hover:text-ember">{s.name}<ArrowUpRight aria-hidden="true" className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" /></Link></li>
                ))}</ul>
              </div>
              <div>
                <h4 className="mb-3 border-b border-ink/10 pb-3 font-display text-base font-semibold text-ink">Products</h4>
                {relProducts.length ? (
                  <ul>{relProducts.map((p) => (
                    <li key={p.slug}><Link href={`/products/${p.slug}`} className="group flex min-h-[44px] items-center justify-between py-2 text-graphite hover:text-ember">{p.name}<ArrowUpRight aria-hidden="true" className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" /></Link></li>
                  ))}</ul>
                ) : <p className="py-2 text-graphite">Tailored builds for this sector. <Link href="/contact" className="text-ember underline underline-offset-4">Tell us what you need</Link>.</p>}
              </div>
            </div>

            <div className="mt-10">
              <h4 className="mb-3 border-b border-ink/10 pb-3 font-display text-base font-semibold text-ink">Typical use cases</h4>
              <ul className="grid gap-x-8 sm:grid-cols-3">
                {industry.useCases.map((u) => <li key={u} className="py-2 text-graphite">{u}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
