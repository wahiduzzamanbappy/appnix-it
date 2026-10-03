/** CSS-only page transition (re-runs on each navigation, no JS needed). */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-pageIn">{children}</div>;
}
