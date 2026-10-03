import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

/**
 * Renders the official logo at its native proportions.
 * Never set both width and height via CSS: constrain height only and let width follow.
 */
export function Logo({ className = "h-9 w-auto", priority = false }: { className?: string; priority?: boolean }) {
  const { src, width, height, alt } = siteConfig.logo;
  return (
    <Link href="/" aria-label={`${siteConfig.name} home`} className="inline-flex shrink-0 items-center">
      <Image src={src} alt={alt} width={width} height={height} priority={priority} className={className} />
    </Link>
  );
}
