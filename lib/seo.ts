import { siteConfig } from "./site-config";

const dayMap: Record<string, string[]> = {
  "Mo": ["Monday"],
  "Di": ["Tuesday"],
  "Mi": ["Wednesday"],
  "Do": ["Thursday"],
  "Fr": ["Friday"],
};

function expandDays(label: string): string[] {
  return label
    .split(/[,\s]+/)
    .filter(Boolean)
    .flatMap((d) => dayMap[d] ?? []);
}

function timeRange(time: string): { opens: string; closes: string } {
  const [from, to] = time.replace(/\s*Uhr\s*/i, "").split("–").map((t) => t.trim());
  return { opens: from, closes: to };
}

export function medicalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Physiotherapist"],
    "@id": `${siteConfig.url}#praxis`,
    name: siteConfig.name,
    legalName: "Praxis für Physiotherapie Astrid Mally",
    description: siteConfig.description,
    foundingDate: String(siteConfig.founded),
    url: siteConfig.url,
    image: `${siteConfig.url}/assets/logo/logo-am-wortmarke.jpg`,
    logo: `${siteConfig.url}/assets/logo/logo-am.png`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: `${siteConfig.address.city}-${siteConfig.address.district}`,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    openingHoursSpecification: siteConfig.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: expandDays(h.days),
      ...timeRange(h.time),
    })),
    priceRange: "$$",
    medicalSpecialty: [
      "Physiotherapy",
      "ManualTherapy",
      "Rehabilitation",
    ],
    areaServed: {
      "@type": "City",
      name: "Hamm",
    },
  } as const;
}

export function faqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

export function personJsonLd(person: {
  name: string;
  jobTitle: string;
  imagePath?: string;
  qualifications?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    image: person.imagePath ? `${siteConfig.url}${person.imagePath}` : undefined,
    worksFor: {
      "@type": "MedicalBusiness",
      "@id": `${siteConfig.url}#praxis`,
    },
    hasCredential: person.qualifications?.map((q) => ({
      "@type": "EducationalOccupationalCredential",
      name: q,
    })),
  };
}

