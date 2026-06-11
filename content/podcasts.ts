export type PodcastEmpfehlung = {
  titel: string;
  von: string;
  beschreibung: string;
  // Verifizierter Link — nur dann wird ein QR-Code erzeugt.
  url?: string;
  // Suchhinweis, falls (noch) kein verifizierter Link vorliegt.
  suchhinweis?: string;
};

// Empfehlungen von Astrid Mally (Kunden-Feedback Juni 2026,
// Links vervollständigt in Feedbackrunde 2 — Doc Felix auf Kundenwunsch entfernt).
// QR-Codes werden zur Build-Zeit aus `url` generiert.
export const podcastEmpfehlungen: PodcastEmpfehlung[] = [
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
    url: "https://open.spotify.com/show/7yOMktbkgZjUp3aqga7Xg5",
  },
  {
    titel: "Momentmal",
    von: "Franziska Behlert",
    beschreibung:
      "Geführte Meditationen zum Runterkommen — eine wohltuende Ergänzung zu jeder Therapie.",
    url: "https://open.spotify.com/show/2eQ83s94SIwSOGLjcktjEl",
  },
];
