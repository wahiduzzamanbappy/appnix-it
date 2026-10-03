import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
  size?: "lg" | "md";
}

export function SectionHeading({ eyebrow, title, description, tone = "dark", align = "left", as: Tag = "h2", className, size = "lg" }: Props) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("mb-5 flex items-center gap-3 text-sm font-medium", align === "center" && "justify-center", dark ? "text-gold" : "text-ember")}>
          <span aria-hidden="true" className={cn("h-px w-8", dark ? "bg-gold/70" : "bg-ember/70")} />
          {eyebrow}
        </p>
      )}
      <Tag className={cn("font-display font-semibold text-balance", size === "lg" ? "text-display-lg" : "text-display-md", dark ? "text-white" : "text-ink")}>{title}</Tag>
      {description && <p className={cn("mt-6 max-w-2xl text-lg leading-relaxed", align === "center" && "mx-auto", dark ? "text-muted" : "text-graphite")}>{description}</p>}
    </div>
  );
}
