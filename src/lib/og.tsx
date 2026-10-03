import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Text-based Open Graph card in brand colours. Swap in the logo asset once available. */
export function createOgImage(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#08090B", color: "#fff", position: "relative" }}>
        <div style={{ position: "absolute", right: -160, top: -160, width: 640, height: 640, borderRadius: 640, background: "radial-gradient(circle, rgba(255,122,0,0.55), rgba(255,176,0,0) 70%)" }} />
        <div style={{ display: "flex", fontSize: 30, color: "#FFB000", letterSpacing: -0.5 }}>Appnix IT</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2, maxWidth: 940 }}>{title}</div>
          <div style={{ display: "flex", fontSize: 30, color: "#8A8F98", marginTop: 24, maxWidth: 900 }}>{subtitle}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
