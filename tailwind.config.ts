import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08090B",
        surface: "#111318",
        paper: "#F7F7F5",
        orange: "#FF7A00",
        gold: "#FFB000",
        ember: "#B35300", // orange for text on light backgrounds (AA contrast)
        muted: "#8A8F98",
        graphite: "#4F545C", // body text on light backgrounds (AA contrast)
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.4rem, 10.5vw, 9rem)", { lineHeight: "0.9", letterSpacing: "-0.045em" }],
        "display-lg": ["clamp(2.5rem, 5.6vw, 5rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        "display-md": ["clamp(2rem, 3.6vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      maxWidth: { site: "1360px" },
      keyframes: {
        rise: { from: { opacity: "0", transform: "translateY(22px)" }, to: { opacity: "1", transform: "none" } },
        flow: { from: { strokeDashoffset: "1000" }, to: { strokeDashoffset: "0" } },
        pulseDot: { "0%,100%": { opacity: "0.35" }, "50%": { opacity: "1" } },
        drift: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
        pageIn: { from: { opacity: "0", transform: "translateY(6px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(0.22,1,0.36,1) both",
        flow: "flow 11s linear infinite",
        pulseDot: "pulseDot 3.2s ease-in-out infinite",
        drift: "drift 140s linear infinite",
        pageIn: "pageIn 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
