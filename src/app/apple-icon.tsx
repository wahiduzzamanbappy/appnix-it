import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#071C2A",
      }}
    >
      <svg width="180" height="180" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="brand-a" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#FFB347" />
            <stop offset="100%" stopColor="#FF6A00" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="#071C2A" />
        <path d="M18 48 32 13.5 46 48h-7.7L32 33.7l-6.3 14.3H18Z" fill="url(#brand-a)" />
        <path d="M27.2 40.5h9.6L32 27.8l-4.8 12.7Z" fill="#FFEBD8" opacity="0.9" />
      </svg>
    </div>,
    size,
  );
}
