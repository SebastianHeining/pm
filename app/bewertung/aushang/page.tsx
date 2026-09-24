import type { Metadata } from "next";
import Image from "next/image";
import QRCode from "qrcode";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Bewertungs-Aushang (Druckversion)",
  robots: { index: false, follow: false },
};

const BEWERTUNG_URL = `${siteConfig.url}/bewertung`;

export default async function BewertungAushang() {
  const qr = await QRCode.toString(BEWERTUNG_URL, {
    type: "svg",
    margin: 0,
    width: 280,
    color: { dark: "#544F4A", light: "#FFFFFF" },
  });

  return (
    <div className="mx-auto flex min-h-[270mm] max-w-[190mm] flex-col items-center justify-between py-10 text-center print:py-0">
      {/* Erzwingt A4-Hochformat im Druckdialog und bei PDF-Export */}
      <style>{"@page { size: A4 portrait; margin: 10mm; }"}</style>
      {/* Druck-Hinweis — verschwindet beim Drucken */}
      <p className="mb-8 w-full rounded-xl bg-surface-warm px-4 py-3 text-sm text-graphite print:hidden">
        Diese Seite ist als Aushang gedacht: Mit <strong>Strg + P</strong>{" "}
        drucken (A4, Hochformat). Kopf- und Fußzeilen im Druckdialog
        deaktivieren.
      </p>

      <div className="flex flex-col items-center">
        <Image
          src="/assets/logo/logo-am.png"
          alt="Praxis für Physiotherapie Astrid Mally"
          width={110}
          height={110}
          className="rounded-full"
        />
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-graphite-soft">
          Praxis für Physiotherapie
        </p>
        <p className="text-3xl font-semibold tracking-tight text-brand-navy">
          Astrid Mally
        </p>
      </div>

      <div className="my-10">
        {/* Kleine Biene mit Flugspur über der Überschrift */}
        <svg
          width="250"
          height="84"
          viewBox="0 0 250 84"
          aria-hidden
          className="mx-auto -mb-1 translate-x-12"
        >
          <path
            d="M 10 70 C 44 24 96 16 98 44 C 100 66 70 72 66 52 C 61 28 118 12 170 30"
            fill="none"
            stroke="#8A857E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="0.5 8"
            opacity="0.6"
          />
          <g transform="translate(180 14) rotate(-14) scale(1.4)">
            <ellipse cx="10" cy="5.5" rx="3.6" ry="5" fill="#dceefb" opacity="0.9" />
            <ellipse cx="15.5" cy="5.5" rx="3.6" ry="5" fill="#eef7fd" opacity="0.9" />
            <ellipse cx="12.5" cy="13.5" rx="8.5" ry="6.5" fill="#f2b705" />
            <path d="M9 7.6c-1.6 3.4-1.6 8.4 0 11.8" stroke="#423e39" strokeWidth="2.4" fill="none" />
            <path d="M14 7.2c-1.8 3.8-1.8 9 0 12.6" stroke="#423e39" strokeWidth="2.4" fill="none" />
            <circle cx="20.5" cy="12.5" r="3.6" fill="#423e39" />
            <circle cx="21.8" cy="11.4" r="0.9" fill="#fff" />
            <path d="M4.5 13.5L1 12.7l3.3 2.2z" fill="#423e39" />
          </g>
        </svg>
        <h1 className="text-balance text-5xl font-semibold leading-tight tracking-tight text-brand-navy">
          Wie war Ihr Besuch
          <span className="block text-brand-red">bei uns?</span>
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-xl leading-relaxed text-graphite">
          Wir freuen uns über Ihre Bewertung. Ganz ohne Google-Konto und in
          unter zwei Minuten: Einfach den QR-Code mit der Handy-Kamera
          scannen.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div
          aria-label={`QR-Code für ${BEWERTUNG_URL}`}
          className="rounded-3xl border-4 border-brand-navy bg-white p-6"
          dangerouslySetInnerHTML={{ __html: qr }}
        />
        <p className="mt-5 text-xl font-semibold text-brand-navy">
          {BEWERTUNG_URL.replace("https://", "")}
        </p>
      </div>

      <p className="mt-10 text-center">
        <span className="flex items-center justify-center gap-3 text-2xl font-semibold text-brand-red">
          <span aria-hidden>♥</span>
          Vielen Dank!
        </span>
        <span className="mt-1.5 block text-xl font-medium text-brand-navy">
          Ihre Meinung hilft uns und anderen Patient:innen.
        </span>
      </p>
    </div>
  );
}
