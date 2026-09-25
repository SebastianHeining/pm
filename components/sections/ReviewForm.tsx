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

const sterneLabels = [
  "",
  "Nicht zufrieden",
  "Eher unzufrieden",
  "In Ordnung",
  "Zufrieden",
  "Sehr zufrieden",
];

// Heitere Reaktion auf die gewählte Sternzahl
const stimmung = [
  { emoji: "👋", text: "Tippen Sie auf die Sterne oder ziehen Sie den Regler." },
  { emoji: "😟", text: "Oje, das tut uns leid! Erzählen Sie uns bitte, was schiefgelaufen ist." },
  { emoji: "🫤", text: "Da war Luft nach oben. Ihr Feedback hilft uns, besser zu werden." },
  { emoji: "🙂", text: "Solide Mitte! Was hätte Ihren Besuch noch besser gemacht?" },
  { emoji: "😊", text: "Schön, dass Sie zufrieden waren! Was hat Ihnen besonders gefallen?" },
  { emoji: "🤩", text: "Wunderbar, da summt die ganze Praxis vor Freude!" },
];

// Vorgefertigte Bausteine, passend zur gewählten Sternzahl
function bausteineFuer(sterne: number): string[] {
  if (sterne >= 4)
    return [
      "Sehr nettes und freundliches Team",
      "Termine waren immer pünktlich",
      "Die Behandlung hat mir richtig gut geholfen",
      "Ich habe mich gut aufgehoben gefühlt",
      "Ich habe kurzfristig einen Termin bekommen",
    ];
  if (sterne === 3)
    return [
      "Insgesamt zufrieden, mit kleinen Abstrichen",
      "Die Behandlung war gut, die Wartezeit etwas lang",
      "Gute Therapie, die Terminvergabe könnte einfacher sein",
      "Nettes Team, ich hätte mir etwas mehr Zeit gewünscht",
    ];
  if (sterne >= 1)
    return [
      "Die Wartezeit war mir zu lang",
      "Ich habe mich nicht gut beraten gefühlt",
      "Die Behandlung hat mir leider nicht geholfen",
      "Die Terminvergabe war umständlich",
    ];
  return [];
}

