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
    color: { dark: "#152D47", light: "#FFFFFF" },
  });

  return (
    <div className="mx-auto flex min-h-[270mm] max-w-[190mm] flex-col items-center justify-between py-10 text-center print:py-0">
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
        <p className="text-2xl font-semibold tracking-tight text-brand-navy">
          Astrid Mally
        </p>
      </div>

      <div className="my-10">
        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-brand-navy">
          Wie war Ihr Besuch
          <span className="block text-brand-red">bei uns?</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-graphite">
          Wir freuen uns über Ihre Bewertung — ganz ohne Google-Konto, in
          unter zwei Minuten. Einfach den QR-Code mit der Handy-Kamera
          scannen.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div
          aria-label={`QR-Code für ${BEWERTUNG_URL}`}
          className="rounded-3xl border-4 border-brand-navy bg-white p-6"
          dangerouslySetInnerHTML={{ __html: qr }}
        />
        <p className="mt-5 text-base font-semibold text-brand-navy">
          {BEWERTUNG_URL.replace("https://", "")}
        </p>
      </div>

      <p className="mt-10 flex items-center gap-2 text-base font-medium text-brand-red">
        <span aria-hidden className="text-xl">♥</span>
        Vielen Dank — Ihre Meinung hilft uns und anderen Patient:innen!
      </p>
    </div>
  );
}
