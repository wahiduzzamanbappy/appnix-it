import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { Insight } from "@/types";

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-ink/10 bg-white p-7 transition-colors hover:border-ember/50">
      <div aria-hidden="true" className="mb-6 h-36 overflow-hidden rounded-md bg-ink">
        <div className="h-full w-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,122,0,0.55),transparent_55%),linear-gradient(135deg,#111318,#08090B)] transition-transform duration-700 group-hover:scale-110" />
      </div>
      <p className="flex flex-wrap items-center gap-x-3 text-sm text-ember">
        <span>{insight.category}</span>
        {insight.isDevelopmentContent && <span className="rounded-full border border-ember/40 px-2 py-0.5 text-xs">Sample layout</span>}
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold text-ink">
        <Link href={`/insights/${insight.slug}`} className="after:absolute after:inset-0 relative hover:text-ember">{insight.title}</Link>
      </h3>
      <p className="mt-3 flex-1 text-graphite">{insight.excerpt}</p>
      <p className="mt-5 text-sm text-graphite">{formatDate(insight.publishedAt)} · {insight.readingMinutes} min read</p>
    </article>
  );
}
