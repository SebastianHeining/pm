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

const NICHTS_ZU_VERBESSERN = "Nichts, bleibt wie ihr seid!";

const gutBausteine = [
  "Sehr nettes und freundliches Team",
  "Es ging pünktlich los",
  "Die Behandlung hat mir richtig gut geholfen",
  "Ich habe mich gut aufgehoben gefühlt",
  "Ich habe kurzfristig einen Termin bekommen",
];

const besserBausteine = [
  "Die Wartezeit war mir zu lang",
  "Ich habe mich nicht gut beraten gefühlt",
  "Die Behandlung hat mir leider nicht geholfen",
  "Die Terminvergabe war umständlich",
  "Etwas mehr Zeit für die Behandlung wäre schön",
];

const wannOptionen = [
  { key: "heute", label: "Heute" },
  { key: "gestern", label: "Gestern" },
  { key: "letzte-woche", label: "Letzte Woche" },
  { key: "anders", label: "Wann anders" },
] as const;

type WannKey = (typeof wannOptionen)[number]["key"];

/** Entfernt einen zuvor eingefügten Baustein-Satz wieder aus dem Text. */
function ohneBaustein(text: string, baustein: string): string {
  const i = text.indexOf(baustein);
  if (i === -1) return text;
  let ende = i + baustein.length;
  if (text[ende] === ".") ende += 1;
  while (text[ende] === " ") ende += 1;
  return (text.slice(0, i) + text.slice(ende)).trimStart();
}

/** Hängt einen Baustein als Satz an den bestehenden Text an. */
function mitBaustein(text: string, baustein: string): string {
  const basis = text.trimEnd();
  if (!basis) return `${baustein}. `;
  return `${basis}${/[.!?]$/.test(basis) ? "" : "."} ${baustein}. `;
}

