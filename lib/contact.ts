import nodemailer from "nodemailer";
import { siteConfig } from "./site-config";

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  topic?: string;
  message: string;
};

export type ContactResult =
  | { ok: true; mode: "sent" | "logged" }
  | { ok: false; error: string };

async function sendPraxisMail(options: {
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<ContactResult> {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.MAIL_FROM ?? siteConfig.contact.email;
  const to = process.env.MAIL_TO ?? siteConfig.contact.email;

  if (!host || !user || !pass) {
    // Dev/Stub: log to server console, don't fail
    console.warn(
      "[mail] SMTP not configured — logging payload only.\n" + options.text,
    );
    return { ok: true, mode: "logged" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Physiotherapie Mally Website" <${from}>`,
      to,
      replyTo: options.replyTo,
      subject: options.subject,
      text: options.text,
    });
    return { ok: true, mode: "sent" };
  } catch (err) {
    console.error("[mail] sendMail failed", err);
    return {
      ok: false,
      error:
        "Versand fehlgeschlagen. Bitte später erneut versuchen oder anrufen.",
    };
  }
}

export async function sendContactMail(
  payload: ContactPayload,
): Promise<ContactResult> {
  const text = [
    `Neue Terminanfrage über physiotherapie-mally.de`,
    ``,
    `Name:    ${payload.name}`,
    `E-Mail:  ${payload.email}`,
    payload.phone ? `Telefon: ${payload.phone}` : null,
    payload.topic ? `Anliegen: ${payload.topic}` : null,
    ``,
    `Nachricht:`,
    payload.message,
  ]
    .filter(Boolean)
    .join("\n");

  return sendPraxisMail({
    subject: `Terminanfrage über die Webseite — ${payload.name}`,
    text,
    replyTo: payload.email,
  });
}

export type ReviewPayload = {
  name?: string;
  ort?: string;
  sterne: number;
  text: string;
};

export async function sendReviewMail(
  payload: ReviewPayload,
): Promise<ContactResult> {
  const stars = "★".repeat(payload.sterne) + "☆".repeat(5 - payload.sterne);
  const text = [
    `Neue Patient:innen-Bewertung über physiotherapie-mally.de`,
    ``,
    `Bewertung: ${stars} (${payload.sterne}/5)`,
    `Name:      ${payload.name || "(nicht angegeben)"}`,
    payload.ort ? `Ort:       ${payload.ort}` : null,
    ``,
    `Text:`,
    payload.text,
    ``,
    `---`,
    `Zum Veröffentlichen: im CMS unter "Bewertungen" einen neuen Eintrag`,
    `mit diesem Text anlegen und "Veröffentlicht" aktivieren.`,
  ]
    .filter(Boolean)
    .join("\n");

  return sendPraxisMail({
    subject: `Neue Bewertung (${payload.sterne}/5) — ${payload.name || "anonym"}`,
    text,
  });
}
