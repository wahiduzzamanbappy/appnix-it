import { NextResponse } from "next/server";
import { validateInquiry } from "@/lib/validation";
import { rateLimit } from "@/lib/rate-limit";
import { siteConfig } from "@/config/site";

export const runtime = "nodejs";

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
const json = (body: Record<string, unknown>, status = 200, headers?: Record<string, string>) => NextResponse.json(body, { status, headers });

async function verifyTurnstile(token: unknown, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // optional: enabled only when configured
  if (typeof token !== "string" || !token) return false;
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
  });
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

async function deliver(data: Record<string, string>): Promise<"sent" | "unconfigured"> {
  const lines = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n");
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, CONTACT_WEBHOOK_URL } = process.env;

  if (RESEND_API_KEY && CONTACT_TO_EMAIL && CONTACT_FROM_EMAIL) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL, to: [CONTACT_TO_EMAIL], reply_to: data.email,
        subject: `New inquiry: ${data.service} (${data.projectType})`,
        text: lines,
        html: `<h2>New website inquiry</h2>${Object.entries(data).map(([k, v]) => `<p><strong>${escapeHtml(k)}:</strong><br>${escapeHtml(v).replace(/\n/g, "<br>")}</p>`).join("")}`,
      }),
    });
    if (!res.ok) throw new Error(`Email provider responded ${res.status}`);
    return "sent";
  }
  if (CONTACT_WEBHOOK_URL) {
    const res = await fetch(CONTACT_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ site: siteConfig.name, ...data }) });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return "sent";
  }
  if (process.env.NODE_ENV !== "production") { console.info("[contact:dev] inquiry received\n" + lines); return "sent"; }
  return "unconfigured";
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) return json({ ok: false, message: "Unsupported request." }, 415);
  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > 20_000) return json({ ok: false, message: "Your message is too long." }, 413);

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const limit = rateLimit(`contact:${ip}`);
  if (!limit.ok) return json({ ok: false, message: "Too many inquiries from this connection. Please try again later." }, 429, { "Retry-After": String(limit.retryAfter) });

  let body: Record<string, unknown>;
  try { body = (await request.json()) as Record<string, unknown>; } catch { return json({ ok: false, message: "Invalid request." }, 400); }

  // Bot traps: filled honeypot or implausibly fast submit. Respond as if successful.
  if (typeof body.website === "string" && body.website.length > 0) return json({ ok: true });
  if (typeof body.elapsedMs === "number" && body.elapsedMs < 2500) return json({ ok: true });

  if (!(await verifyTurnstile(body.captchaToken, ip))) return json({ ok: false, message: "Spam check failed. Please try again." }, 400);

  const { valid, errors, data } = validateInquiry(body);
  if (!valid) return json({ ok: false, errors, message: "Please correct the highlighted fields." }, 422);

  try {
    const result = await deliver({ ...data });
    if (result === "unconfigured") {
      console.error("[contact] No delivery method configured (set RESEND_* or CONTACT_WEBHOOK_URL).");
      return json({ ok: false, message: "Our inquiry form is temporarily unavailable. Please try again later." }, 503);
    }
    return json({ ok: true });
  } catch (err) {
    console.error("[contact] delivery failed", err instanceof Error ? err.message : err);
    return json({ ok: false, message: "We couldn't send your inquiry. Please try again in a moment." }, 502);
  }
}
