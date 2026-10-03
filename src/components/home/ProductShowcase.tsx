"use client";

import { useRef, useState } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProductMockup } from "@/components/visuals/ProductMockup";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const product = products[active];

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const next = e.key === "ArrowDown" || e.key === "ArrowRight" ? (i + 1) % products.length
      : e.key === "ArrowUp" || e.key === "ArrowLeft" ? (i - 1 + products.length) % products.length
      : e.key === "Home" ? 0 : e.key === "End" ? products.length - 1 : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section className="bg-surface py-24 lg:py-32">
      <Container>
        <Reveal><SectionHeading eyebrow="Products" title="Products designed to solve real business problems." /></Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div role="tablist" aria-label="Products" aria-orientation="vertical"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:col-span-4 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0">
            {products.map((p, i) => {
              const on = i === active;
              return (
                <button key={p.slug} ref={(el) => { tabs.current[i] = el; }} role="tab" id={`ptab-${p.slug}`}
                  aria-selected={on} aria-controls="ptabpanel" tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)} onKeyDown={(e) => onKeyDown(e, i)}
                  className={cn(
                    "group relative shrink-0 rounded-full border px-5 py-3 text-left font-display text-lg transition-colors lg:rounded-none lg:border-0 lg:border-b lg:border-white/10 lg:px-0 lg:py-5 lg:text-3xl xl:text-4xl",
                    on ? "border-orange text-white" : "border-white/15 text-white/45 hover:text-white",
                  )}>
                  <span className="relative">{p.name}</span>
                  <span aria-hidden="true" className={cn("absolute left-0 top-0 hidden h-px bg-gradient-to-r from-orange to-gold transition-all duration-500 lg:block", on ? "w-full" : "w-0")} />
                </button>
              );
            })}
          </div>

          <div id="ptabpanel" role="tabpanel" aria-labelledby={`ptab-${product.slug}`} tabIndex={0} className="lg:col-span-8">
            <ProductMockup kind={product.mockup} label={product.name} />
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm text-gold">{product.category}</p>
                <p className="mt-3 text-lg leading-relaxed text-white/80">{product.summary}</p>
                <div className="mt-6"><Button href={`/products/${product.slug}`} track={`home_product_${product.slug}`}>Explore Product</Button></div>
              </div>
              <ul className="space-y-3">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-white/80"><Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-orange" />{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
