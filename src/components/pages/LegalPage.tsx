import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/pages/PageHero";
import type { LegalDoc } from "@/data/legal";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHero title={doc.title} description={doc.description} crumbs={[{ label: doc.title, href: `/${doc.slug}` }]} />
      <section className="bg-paper py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <p role="note" className="mb-10 rounded-md border border-ember/40 bg-white px-4 py-3 text-sm text-ink">Placeholder document. Final legal text has not yet been supplied.</p>
            {doc.sections.map((s) => (
              <div key={s.heading} className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-ink">{s.heading}</h2>
                <p className="mt-3 leading-relaxed text-graphite">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
