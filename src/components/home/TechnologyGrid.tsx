import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { technologyCategories } from "@/data/company";

export function TechnologyGrid() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 lg:py-32">
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
      <Container className="relative">
        <Reveal>
          <SectionHeading eyebrow="Technology ecosystem" title="One team across the whole stack."
            description="The disciplines we work in. We choose tools per project, and we only name specific technologies once they are confirmed for the work at hand." />
        </Reveal>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {technologyCategories.map((c) => (
            <li key={c.name} className="group bg-surface p-7 transition-colors hover:bg-ink">
              <Icon name={c.icon} className="h-7 w-7 text-white/60 transition-colors group-hover:text-orange" strokeWidth={1.4} />
              <h3 className="mt-8 font-display text-2xl font-semibold text-white">{c.name}</h3>
              <ul className="mt-4 space-y-1.5 text-sm text-muted">
                {c.areas.map((a) => <li key={a} className="flex items-center gap-2"><span aria-hidden="true" className="h-px w-3 bg-gold/60" />{a}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
