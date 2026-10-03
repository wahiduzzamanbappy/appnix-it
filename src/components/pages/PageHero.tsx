import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";

interface Props {
  title: string;
  description: string;
  eyebrow?: string;
  crumbs?: { label: string; href: string }[];
  primary?: { label: string; href: string; track?: string };
  secondary?: { label: string; href: string };
  visual?: React.ReactNode;
}

/** Shared dark hero for inner pages. */
export function PageHero({ title, description, eyebrow, crumbs, primary, secondary, visual }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-20 pt-32 lg:pb-28 lg:pt-44">
      <div aria-hidden="true" className="absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-orange/20 blur-[130px]" />
      {visual && <div aria-hidden="true" className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 lg:block">{visual}</div>}
      <Container>
        {crumbs && <div className="mb-10"><Breadcrumb items={crumbs} /></div>}
        {eyebrow && <p className="mb-5 flex items-center gap-3 text-sm font-medium text-gold"><span aria-hidden="true" className="h-px w-8 bg-gold/70" />{eyebrow}</p>}
        <h1 className="max-w-4xl font-display text-display-lg font-semibold text-balance text-white">{title}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">{description}</p>
        {(primary || secondary) && (
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {primary && <Button href={primary.href} size="lg" track={primary.track}>{primary.label}</Button>}
            {secondary && <Button href={secondary.href} variant="outline" size="lg">{secondary.label}</Button>}
          </div>
        )}
      </Container>
    </section>
  );
}
