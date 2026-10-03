import { AlertTriangle, Inbox } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function LoadingState({ label = "Loading" }: { label?: string }) {
  return (
    <div role="status" aria-live="polite" className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-ink text-muted">
      <span aria-hidden="true" className="h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-orange motion-reduce:animate-none" />
      <p>{label}…</p>
    </div>
  );
}

export function ErrorState({ title = "Something went wrong", message = "We couldn't load this page. Try again, or head back to the home page.", onRetry }: { title?: string; message?: string; onRetry?: () => void }) {
  return (
    <div role="alert" className="flex min-h-[70vh] flex-col items-center justify-center gap-5 bg-ink px-6 text-center">
      <AlertTriangle aria-hidden="true" className="h-10 w-10 text-orange" />
      <h1 className="font-display text-display-md font-semibold text-white">{title}</h1>
      <p className="max-w-md text-muted">{message}</p>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        {onRetry && <Button onClick={onRetry} arrow={false}>Try again</Button>}
        <Button href="/" variant="outline" arrow={false}>Back to home</Button>
      </div>
    </div>
  );
}

export function EmptyState({ title, message }: { title: string; message: string }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-ink/20 px-6 py-16 text-center">
      <Inbox aria-hidden="true" className="h-8 w-8 text-ember" />
      <h2 className="font-display text-2xl font-semibold text-ink">{title}</h2>
      <p className="max-w-md text-graphite">{message}</p>
    </div>
  );
}
