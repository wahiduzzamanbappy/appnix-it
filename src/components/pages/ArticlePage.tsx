import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InsightCard } from "@/components/home/InsightCard";
import { CTASection } from "@/components/home/CTASection";
import { ReadTracker } from "@/components/pages/ReadTracker";
import { insights } from "@/data/insights";
import { articleSchema } from "@/lib/schema";
import { absoluteUrl, formatDate } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import type { Insight } from "@/types";

export function ArticlePage({ article }: { article: Insight }) {
  const related = insights.filter((i) => i.slug !== article.slug).slice(0, 2);
  const url = absoluteUrl(`/insights/${article.slug}`);
  const share = [
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { label: "X", href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(article.title)}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
  ];

  return (
    <>
      <JsonLd data={articleSchema(article)} />
      <ReadTracker slug={article.slug} />
      <header className="relative overflow-hidden bg-ink pb-16 pt-32 lg:pt-44">
        <div aria-hidden="true" className="absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-orange/25 blur-[120px]" />
        <Container className="relative">
          <Breadcrumb items={[{ label: "Insights", href: "/insights" }, { label: article.title, href: `/insights/${article.slug}` }]} />
          <p className="mt-10 text-sm text-gold">{article.category}{article.isDevelopmentContent && " · Sample layout content"}</p>
          <h1 className="mt-3 max-w-4xl font-display text-display-lg font-semibold text-balance text-white">{article.title}</h1>
          <p className="mt-6 text-muted">
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time> · {article.readingMinutes} min read
            {article.author && <> · {article.author.name}{article.author.role && `, ${article.author.role}`}</>}
          </p>
        </Container>
      </header>

      <article className="bg-paper py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            {article.body.map((b, i) => {
              if (b.type === "h2") return <h2 key={i} className="mb-4 mt-12 font-display text-3xl font-semibold text-ink">{b.text}</h2>;
              if (b.type === "ul") return <ul key={i} className="my-6 list-disc space-y-2 pl-6 text-lg text-graphite marker:text-ember">{b.items.map((it) => <li key={it}>{it}</li>)}</ul>;
              if (b.type === "quote") return <blockquote key={i} className="my-8 border-l-2 border-orange pl-6 font-display text-2xl text-ink">{b.text}</blockquote>;
              return <p key={i} className="my-5 text-lg leading-[1.75] text-graphite">{b.text}</p>;
            })}

            <div className="mt-14 border-t border-ink/10 pt-6">
              <h2 className="mb-3 font-display text-base font-semibold text-ink">Share this article</h2>
              <ul className="flex flex-wrap gap-2">
                {share.map((s) => (
                  <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center rounded-full border border-ink/20 px-5 text-sm text-ink hover:border-ember hover:text-ember">
                    {s.label}<span className="sr-only"> (opens in a new tab)</span></a></li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="bg-white py-20" aria-labelledby="related-heading">
          <Container>
            <h2 id="related-heading" className="font-display text-3xl font-semibold text-ink">Related articles</h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-2">{related.map((r) => <li key={r.slug}><InsightCard insight={r} /></li>)}</ul>
          </Container>
        </section>
      )}
      <CTASection text={`Talk to ${siteConfig.name} about your next project.`} />
    </>
  );
}
