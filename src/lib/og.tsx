import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export function createOgImage(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#08090B", color: "#fff", position: "relative" }}>
        <div style={{ position: "absolute", right: -160, top: -160, width: 640, height: 640, borderRadius: 640, background: "radial-gradient(circle, rgba(255,122,0,0.55), rgba(255,176,0,0) 70%)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 64, height: 64, borderRadius: 18, background: "#071C2A", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="42" height="42" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="og-mark" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#FFB347" />
                  <stop offset="100%" stopColor="#FF6A00" />
                </linearGradient>
              </defs>
              <path d="M18 48 32 13.5 46 48h-7.7L32 33.7l-6.3 14.3H18Z" fill="url(#og-mark)" />
              <path d="M27.2 40.5h9.6L32 27.8l-4.8 12.7Z" fill="#FFEBD8" opacity="0.9" />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#FFB000", letterSpacing: -0.5 }}>Appnix IT</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2, maxWidth: 940 }}>{title}</div>
          <div style={{ display: "flex", fontSize: 30, color: "#8A8F98", marginTop: 24, maxWidth: 900 }}>{subtitle}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
