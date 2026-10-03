import type { MockupKind } from "@/types";

/** Illustrative interface mockups built from neutral shapes. They show layout only, never invented data. */
function Bar({ w, accent }: { w: string; accent?: boolean }) {
  return <div className={`h-2 rounded-full ${accent ? "bg-gradient-to-r from-orange to-gold" : "bg-white/12"}`} style={{ width: w }} />;
}

function Body({ kind }: { kind: MockupKind }) {
  switch (kind) {
    case "care":
      return (
        <div className="grid h-full grid-cols-5 gap-4">
          <div className="col-span-2 space-y-3">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`flex items-center gap-3 rounded-lg border p-3 ${i === 0 ? "border-orange/60 bg-orange/10" : "border-white/10"}`}>
                <div className="h-8 w-8 rounded-full bg-white/10" /><div className="flex-1 space-y-1.5"><Bar w="70%" /><Bar w="40%" /></div>
              </div>))}
          </div>
          <div className="col-span-3 flex flex-col justify-end gap-3 rounded-lg border border-white/10 p-4">
            <div className="max-w-[70%] space-y-1.5 rounded-xl bg-white/8 p-3"><Bar w="90%" /><Bar w="60%" /></div>
            <div className="ml-auto max-w-[65%] space-y-1.5 rounded-xl bg-gradient-to-r from-orange/80 to-gold/80 p-3"><div className="h-2 w-28 rounded-full bg-ink/60" /><div className="h-2 w-16 rounded-full bg-ink/40" /></div>
            <div className="h-9 rounded-full border border-white/15" />
          </div>
        </div>
      );
    case "pms":
      return (
        <div className="grid h-full grid-cols-3 gap-4">
          {[3, 2, 1].map((n, c) => (
            <div key={c} className="space-y-3 rounded-lg bg-white/[0.04] p-3">
              <Bar w="45%" accent={c === 1} />
              {Array.from({ length: n + 1 }, (_, i) => (
                <div key={i} className="space-y-2 rounded-md border border-white/10 bg-ink/60 p-3"><Bar w="85%" /><Bar w="55%" /></div>))}
            </div>))}
        </div>
      );
    case "billing":
      return (
        <div className="grid h-full grid-cols-5 gap-4">
          <div className="col-span-3 grid grid-cols-3 gap-3">
            {Array.from({ length: 9 }, (_, i) => <div key={i} className={`rounded-lg border p-3 ${i === 4 ? "border-orange/60 bg-orange/10" : "border-white/10"}`}><div className="mb-3 h-8 rounded bg-white/8" /><Bar w="80%" /></div>)}
          </div>
          <div className="col-span-2 flex flex-col gap-3 rounded-lg border border-white/10 p-4">
            {[0, 1, 2, 3].map((i) => <div key={i} className="flex justify-between"><Bar w="45%" /><Bar w="18%" /></div>)}
            <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-3"><Bar w="25%" /><div className="h-4 w-16 rounded bg-gradient-to-r from-orange to-gold" /></div>
            <div className="h-10 rounded-full bg-gradient-to-r from-orange to-gold" />
          </div>
        </div>
      );
    case "pharmacy":
      return (
        <div className="space-y-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4 rounded-lg border border-white/10 px-4 py-3">
              <div className="h-6 w-6 rounded-full bg-white/10" /><div className="flex-1 space-y-1.5"><Bar w="55%" /><Bar w="30%" /></div>
              <div className={`h-6 w-16 rounded-full ${i === 1 ? "bg-gradient-to-r from-orange to-gold" : "border border-white/20"}`} />
            </div>))}
        </div>
      );
    case "commerce":
      return (
        <div className="grid h-full grid-cols-4 gap-3">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="space-y-2 rounded-lg border border-white/10 p-2.5">
              <div className={`aspect-square rounded-md ${i === 1 ? "bg-gradient-to-br from-orange/70 to-gold/70" : "bg-white/8"}`} /><Bar w="80%" /><Bar w="40%" accent={i === 1} />
            </div>))}
        </div>
      );
  }
}

export function ProductMockup({ kind, label, className }: { kind: MockupKind; label: string; className?: string }) {
  return (
    <div role="img" aria-label={`Illustrative interface mockup for ${label}`} className={`overflow-hidden rounded-xl border border-white/10 bg-[#0c0e12] shadow-[0_30px_80px_-30px_rgba(255,122,0,0.35)] ${className ?? ""}`}>
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-4 h-2 w-32 rounded-full bg-white/10" />
      </div>
      <div className="h-[300px] p-5 sm:h-[340px]"><Body kind={kind} /></div>
    </div>
  );
}
