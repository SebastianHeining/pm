export type PodcastEmpfehlung = {
  titel: string;
  von: string;
  beschreibung: string;
  // Verifizierter Link — nur dann wird ein QR-Code erzeugt.
  url?: string;
  // Suchhinweis, falls (noch) kein verifizierter Link vorliegt.
  suchhinweis?: string;
};

// Empfehlungen von Astrid Mally (Kunden-Feedback Juni 2026).
// QR-Codes werden zur Build-Zeit aus `url` generiert.
export const podcastEmpfehlungen: PodcastEmpfehlung[] = [
  {
    titel: "Doc Felix",
    von: "Felix M. Berndt",
    beschreibung:
      "Medizinwissen verständlich und unterhaltsam — Prävention, Ernährung und gesunde Routinen für den Alltag.",
    url: "https://open.spotify.com/show/52OpQa5o88aTvCxgmDCexz",
  },
  {
    titel: "Unheilbar gesund",
    von: "Ruth Biallowons",
    beschreibung:
      "Impulse für Selbstheilung und ganzheitliche Gesundheit — Themen, die uns in der Praxis täglich begegnen.",
    url: "https://open.spotify.com/show/6YFRpaPCc4XGQRNPbfmVrS",
  },
  {
    titel: "Die Ernährungs-Docs",
    von: "NDR",
    beschreibung:
      "Wie Ernährung Krankheiten lindern kann — fundiert aufbereitet vom bekannten NDR-Ärzteteam.",
    url: "https://www.ndr.de/fernsehen/sendungen/die-ernaehrungsdocs/krankheiten",
  },
  {
    titel: "Neuro 360",
    von: "Schmerzreduktion, Gesundheit & Leistungssteigerung",
    beschreibung:
      "Neurozentrierte Ansätze rund um Schmerz, Beweglichkeit und Leistungsfähigkeit.",
    suchhinweis: "In Ihrer Podcast-App nach „Neuro 360“ suchen",
  },
  {
    titel: "Momentmal",
    von: "Franziska Behlert",
    beschreibung:
      "Geführte Meditationen zum Runterkommen — eine wohltuende Ergänzung zu jeder Therapie.",
    suchhinweis: "In Ihrer Podcast-App nach „Momentmal“ suchen",
  },
];
