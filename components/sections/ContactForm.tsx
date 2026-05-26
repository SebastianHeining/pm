"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const inputBase =
  "block w-full rounded-xl border border-border-soft bg-white px-4 py-3 text-base text-brand-navy shadow-sm transition-colors placeholder:text-graphite-soft focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/30";

const labelBase = "block text-sm font-semibold text-brand-navy";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.kind === "submitting") return;
    setStatus({ kind: "submitting" });

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      topic: String(formData.get("topic") ?? ""),
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Versand fehlgeschlagen.");
      }
      setStatus({ kind: "success" });
      (event.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus({
        kind: "error",
        message: err instanceof Error ? err.message : "Versand fehlgeschlagen.",
      });
    }
  }

  if (status.kind === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl bg-surface-warm p-10 ring-1 ring-border-soft"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
          Vielen Dank
        </p>
        <p className="mt-3 text-2xl font-semibold text-brand-navy">
          Ihre Nachricht ist bei uns angekommen.
        </p>
        <p className="mt-4 text-base leading-relaxed text-graphite">
          Wir melden uns zeitnah telefonisch oder per E-Mail bei Ihnen zurück.
          In dringenden Fällen erreichen Sie uns auch direkt während der
          Öffnungszeiten.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelBase}>
            Name <span className="text-brand-red">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={cn(inputBase, "mt-2")}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelBase}>
            E-Mail <span className="text-brand-red">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={cn(inputBase, "mt-2")}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelBase}>
            Telefon <span className="text-graphite-soft">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={cn(inputBase, "mt-2")}
          />
        </div>
        <div>
          <label htmlFor="topic" className={labelBase}>
            Anliegen
          </label>
          <select
            id="topic"
            name="topic"
            defaultValue="Allgemeine Anfrage"
            className={cn(inputBase, "mt-2")}
          >
            <option>Allgemeine Anfrage</option>
            <option>Erstbehandlung mit Rezept</option>
            <option>Selbstzahler-Termin</option>
            <option>Hausbesuch</option>
            <option>CMD / Kiefergelenk</option>
            <option>Skoliose nach Schroth</option>
            <option>Rückruf erbeten</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          Ihre Nachricht <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          minLength={10}
          maxLength={4000}
          placeholder="Worum geht es? Wann passt es Ihnen zeitlich am besten?"
          className={cn(inputBase, "mt-2 resize-y")}
        />
      </div>

      {/* Honeypot — visually hidden, no autofill, no a11y exposure */}
      <div aria-hidden className="hidden">
        <label htmlFor="website">Website (bitte leer lassen)</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-5 w-5 shrink-0 rounded border-border-strong text-brand-red focus:ring-brand-red"
        />
        <label htmlFor="consent" className="text-sm leading-relaxed text-graphite">
          Ich habe die{" "}
          <a
            href="/datenschutz"
            className="font-medium text-brand-navy underline underline-offset-2 hover:text-brand-red"
          >
            Datenschutzerklärung
          </a>{" "}
          gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung
          meiner Anfrage zu.
        </label>
      </div>

      {status.kind === "error" && (
        <p
          role="alert"
          className="rounded-xl bg-brand-red-soft px-4 py-3 text-sm font-medium text-brand-red-hover"
        >
          {status.message}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Button
          type="submit"
          size="lg"
          disabled={status.kind === "submitting"}
        >
          {status.kind === "submitting" ? "Wird gesendet …" : "Anfrage senden"}
        </Button>
        <p className="text-sm text-graphite-soft">
          Wir antworten innerhalb von 1–2 Werktagen.
        </p>
      </div>
    </form>
  );
}
