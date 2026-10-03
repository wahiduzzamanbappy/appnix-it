import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProduct } from "@/data/products";
import { ProductPage } from "@/components/pages/ProductPage";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return buildMetadata({ title: product.name, description: product.summary, path: `/products/${product.slug}` });
}

export default async function Page({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  return <ProductPage product={product} />;
}
