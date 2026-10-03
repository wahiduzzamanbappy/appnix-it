import { getProduct } from "@/data/products";
import { createOgImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Appnix IT product";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProduct((await params).slug);
  return createOgImage(p?.name ?? "Products", p?.summary ?? "Appnix IT");
}
