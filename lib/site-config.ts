export const siteConfig = {
  name: "Physiotherapie Astrid Mally",
  shortName: "Praxis Mally",
  tagline: "individuell, empathisch, wirkungsvoll",
  description:
    "Seit 2000 für Ihre Gesundheit und Beweglichkeit in Hamm-Bockum-Hövel.",
  founded: 2000,
  url: "https://physiotherapie-mally.de",
  address: {
    street: "Hammer Str. 90a",
    postalCode: "59075",
    city: "Hamm",
    district: "Bockum-Hövel",
    country: "DE",
  },
  contact: {
    phone: "+49 2381 5444533",
    phoneDisplay: "02381 / 5444 - 533",
    fax: "+49 2381 5444534",
    // FB2: info@physiotherapie-mally.de existiert (noch) nicht —
    // aktives Postfach der Praxis ist die t-online-Adresse.
    email: "praxis-astrid-mally@t-online.de",
  },
  // Behandlungszeiten (so lange wird therapiert)
  //   (geschütztes Leerzeichen) verhindert den Umbruch „19:00 / Uhr“ auf Mobile
  hours: [
    { days: "Mo, Mi", time: "07:30 – 19:00 Uhr" },
    { days: "Di, Do", time: "07:30 – 16:30 Uhr" },
    { days: "Fr", time: "07:30 – 15:00 Uhr" },
  ],
  // Büro- & Anmeldezeiten — der Empfang ist kürzer besetzt als behandelt
  // wird; außerhalb springt der Anrufbeantworter ein
  officeHours: [
    { days: "Mo, Di, Do", time: "07:30 – 16:00 Uhr" },
    { days: "Mi, Fr", time: "07:30 – 14:00 Uhr" },
  ],
  matterportEmbed: "https://my.matterport.com/show/?m=QbLa5s7ChXh",
  social: {} as Record<string, string>,
  legal: {
    licensed: "Zugelassen für alle gesetzlichen und privaten Krankenkassen.",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const navigation = [
  { label: "Praxis", href: "/praxis" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Team", href: "/praxis/team" },
  // FB4: Ratgeber vorerst ausgeblendet — die Praxis möchte den Blog
  // aktuell nicht aktiv pflegen (Redirects in next.config.ts)
  { label: "Karriere", href: "/karriere" },
  { label: "Bewertung", href: "/bewertung" },
  { label: "Kontakt", href: "/kontakt" },
] as const;
