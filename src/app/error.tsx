"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/ui/States";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error.digest ?? "client error"); }, [error]);
  return <ErrorState onRetry={reset} />;
}
