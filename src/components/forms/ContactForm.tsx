"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PROJECT_TYPES, SERVICE_OPTIONS, validateInquiry, type InquiryErrors, type InquiryInput } from "@/lib/validation";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "error";
const empty: InquiryInput = { name: "", company: "", email: "", phone: "", service: "", projectType: "", message: "" };

const fieldCls = (invalid: boolean) =>
  cn("w-full rounded-lg border bg-white px-4 py-3 text-ink placeholder:text-graphite/60 transition-colors focus:border-ember", invalid ? "border-red-600" : "border-ink/20 hover:border-ink/40");

function Field({ name, label, required, error, children }: { name: keyof InquiryInput; label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={`f-${name}`} className="mb-2 block text-sm font-medium text-ink">
        {label}{required ? <span className="text-red-700" aria-hidden="true"> *</span> : <span className="font-normal text-graphite"> (optional)</span>}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      {children}
      {error && <p id={`e-${name}`} className="mt-1.5 flex items-start gap-1.5 text-sm text-red-700"><AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />{error}</p>}
    </div>
  );
}

export function ContactForm() {
  const router = useRouter();
  const [values, setValues] = useState<InquiryInput>(empty);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const startedAt = useRef(Date.now());
  const honeypot = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const set = (k: keyof InquiryInput) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");
    const result = validateInquiry(values);
    setErrors(result.errors);
    if (!result.valid) {
      const first = (Object.keys(result.errors) as (keyof InquiryInput)[])[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.data, website: honeypot.current?.value ?? "", elapsedMs: Date.now() - startedAt.current }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; errors?: InquiryErrors; message?: string };
      if (res.ok && json.ok) {
        trackEvent("contact_form_submit", { service: result.data.service, project_type: result.data.projectType });
        router.push("/thank-you");
        return;
      }
      if (json.errors) setErrors(json.errors);
      setServerError(json.message ?? "We couldn't send your inquiry. Please try again in a moment.");
      setStatus("error");
    } catch {
      setServerError("We couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  const aria = (name: keyof InquiryInput) => ({ id: `f-${name}`, name, "aria-invalid": errors[name] ? true : undefined, "aria-describedby": errors[name] ? `e-${name}` : undefined });

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_1px_0_rgba(8,9,11,0.04)] sm:p-9" aria-label="Project inquiry form">
      <p className="mb-6 text-sm text-graphite">Fields marked <span className="text-red-700">*</span> are required.</p>

      {serverError && <div role="alert" className="mb-6 flex items-start gap-2 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800"><AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />{serverError}</div>}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Name" required error={errors.name}><input {...aria("name")} value={values.name} onChange={set("name")} autoComplete="name" className={fieldCls(!!errors.name)} /></Field>
        <Field name="company" label="Company" error={errors.company}><input {...aria("company")} value={values.company} onChange={set("company")} autoComplete="organization" className={fieldCls(!!errors.company)} /></Field>
        <Field name="email" label="Email" required error={errors.email}><input {...aria("email")} type="email" inputMode="email" value={values.email} onChange={set("email")} autoComplete="email" className={fieldCls(!!errors.email)} /></Field>
        <Field name="phone" label="Phone" error={errors.phone}><input {...aria("phone")} type="tel" inputMode="tel" value={values.phone} onChange={set("phone")} autoComplete="tel" className={fieldCls(!!errors.phone)} /></Field>
        <Field name="service" label="Service" required error={errors.service}>
          <select {...aria("service")} value={values.service} onChange={set("service")} className={fieldCls(!!errors.service)}>
            <option value="">Select a service</option>{SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </Field>
        <Field name="projectType" label="Project type" required error={errors.projectType}>
          <select {...aria("projectType")} value={values.projectType} onChange={set("projectType")} className={fieldCls(!!errors.projectType)}>
            <option value="">Select a project type</option>{PROJECT_TYPES.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field name="message" label="Message" required error={errors.message}>
          <textarea {...aria("message")} rows={6} value={values.message} onChange={set("message")} placeholder="What are you looking to build or improve?" className={fieldCls(!!errors.message)} />
        </Field>
      </div>

      {/* Honeypot: hidden from people and assistive tech, bots tend to fill it */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Website<input ref={honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" /></label>
      </div>

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" loading={status === "submitting"} track="contact_send_inquiry">Send Inquiry</Button>
        <p className="text-sm text-graphite">We use your details only to respond to this inquiry.</p>
      </div>
    </form>
  );
}
