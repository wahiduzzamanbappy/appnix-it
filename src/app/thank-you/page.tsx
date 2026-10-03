import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/Button";

export const metadata = buildMetadata({ title: "Thank you", description: "Your inquiry has been received by Appnix IT.", path: "/thank-you", noIndex: true });

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center gap-5 bg-ink px-6 pt-24 text-center">
      <CheckCircle2 aria-hidden="true" className="h-12 w-12 text-orange" />
      <h1 className="font-display text-display-md font-semibold text-white">Thanks, your inquiry is in.</h1>
      <p className="max-w-md text-lg text-muted">We&apos;ll review what you shared and follow up by email.</p>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <Button href="/solutions">Explore Solutions</Button>
        <Button href="/" variant="outline" arrow={false}>Back to home</Button>
      </div>
    </section>
  );
}