export function ReviewForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [sterne, setSterne] = useState(0);
  const [hover, setHover] = useState(0);
  // Kontinuierliche Slider-Position — die Sterne rasten auf ganze Werte
  const [slider, setSlider] = useState(3);
  const [gutText, setGutText] = useState("");
  const [besserText, setBesserText] = useState("");
  const [benutzt, setBenutzt] = useState<string[]>([]);
  const [wannWahl, setWannWahl] = useState<WannKey>("heute");
  const [wannDatum, setWannDatum] = useState("");

  function waehleSterne(n: number) {
    setSterne(n);
    // Bei guter Bewertung das Verbessern-Feld charmant vorbelegen —
    // aber nie eigene Eingaben überschreiben
    setBesserText((bisher) => {
      if (n >= 4 && bisher.trim() === "") return NICHTS_ZU_VERBESSERN;
      if (n <= 3 && bisher.trim() === NICHTS_ZU_VERBESSERN) return "";
      return bisher;
    });
  }

  function toggleBaustein(baustein: string, feld: "gut" | "besser") {
    const setzen = feld === "gut" ? setGutText : setBesserText;
    if (benutzt.includes(baustein)) {
      setzen((t) => ohneBaustein(t, baustein));
      setBenutzt((b) => b.filter((x) => x !== baustein));
    } else {
      setzen((t) =>
        mitBaustein(t.trim() === NICHTS_ZU_VERBESSERN ? "" : t, baustein),
      );
      setBenutzt((b) => [...b, baustein]);
    }
  }

  function wannBesuchWert(): string {
    if (wannWahl === "anders") {
      if (!wannDatum) return "";
      const [jahr, monat, tag] = wannDatum.split("-");
      return `${tag}.${monat}.${jahr}`;
    }
    return wannOptionen.find((o) => o.key === wannWahl)?.label ?? "";
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.kind === "submitting") return;

    if (sterne < 1) {
      setStatus({ kind: "error", message: "Bitte wählen Sie eine Sterne-Bewertung." });
      return;
    }
    if (gutText.trim().length < 5) {
      setStatus({
        kind: "error",
        message: "Bitte schreiben Sie ein paar Worte dazu, was Ihnen gefallen hat.",
      });
      return;
    }
    if (besserText.trim().length < 5) {
      setStatus({
        kind: "error",
        message: `Bitte sagen Sie uns kurz, was wir besser machen können. Wenn alles gepasst hat, klicken Sie einfach auf „${NICHTS_ZU_VERBESSERN}“.`,
      });
      return;
    }
    setStatus({ kind: "submitting" });

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      ort: String(formData.get("ort") ?? ""),
      wannBesuch: wannBesuchWert(),
      sterne,
      text: `Was gefallen hat:\n${gutText.trim()}\n\nWas wir verbessern können:\n${besserText.trim()}`,
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

  const chipClass = (verwendet: boolean) =>
    cn(
      "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
      verwendet
        ? "border-brand-red/40 bg-brand-red-soft text-brand-navy"
        : "border-border-strong bg-white text-brand-navy hover:border-brand-red hover:text-brand-red",
    );

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
                onClick={() => {
                  waehleSterne(n);
                  setSlider(n);
                }}
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
            step={0.01}
            value={slider}
            onChange={(e) => {
              const wert = Number(e.target.value);
              setSlider(wert);
              waehleSterne(Math.round(wert));
            }}
            aria-label="Zufriedenheit von 1 bis 5 Sternen"
            aria-valuetext={`${sterne || Math.round(slider)} von 5 Sternen`}
            className={cn(
              "biene-slider w-full max-w-sm",
              sterne === 0 && "opacity-50",
            )}
            style={{
              background: `linear-gradient(to right, #C8202A ${((slider - 1) / 4) * 100}%, #E5E2DD ${((slider - 1) / 4) * 100}%)`,
            }}
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

      {sterne > 0 && (
        <p className="text-xs text-graphite-soft">
          Klicken Sie an, was passt — ein zweiter Klick nimmt es wieder raus.
          Eigene Worte machen die Bewertung noch persönlicher.
        </p>
      )}

      <div>
        <label htmlFor="gutText" className={labelBase}>
          Was hat Ihnen gefallen? <span className="text-brand-red">*</span>
        </label>
        {sterne > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {gutBausteine.map((b) => {
              const verwendet = benutzt.includes(b);
              return (
                <button
                  key={b}
                  type="button"
                  onClick={() => toggleBaustein(b, "gut")}
                  aria-pressed={verwendet}
                  className={chipClass(verwendet)}
                >
                  {verwendet ? "✓ " : "+ "}
                  {b}
                </button>
              );
            })}
          </div>
        )}
        <textarea
          id="gutText"
          name="gutText"
          required
          rows={3}
          maxLength={1000}
          value={gutText}
          onChange={(e) => setGutText(e.target.value)}
          placeholder="Zum Beispiel das Team, die Behandlung oder die Atmosphäre …"
          className={cn(inputBase, "mt-2 resize-y")}
        />
      </div>

      <div>
        <label htmlFor="besserText" className={labelBase}>
          Was können wir verbessern? <span className="text-brand-red">*</span>
        </label>
        {sterne > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() =>
                setBesserText((t) =>
                  t.trim() === NICHTS_ZU_VERBESSERN ? "" : NICHTS_ZU_VERBESSERN,
                )
              }
              aria-pressed={besserText.trim() === NICHTS_ZU_VERBESSERN}
              className={chipClass(besserText.trim() === NICHTS_ZU_VERBESSERN)}
            >
              {besserText.trim() === NICHTS_ZU_VERBESSERN ? "✓ " : "🐝 "}
              {NICHTS_ZU_VERBESSERN}
            </button>
            {sterne <= 3 &&
              besserBausteine.map((b) => {
                const verwendet = benutzt.includes(b);
                return (
                  <button
                    key={b}
                    type="button"
                    onClick={() => toggleBaustein(b, "besser")}
                    aria-pressed={verwendet}
                    className={chipClass(verwendet)}
                  >
                    {verwendet ? "✓ " : "+ "}
                    {b}
                  </button>
                );
              })}
          </div>
        )}
        <textarea
          id="besserText"
          name="besserText"
          required
          rows={3}
          maxLength={1000}
          value={besserText}
          onChange={(e) => setBesserText(e.target.value)}
          placeholder="Sagen Sie es uns ehrlich, wir möchten besser werden."
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

      <fieldset>
        <legend className={labelBase}>
          Wann waren Sie bei uns?{" "}
          <span className="text-graphite-soft">(optional)</span>
        </legend>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {wannOptionen.map((o) => (
            <button
              key={o.key}
              type="button"
              onClick={() => setWannWahl(o.key)}
              aria-pressed={wannWahl === o.key}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                wannWahl === o.key
                  ? "border-brand-navy bg-brand-navy text-white"
                  : "border-border-strong bg-white text-brand-navy hover:border-brand-red hover:text-brand-red",
              )}
            >
              {o.label}
            </button>
          ))}
          {wannWahl === "anders" && (
            <input
              type="date"
              aria-label="Datum Ihres Besuchs"
              value={wannDatum}
              max={new Date().toISOString().slice(0, 10)}
              onChange={(e) => setWannDatum(e.target.value)}
              className={cn(inputBase, "w-auto")}
            />
          )}
        </div>
        <p className="mt-1.5 text-xs text-graphite-soft">
          Hilft uns, Ihr Feedback einzuordnen. Wird nicht veröffentlicht.
        </p>
      </fieldset>

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