export function ReviewForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [sterne, setSterne] = useState(0);
  const [hover, setHover] = useState(0);
  const [text, setText] = useState("");
  const [benutzt, setBenutzt] = useState<string[]>([]);

  function bausteinEinfuegen(baustein: string) {
    setText((bisher) => {
      const basis = bisher.trimEnd();
      if (!basis) return `${baustein}. `;
      return `${basis}${/[.!?]$/.test(basis) ? "" : "."} ${baustein}. `;
    });
    setBenutzt((b) => [...b, baustein]);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.kind === "submitting") return;

    if (sterne < 1) {
      setStatus({ kind: "error", message: "Bitte wählen Sie eine Sterne-Bewertung." });
      return;
    }
    setStatus({ kind: "submitting" });

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      ort: String(formData.get("ort") ?? ""),
      wannBesuch: String(formData.get("wannBesuch") ?? ""),
      sterne,
      text: String(formData.get("text") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Versand fehlgeschlagen.");
      }
      setStatus({ kind: "success" });
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
          Herzlichen Dank!
        </p>
        <p className="mt-3 text-2xl font-semibold text-brand-navy">
          Ihre Bewertung ist bei uns angekommen.
        </p>
        <p className="mt-4 text-base leading-relaxed text-graphite">
          Wir freuen uns sehr über Ihr Feedback. Nach einer kurzen Prüfung
          erscheint Ihre Bewertung auf unserer Webseite — vielen Dank, dass Sie
          sich die Zeit genommen haben.
        </p>
      </div>
    );
  }

  const activeSterne = hover || sterne;

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <fieldset className="rounded-2xl bg-surface-warm p-5 ring-1 ring-border-soft">
        <legend className={cn(labelBase, "px-1")}>
          Wie zufrieden waren Sie? <span className="text-brand-red">*</span>
        </legend>
        <div className="mt-2 flex flex-col items-center gap-3">
          <div className="flex gap-1.5" role="radiogroup" aria-label="Sterne-Bewertung">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                role="radio"
                aria-checked={sterne === n}
                aria-label={`${n} von 5 Sternen: ${sterneLabels[n]}`}
                onClick={() => setSterne(n)}
                onMouseEnter={() => setHover(n)}
                onMouseLeave={() => setHover(0)}
                className={cn(
                  "text-5xl leading-none transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red rounded",
                  activeSterne >= n ? "text-brand-red" : "text-border-strong",
                )}
              >
                ★
              </button>
            ))}
          </div>
          <input
            type="range"
            min={1}
            max={5}
            step={1}
            value={sterne || 3}
            onChange={(e) => setSterne(Number(e.target.value))}
            aria-label="Zufriedenheit von 1 bis 5 Sternen"
            className={cn(
              "w-64 max-w-full cursor-pointer",
              sterne === 0 && "opacity-50",
            )}
            style={{ accentColor: "#C8202A" }}
          />
          <p
            aria-live="polite"
            className="min-h-[1.75rem] text-center text-base font-medium text-graphite"
          >
            <span aria-hidden className="mr-2 text-xl align-middle">
              {stimmung[activeSterne].emoji}
            </span>
            {stimmung[activeSterne].text}
          </p>
        </div>
      </fieldset>

      <div>
        <label htmlFor="text" className={labelBase}>
          Ihre Erfahrung <span className="text-brand-red">*</span>
        </label>
        {sterne > 0 && (
          <div className="mt-2">
            <p className="text-xs text-graphite-soft">
              Klicken Sie an, was passt. Eigene Worte machen die Bewertung
              noch persönlicher.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {bausteineFuer(sterne).map((b) => {
                const verwendet = benutzt.includes(b);
                return (
                  <button
                    key={b}
                    type="button"
                    disabled={verwendet}
                    onClick={() => bausteinEinfuegen(b)}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                      verwendet
                        ? "border-border-soft bg-surface-warm text-graphite-soft"
                        : "border-border-strong bg-white text-brand-navy hover:border-brand-red hover:text-brand-red",
                    )}
                  >
                    {verwendet ? "✓ " : "+ "}
                    {b}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        <textarea
          id="text"
          name="text"
          required
          rows={5}
          minLength={10}
          maxLength={2000}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Was hat Ihnen gefallen? Wie haben Sie die Behandlung erlebt?"
          className={cn(inputBase, "mt-2 resize-y")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelBase}>
            Name <span className="text-graphite-soft">(optional)</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="z. B. Maria K."
            className={cn(inputBase, "mt-2")}
          />
          <p className="mt-1.5 text-xs text-graphite-soft">
            Gerne nur Vorname oder Initialen — so erscheint es später auf der
            Webseite.
          </p>
        </div>
        <div>
          <label htmlFor="ort" className={labelBase}>
            Wohnort <span className="text-graphite-soft">(optional)</span>
          </label>
          <input
            id="ort"
            name="ort"
            type="text"
            defaultValue="Hamm"
            placeholder="z. B. Hamm"
            className={cn(inputBase, "mt-2")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="wannBesuch" className={labelBase}>
          Wann waren Sie bei uns?{" "}
          <span className="text-graphite-soft">(optional)</span>
        </label>
        <input
          id="wannBesuch"
          name="wannBesuch"
          type="text"
          maxLength={60}
          placeholder="z. B. Juni 2026 oder „vor zwei Wochen“"
          className={cn(inputBase, "mt-2")}
        />
        <p className="mt-1.5 text-xs text-graphite-soft">
          Hilft uns, Ihr Feedback einzuordnen — wird nicht veröffentlicht.
        </p>
      </div>

      {/* Honeypot */}
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
          Ich bin einverstanden, dass meine Bewertung (ggf. gekürzt) mit dem
          angegebenen Namen auf der Webseite der Praxis veröffentlicht wird,
          und habe die{" "}
          <a
            href="/datenschutz"
            className="font-medium text-brand-navy underline underline-offset-2 hover:text-brand-red"
          >
            Datenschutzerklärung
          </a>{" "}
          gelesen. Die Einwilligung kann ich jederzeit widerrufen.
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

      <div className="pt-2">
        <Button type="submit" size="lg" disabled={status.kind === "submitting"}>
          {status.kind === "submitting" ? "Wird gesendet …" : "Bewertung absenden"}
        </Button>
      </div>
    </form>
  );
}
