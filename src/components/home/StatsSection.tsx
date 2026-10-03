import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { stats } from "@/data/company";
import { showDevContent } from "@/lib/utils";

/**
 * Only verified stats render in production. Placeholder stats show in development
 * (with a visible notice) so layout can be reviewed without presenting them as fact.
 */
export function StatsSection() {
  const visible = stats.filter((s) => s.verified || showDevContent);
  if (visible.length === 0) return null;
  const hasPlaceholders = visible.some((s) => !s.verified);

  return (
    <section aria-label="Appnix IT at a glance" className="border-y border-white/10 bg-surface">
      <Container className="py-12 lg:py-16">
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {visible.map((s, i) => (
            <div key={s.label} className={`px-0 lg:px-8 ${i > 0 ? "lg:border-l lg:border-white/10" : "lg:pl-0"} ${i % 2 === 1 ? "pl-6" : ""}`}>
              <dd className="font-display text-5xl font-semibold tracking-tight text-white lg:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-2 text-sm text-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
        {hasPlaceholders && (
          <p className="mt-8 rounded-md border border-gold/30 bg-gold/5 px-4 py-2 text-sm text-gold">
            Development notice: these figures are placeholders. Edit <code>src/data/company.ts</code> and set <code>verified: true</code> to publish real numbers.
          </p>
        )}
      </Container>
    </section>
  );
}
