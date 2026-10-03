import { getInsight } from "@/data/insights";
import { createOgImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Appnix IT insight";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const a = getInsight((await params).slug);
  return createOgImage(a?.title ?? "Insights", a?.category ?? "Appnix IT");
}
