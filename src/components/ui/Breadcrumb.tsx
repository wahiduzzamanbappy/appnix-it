import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

export function Breadcrumb({ items, tone = "dark" }: { items: { label: string; href: string }[]; tone?: "dark" | "light" }) {
  const all = [{ label: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", tone === "dark" ? "text-muted" : "text-graphite")}>
      <JsonLd data={breadcrumbSchema(all)} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {all.map((item, i) => {
          const last = i === all.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {last ? <span aria-current="page" className={tone === "dark" ? "text-white" : "text-ink"}>{item.label}</span>
                : <Link href={item.href} className="hover:text-orange">{item.label}</Link>}
              {!last && <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
