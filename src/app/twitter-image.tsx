import { siteConfig } from "@/config/site";
import { createOgImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Appnix IT: Where ideas Reborn.";

export default function Image() { return createOgImage(siteConfig.tagline, "Software, AI, cloud, cybersecurity and commerce solutions."); }
