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

export async function sendContactMail(
  payload: ContactPayload,
): Promise<ContactResult> {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.MAIL_FROM ?? siteConfig.contact.email;
  const to = process.env.MAIL_TO ?? siteConfig.contact.email;

  const subject = `Terminanfrage über die Webseite — ${payload.name}`;
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

  if (!host || !user || !pass) {
    // Dev/Stub: log to server console, don't fail
    console.warn(
      "[contact] SMTP not configured — logging payload only.\n" + text,
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
      replyTo: payload.email,
      subject,
      text,
    });
    return { ok: true, mode: "sent" };
  } catch (err) {
    console.error("[contact] sendMail failed", err);
    return { ok: false, error: "Versand fehlgeschlagen. Bitte später erneut versuchen oder anrufen." };
  }
}
