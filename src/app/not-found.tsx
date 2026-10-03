import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center gap-5 bg-ink px-6 pt-24 text-center">
      <p className="font-display text-display-xl font-semibold text-white/15" aria-hidden="true">404</p>
      <h1 className="font-display text-display-md font-semibold text-white">We couldn&apos;t find that page.</h1>
      <p className="max-w-md text-muted">The link may be out of date or the page may have moved. Try one of these instead.</p>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <Button href="/">Back to home</Button>
        <Button href="/solutions" variant="outline" arrow={false}>Explore solutions</Button>
      </div>
    </section>
  );
}
