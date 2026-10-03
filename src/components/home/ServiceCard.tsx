import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/solutions/${service.slug}`}
      className="group relative flex h-full min-h-[260px] flex-col justify-between p-7 transition-colors duration-300 hover:bg-surface focus-visible:bg-surface"
    >
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-orange to-gold transition-transform duration-500 group-hover:scale-x-100" />
      <span aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange/0 blur-3xl transition-colors duration-500 group-hover:bg-orange/20" />
      <div className="relative flex items-start justify-between">
        <Icon name={service.icon} className="h-8 w-8 text-gold transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={1.4} />
        <ArrowUpRight aria-hidden="true" className="h-5 w-5 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange" />
      </div>
      <div className="relative mt-10">
        <h3 className="font-display text-xl font-semibold text-white">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
      </div>
    </Link>
  );
}
