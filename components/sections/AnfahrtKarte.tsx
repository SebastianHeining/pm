"use client";

import { useState } from "react";
import { AnfahrtsSkizze } from "@/components/sections/AnfahrtsSkizze";

/**
 * Umschalter zwischen der reduzierten Park-Skizze (Standard) und dem
 * OpenStreetMap-Stadtplan. Der OSM-iframe wird erst beim Umschalten
 * gemountet — die Verbindung zu OpenStreetMap entsteht also erst nach
 * einem bewussten Klick.
 */
export function AnfahrtKarte() {
  const [ansicht, setAnsicht] = useState<"skizze" | "karte">("skizze");

  const tabClass = (aktiv: boolean) =>
    `rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
      aktiv
        ? "bg-brand-navy text-white"
        : "text-graphite hover:text-brand-red"
    }`;

  return (
    <div className="overflow-hidden rounded-3xl border border-border-soft bg-surface-warm">
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
          {ansicht === "skizze" ? "Parken auf einen Blick" : "Stadtplan"}
        </p>
        <div
          role="group"
          aria-label="Kartenansicht wählen"
          className="flex rounded-full border border-border-soft bg-white p-1"
        >
          <button
            type="button"
            onClick={() => setAnsicht("skizze")}
            aria-pressed={ansicht === "skizze"}
            className={tabClass(ansicht === "skizze")}
          >
            Skizze
          </button>
          <button
            type="button"
            onClick={() => setAnsicht("karte")}
            aria-pressed={ansicht === "karte"}
            className={tabClass(ansicht === "karte")}
          >
            Karte
          </button>
        </div>
      </div>
      {ansicht === "skizze" ? (
        <AnfahrtsSkizze className="w-full" />
      ) : (
        /* Koordinaten Hammer Str. 90a (Ärztehaus), Bockum-Hövel —
           via OSM/Nominatim verifiziert: 51.6940, 7.7468 */
        <iframe
          title="Standort der Praxis auf einer Karte (OpenStreetMap)"
          src="https://www.openstreetmap.org/export/embed.html?bbox=7.7408%2C51.6900%2C7.7528%2C51.6980&layer=mapnik&marker=51.6940%2C7.7468"
          className="aspect-[1000/760] w-full"
        />
      )}
    </div>
  );
}
