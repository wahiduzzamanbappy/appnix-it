import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/home/ServiceCard";
import { services } from "@/data/services";

export function ServicesGrid({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section id="solutions" className="bg-ink py-24 lg:py-32">
      <Container>
        {withHeading && (
          <Reveal>
            <SectionHeading eyebrow="Solutions" title="Solutions built for the way business moves." description="Twelve disciplines, one team. Start with the problem and we'll shape the right combination." />
          </Reveal>
        )}
        <ul className={`grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${withHeading ? "mt-16" : ""}`}>
          {services.map((s) => <li key={s.slug} className="bg-ink"><ServiceCard service={s} /></li>)}
        </ul>
      </Container>
    </section>
  );
}
