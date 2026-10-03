/**
 * Abstract hero composition: rising energy lines converging toward a lattice.
 * Pure SVG + CSS animation (no JS, no canvas) so it never blocks LCP. Motion is
 * disabled automatically under prefers-reduced-motion (see globals.css).
 */
const LINES = Array.from({ length: 16 }, (_, i) => {
  const t = i / 15;
  const d = `M ${(-60 + t * 120).toFixed(1)} 860 C ${(120 + t * 80).toFixed(1)} ${(640 - t * 60).toFixed(1)}, ${(380 + t * 90).toFixed(1)} ${(560 - t * 140).toFixed(1)}, ${(640 + t * 130).toFixed(1)} ${(120 + t * 110).toFixed(1)}`;
  return { d, w: 0.8 + (1 - Math.abs(t - 0.5) * 2) * 1.8, delay: -(t * 9), op: 0.35 + (1 - Math.abs(t - 0.5) * 2) * 0.55 };
});
const NODES: [number, number][] = [[640, 120], [668, 168], [706, 214], [742, 256], [596, 188], [560, 262], [724, 120], [770, 190]];

export function HeroVisual({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_35%,rgba(255,122,0,0.28),rgba(255,176,0,0.06)_38%,transparent_65%)]" />
      <svg viewBox="0 0 800 860" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="hv-flow" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#FF7A00" stopOpacity="0" />
            <stop offset="0.45" stopColor="#FF7A00" />
            <stop offset="1" stopColor="#FFB000" />
          </linearGradient>
          <pattern id="hv-dots" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1.1" fill="#fff" fillOpacity="0.16" /></pattern>
          <radialGradient id="hv-mask" cx="0.7" cy="0.3" r="0.75"><stop offset="0" stopColor="#fff" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></radialGradient>
          <mask id="hv-m"><rect width="800" height="860" fill="url(#hv-mask)" /></mask>
        </defs>

        <rect width="800" height="860" fill="url(#hv-dots)" mask="url(#hv-m)" />

        {/* geometric lattice, slowly rotating */}
        <g className="animate-drift" style={{ transformOrigin: "640px 190px" }}>
          {[150, 110, 72].map((r, i) => (
            <polygon key={r} points={Array.from({ length: 6 }, (_, k) => { const a = (Math.PI / 3) * k + i * 0.18; return `${(640 + r * Math.cos(a)).toFixed(1)},${(190 + r * Math.sin(a)).toFixed(1)}`; }).join(" ")}
              stroke="#FFB000" strokeOpacity={0.5 - i * 0.12} strokeWidth="1" />
          ))}
        </g>

        {/* base guides */}
        {LINES.map((l, i) => <path key={`g${i}`} d={l.d} stroke="#fff" strokeOpacity="0.05" strokeWidth="1" />)}
        {/* animated energy */}
        {LINES.map((l, i) => (
          <path key={i} d={l.d} pathLength={1000} stroke="url(#hv-flow)" strokeWidth={l.w} strokeLinecap="round" strokeOpacity={l.op}
            strokeDasharray="220 780" className="animate-flow" style={{ animationDelay: `${l.delay.toFixed(2)}s` }} />
        ))}

        {/* network nodes */}
        {NODES.map(([x, y], i) => (
          <g key={i}>
            {i < NODES.length - 1 && i % 2 === 0 && <line x1={x} y1={y} x2={NODES[i + 1][0]} y2={NODES[i + 1][1]} stroke="#FFB000" strokeOpacity="0.35" />}
            <circle cx={x} cy={y} r="3.2" fill="#FFB000" className="animate-pulseDot" style={{ animationDelay: `${(i * 0.4).toFixed(1)}s` }} />
          </g>
        ))}
      </svg>
    </div>
  );
}
