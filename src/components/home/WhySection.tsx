import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whyAppnix } from "@/data/company";

export function WhySection() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading tone="light" eyebrow="Why Appnix IT" title="Why businesses choose Appnix IT" />
            </div>
          </div>
          <ol className="lg:col-span-7">
            {whyAppnix.map((item, i) => (
              <li key={item.title}>
                <Reveal y={16} className="group grid grid-cols-[3.5rem_1fr] gap-4 border-t border-ink/15 py-8 sm:grid-cols-[5rem_1fr]">
                  <span aria-hidden="true" className="font-display text-3xl font-semibold text-ink/25 transition-colors duration-300 group-hover:text-ember sm:text-4xl">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 max-w-md leading-relaxed text-graphite">{item.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
