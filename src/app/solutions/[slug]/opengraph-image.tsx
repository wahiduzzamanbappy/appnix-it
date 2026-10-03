import { getService } from "@/data/services";
import { createOgImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Appnix IT solution";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  return createOgImage(s?.name ?? "Solutions", s?.tagline ?? "Appnix IT");
}
