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
    email: "info@physiotherapie-mally.de",
  },
  // Öffnungszeiten (Therapie- und Anmeldezeiten kombiniert)
  hours: [
    { days: "Mo, Mi", time: "07:30 – 19:00 Uhr" },
    { days: "Di, Do", time: "07:30 – 16:30 Uhr" },
    { days: "Fr", time: "07:30 – 15:00 Uhr" },
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
  { label: "Ratgeber", href: "/ratgeber" },
  { label: "Karriere", href: "/karriere" },
  { label: "Kontakt", href: "/kontakt" },
] as const;
