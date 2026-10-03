import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TechVisual } from "@/components/visuals/TechVisual";
import { cn } from "@/lib/utils";
import type { VisualKind } from "@/types";

interface Tile { title: string; text: string; href: string; visual: VisualKind; span: string; theme: "ink" | "white" | "orange" | "surface" }

const tiles: Tile[] = [
  { title: "AI & Intelligent Solutions", text: "Assistants, document processing and forecasting embedded in the systems you already run.", href: "/solutions/artificial-intelligence", visual: "neural", span: "lg:col-span-7 lg:row-span-2 min-h-[420px]", theme: "ink" },
  { title: "Enterprise Software", text: "Custom platforms and ERP that follow your processes.", href: "/solutions/software-development", visual: "stack", span: "lg:col-span-5 min-h-[260px]", theme: "white" },
  { title: "Cloud & Infrastructure", text: "Architecture, migration and operations.", href: "/solutions/cloud", visual: "cloud", span: "lg:col-span-5 min-h-[260px]", theme: "surface" },
  { title: "Cybersecurity", text: "Assessment and secure-by-design practice.", href: "/solutions/cybersecurity", visual: "shield", span: "lg:col-span-4 min-h-[300px]", theme: "ink" },
  { title: "Digital Commerce", text: "Storefronts and the back office behind them.", href: "/solutions/ecommerce", visual: "commerce", span: "lg:col-span-4 min-h-[300px]", theme: "orange" },
  { title: "Business Automation", text: "Workflows that run themselves.", href: "/solutions/business-automation", visual: "flow", span: "lg:col-span-4 min-h-[300px]", theme: "white" },
];

const themes = {
  ink: { card: "bg-ink text-white", text: "text-white/70", visual: "text-white", icon: "text-orange" },
  surface: { card: "bg-surface text-white border border-white/5", text: "text-white/70", visual: "text-white", icon: "text-gold" },
  white: { card: "bg-white text-ink border border-ink/10", text: "text-graphite", visual: "text-ink", icon: "text-ember" },
  orange: { card: "bg-gradient-to-br from-orange to-gold text-ink", text: "text-ink/80", visual: "text-ink", icon: "text-ink" },
} as const;

export function FeaturedBento() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <Container>
        <Reveal><SectionHeading tone="light" eyebrow="Featured solutions" title="Where we put technology to work." /></Reveal>
        <ul className="mt-14 grid gap-4 lg:grid-cols-12">
          {tiles.map((t, i) => {
            const th = themes[t.theme];
            return (
              <li key={t.title} className={t.span}>
                <Reveal delay={(i % 3) * 0.08} className={cn("group relative h-full overflow-hidden rounded-xl", th.card)}>
                  <TechVisual kind={t.visual} className={cn("absolute inset-0 h-full w-full opacity-60 transition-transform duration-700 group-hover:scale-105", th.visual)} />
                  {t.theme === "ink" && <div aria-hidden="true" className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-orange/25 blur-[90px]" />}
                  <Link href={t.href} className="relative flex h-full flex-col justify-end p-7 sm:p-9">
                    <ArrowUpRight aria-hidden="true" className={cn("absolute right-7 top-7 h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1", th.icon)} />
                    <h3 className={cn("font-display font-semibold", i === 0 ? "text-3xl sm:text-4xl" : "text-2xl")}>{t.title}</h3>
                    <p className={cn("mt-2 max-w-sm", th.text)}>{t.text}</p>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
