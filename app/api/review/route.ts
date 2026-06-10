import { NextResponse } from "next/server";
import { sendReviewMail } from "@/lib/contact";

export const runtime = "nodejs";

// Simple in-memory rate limit: 3 reviews / 10 min per IP
const submissions = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX = 3;

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
  let body: {
    name?: string;
    ort?: string;
    sterne?: number;
    text?: string;
    consent?: boolean;
    website?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Honeypot
  if (body.website && body.website.length > 0) {
    return NextResponse.json({ ok: true, mode: "logged" });
  }

  const sterne = Number(body.sterne);
  const text = (body.text ?? "").trim();
  const name = (body.name ?? "").trim().slice(0, 80);
  const ort = (body.ort ?? "").trim().slice(0, 80);

  if (!Number.isInteger(sterne) || sterne < 1 || sterne > 5) {
    return NextResponse.json(
      { ok: false, error: "Bitte wählen Sie eine Sterne-Bewertung." },
      { status: 400 },
    );
  }
  if (text.length < 10 || text.length > 2000) {
    return NextResponse.json(
      { ok: false, error: "Bitte schreiben Sie ein paar Worte zu Ihrer Erfahrung." },
      { status: 400 },
    );
  }
  if (body.consent !== true) {
    return NextResponse.json(
      { ok: false, error: "Bitte stimmen Sie der Verarbeitung und möglichen Veröffentlichung zu." },
      { status: 400 },
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Zu viele Einsendungen in kurzer Zeit. Bitte später erneut versuchen." },
      { status: 429 },
    );
  }

  const result = await sendReviewMail({ name, ort, sterne, text });
  if (!result.ok) {
    return NextResponse.json(result, { status: 500 });
  }
  return NextResponse.json(result);
}
