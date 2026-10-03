import { services } from "@/data/services";

export const SERVICE_OPTIONS = [...services.map((s) => s.name), "Other"] as const;
export const PROJECT_TYPES = [
  "New Project", "Existing System", "Consultation", "Maintenance / Support", "Partnership", "Other",
] as const;

export interface InquiryInput {
  name: string; company: string; email: string; phone: string;
  service: string; projectType: string; message: string;
}
export type InquiryErrors = Partial<Record<keyof InquiryInput, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[\d\s().-]{6,25}$/;

/** Strip markup and control characters. Output is still escaped wherever it is rendered. */
export function sanitize(value: unknown, max = 4000): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/<[^>]*>/g, "")
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, max);
}

/** Shared by the browser form and the API route so both enforce identical rules. */
export function validateInquiry(raw: Partial<Record<keyof InquiryInput, unknown>>): {
  valid: boolean; errors: InquiryErrors; data: InquiryInput;
} {
  const data: InquiryInput = {
    name: sanitize(raw.name, 100),
    company: sanitize(raw.company, 120),
    email: sanitize(raw.email, 200),
    phone: sanitize(raw.phone, 30),
    service: sanitize(raw.service, 80),
    projectType: sanitize(raw.projectType, 80),
    message: sanitize(raw.message, 4000),
  };
  const errors: InquiryErrors = {};

  if (data.name.length < 2) errors.name = "Enter your full name (at least 2 characters).";
  if (!data.email) errors.email = "Enter your email address.";
  else if (!EMAIL_RE.test(data.email)) errors.email = "Enter a valid email address, like name@company.com.";
  if (data.phone && !PHONE_RE.test(data.phone)) errors.phone = "Enter a valid phone number or leave this blank.";
  if (!(SERVICE_OPTIONS as readonly string[]).includes(data.service)) errors.service = "Choose the service you are interested in.";
  if (!(PROJECT_TYPES as readonly string[]).includes(data.projectType)) errors.projectType = "Choose a project type.";
  if (data.message.length < 10) errors.message = "Tell us a little more (at least 10 characters).";

  return { valid: Object.keys(errors).length === 0, errors, data };
}
