import { getCaseStudy } from "@/data/case-studies";
import { createOgImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Appnix IT success story";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCaseStudy((await params).slug);
  return createOgImage(c?.title ?? "Success Stories", c?.solution ?? "Appnix IT");
}
