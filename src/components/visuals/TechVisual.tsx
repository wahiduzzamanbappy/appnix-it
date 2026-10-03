import type { VisualKind } from "@/types";

/** Unique abstract treatments for bento cards and solution heroes. Decorative (aria-hidden). */
export function TechVisual({ kind, className }: { kind: VisualKind; className?: string }) {
  const stroke = "currentColor";
  return (
    <svg viewBox="0 0 400 300" fill="none" aria-hidden="true" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`tv-${kind}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF7A00" /><stop offset="1" stopColor="#FFB000" />
        </linearGradient>
      </defs>
      {kind === "neural" && (
        <g>
          {[[40,60],[40,150],[40,240],[150,40],[150,110],[150,190],[150,260],[270,80],[270,170],[270,250],[370,130],[370,210]].map(([x, y], i, a) =>
            a.slice(i + 1).filter(([x2]) => x2 > x && x2 - x < 140).map(([x2, y2], j) => (
              <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke={stroke} strokeOpacity="0.16" />
            )))}
          {[[40,60],[40,150],[40,240],[150,40],[150,110],[150,190],[150,260],[270,80],[270,170],[270,250],[370,130],[370,210]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 7 : 4.5} fill={i % 4 === 0 ? `url(#tv-${kind})` : stroke} fillOpacity={i % 4 === 0 ? 1 : 0.5} />
          ))}
        </g>
      )}
      {kind === "stack" && (
        <g stroke={stroke} strokeOpacity="0.4">
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={70 + i * 18} y={200 - i * 44} width="210" height="60" rx="6" fill={i === 3 ? `url(#tv-${kind})` : "none"} fillOpacity={i === 3 ? 0.9 : 0} strokeOpacity={i === 3 ? 0 : 0.45} />
          ))}
          <path d="M70 230v-20M280 230v-20" strokeOpacity="0.25" />
        </g>
      )}
      {kind === "cloud" && (
        <g stroke={stroke}>
          {[40, 80, 120, 160, 200].map((r, i) => (
            <path key={r} d={`M ${200 - r} 250 A ${r} ${r} 0 0 1 ${200 + r} 250`} strokeOpacity={0.5 - i * 0.07} strokeWidth="1.2" />
          ))}
          <circle cx="200" cy="250" r="14" fill={`url(#tv-${kind})`} stroke="none" />
          {[[120,200],[290,170],[200,110]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="5" fill={`url(#tv-${kind})`} stroke="none" />)}
        </g>
      )}
      {kind === "shield" && (
        <g stroke={stroke}>
          {Array.from({ length: 5 }, (_, r) => Array.from({ length: 7 }, (_, c) => {
            const x = 50 + c * 50 + (r % 2) * 25, y = 40 + r * 50;
            const on = (r === 2 && c >= 2 && c <= 4) || (r === 1 && c === 3);
            return <polygon key={`${r}${c}`} points={`${x},${y - 22} ${x + 19},${y - 11} ${x + 19},${y + 11} ${x},${y + 22} ${x - 19},${y + 11} ${x - 19},${y - 11}`} fill={on ? `url(#tv-${kind})` : "none"} fillOpacity={on ? 0.85 : 0} strokeOpacity={on ? 0 : 0.25} />;
          }))}
        </g>
      )}
      {kind === "commerce" && (
        <g>
          {[70, 110, 90, 150, 130, 190, 230].map((h, i) => (
            <rect key={i} x={40 + i * 48} y={270 - h} width="30" height={h} rx="3" fill={i === 6 ? `url(#tv-${kind})` : stroke} fillOpacity={i === 6 ? 1 : 0.22} />
          ))}
          <path d="M40 200 C120 190 160 130 250 140 S340 60 370 40" stroke={`url(#tv-${kind})`} strokeWidth="2" />
        </g>
      )}
      {kind === "flow" && (
        <g stroke={stroke}>
          {[[50,150],[150,70],[150,230],[260,150],[350,150]].map(([x, y], i) => (
            <rect key={i} x={x - 26} y={y - 18} width="52" height="36" rx="6" fill={i === 3 ? `url(#tv-${kind})` : "none"} fillOpacity={i === 3 ? 0.95 : 0} strokeOpacity={i === 3 ? 0 : 0.45} />
          ))}
          <path d="M76 150H100L124 70M76 150H100L124 230M176 70H210L234 150M176 230H210L234 150M286 150H324" strokeOpacity="0.4" />
        </g>
      )}
    </svg>
  );
}
