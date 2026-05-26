import { NextResponse } from "next/server";
import { sendContactMail, type ContactPayload } from "@/lib/contact";

export const runtime = "nodejs";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Simple in-memory rate limit: 5 submissions / 10 min per IP
const submissions = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const arr = (submissions.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= MAX) {
    submissions.set(ip, arr);
    return true;
  }
  arr.push(now);
  submissions.set(ip, arr);
  return false;
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload> & { website?: string; consent?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields; humans don't
  if (body.website && body.website.length > 0) {
    return NextResponse.json({ ok: true, mode: "logged" });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const topic = (body.topic ?? "").trim();
  const consent = body.consent === true;

  if (name.length < 2 || name.length > 120) {
    return NextResponse.json({ ok: false, error: "Bitte geben Sie Ihren Namen an." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Bitte geben Sie eine gültige E-Mail-Adresse an." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 4000) {
    return NextResponse.json({ ok: false, error: "Bitte schreiben Sie ein paar Worte zu Ihrem Anliegen." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ ok: false, error: "Bitte stimmen Sie der Datenschutzerklärung zu." }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Zu viele Anfragen in kurzer Zeit. Bitte später erneut versuchen." },
      { status: 429 },
    );
  }

  const result = await sendContactMail({ name, email, phone, topic, message });
  if (!result.ok) {
    return NextResponse.json(result, { status: 500 });
  }
  return NextResponse.json(result);
}
