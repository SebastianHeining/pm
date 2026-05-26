import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import {
  Section,
  SectionEyebrow,
  SectionHeading,
  SectionLead,
} from "@/components/ui/Section";
import { Card, CardBody, CardTitle } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { Quote } from "@/components/ui/Quote";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Karriere bei Praxis Mally",
  description:
    "Physiotherapeut:in (m/w/d) in Voll- oder Teilzeit gesucht. Eine Praxis mit Herz, fairer Bezahlung und planbaren Arbeitszeiten in Hamm-Bockum-Hövel.",
};

const werte = [
  {
    title: "Wertschätzung & Teamkultur",
    body: "Bei uns wirst du als Mensch und Fachkraft geschätzt. Wir pflegen einen respektvollen Umgang auf Augenhöhe und unterstützen uns gegenseitig — regelmäßige Teamevents stärken den Zusammenhalt.",
  },
  {
    title: "Fortbildungen & Entwicklung",
    body: "Deine fachliche Weiterentwicklung liegt uns am Herzen. Wir unterstützen dich bei Fortbildungen und geben dir Raum, Spezialisierungen aufzubauen — damit du wachsen kannst und unsere Patient:innen profitieren.",
  },
  {
    title: "Planbare Arbeitszeiten",
    body: "Work-Life-Balance ist uns wichtig. Faire Dienstpläne, verlässliche Zeiten, Teilzeitmodelle möglich. Sprich uns an — wir finden einen Rahmen, der zu deinem Leben passt.",
  },
  {
    title: "Moderne Praxisräume",
    body: "Helle, freundliche Räume und moderne Ausstattung. Kurze Wege, durchdachte Abläufe — damit du dich auf die Therapie konzentrieren kannst.",
  },
  {
    title: "Eigenverantwortung & Unterstützung",
    body: "Wir vertrauen auf deine fachliche Kompetenz und geben dir Raum für eigenverantwortliches Arbeiten. Gleichzeitig stehen wir dir mit Rat und Tat zur Seite.",
  },
  {
    title: "Spezialisierung möglich",
    body: "Lust auf CMD, Skoliose-Therapie nach Schroth, Lymphdrainage oder Beckenboden-Schwerpunkt? Wir fördern Spezialisierungen, die zu dir und zu unserem Patient:innen-Mix passen.",
  },
];

export default function Karriere() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", href: "/" },
          { name: "Karriere", href: "/karriere" },
        ])}
      />

      <PageHero
        eyebrow="Arbeiten bei Praxis Mally"
        title={
          <>
            Werde Teil eines Teams,
            <span className="block text-brand-red">das mit Herz arbeitet.</span>
          </>
        }
        lead="Du bist Physiotherapeut:in und suchst eine Praxis in Hamm-Bockum-Hövel, in der du dich fachlich und persönlich entfalten kannst? Dann bist du bei uns richtig."
      />

      <Section spacing="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <SectionEyebrow>Wir suchen Verstärkung</SectionEyebrow>
              <SectionHeading>Physiotherapeut:in (m/w/d)</SectionHeading>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-graphite">
                <p>
                  <strong className="text-brand-navy">Standort:</strong>{" "}
                  Hamm-Bockum-Hövel · {siteConfig.address.street}
                </p>
                <p>
                  <strong className="text-brand-navy">Anstellung:</strong> Voll-
                  oder Teilzeit, individuell verhandelbar
                </p>
                <p>
                  <strong className="text-brand-navy">Start:</strong> sofort
                  oder nach Absprache
                </p>
                <p>
                  Wir bieten dir ein Arbeitsumfeld, in dem Wertschätzung,
                  fachliche Weiterentwicklung und eine gesunde Work-Life-Balance
                  im Mittelpunkt stehen.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <LinkButton
                  href={`mailto:${siteConfig.contact.email}?subject=Bewerbung%20Physiotherapeut:in%20bei%20Praxis%20Mally`}
                  size="lg"
                >
                  Jetzt bewerben
                </LinkButton>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="text-base font-medium text-brand-navy underline underline-offset-4 hover:text-brand-red"
                >
                  Oder anrufen: {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>

            <Card tone="warm">
              <CardTitle as="h3">Was wir uns von dir wünschen</CardTitle>
              <ul className="mt-5 space-y-3 text-base leading-relaxed text-graphite">
                {[
                  "Staatlich anerkannte Ausbildung als Physiotherapeut:in",
                  "Lust auf langfristige Patient:innen-Beziehungen",
                  "Offenheit für Teamarbeit und kollegialen Austausch",
                  "Bereitschaft, dich kontinuierlich fortzubilden",
                  "Idealerweise Zusatzqualifikationen wie Manuelle Therapie, CMD, Lymphdrainage o. Ä. — oder das Interesse, sie sich anzueignen",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-brand-red"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="warm" spacing="default">
        <Container>
          <SectionEyebrow>Was du bei uns findest</SectionEyebrow>
          <SectionHeading>Sechs gute Gründe für Praxis Mally.</SectionHeading>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {werte.map((w) => (
              <Card key={w.title} tone="white">
                <CardTitle>{w.title}</CardTitle>
                <CardBody>{w.body}</CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container size="narrow">
          <Quote attribution="Astrid Mally, Praxisinhaberin">
            In unserer Praxis schätzen wir nicht nur die fachliche Kompetenz,
            sondern auch die menschliche Komponente. Wir suchen Therapeut:innen,
            die mit Herz und Verstand bei der Sache sind und unser Team
            bereichern.
          </Quote>
        </Container>
      </Section>

      <Section tone="navy" spacing="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <SectionEyebrow>
                <span className="text-brand-red-soft">So geht's weiter</span>
              </SectionEyebrow>
              <SectionHeading className="text-white">
                Lust auf ein Gespräch?
              </SectionHeading>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                Schick uns deine Unterlagen oder ruf einfach an. Auch ohne
                vollständige Bewerbung sind wir offen für ein erstes
                Kennenlernen — vielleicht passt es ja.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <LinkButton
                  href={`mailto:${siteConfig.contact.email}?subject=Bewerbung%20Physiotherapeut:in%20bei%20Praxis%20Mally`}
                  variant="onNavy"
                  size="lg"
                >
                  Bewerbung per E-Mail
                </LinkButton>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="text-lg font-medium text-white underline underline-offset-4 hover:text-brand-red-soft"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-red-soft">
                Praxis Mally
              </p>
              <p className="mt-3 text-white">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}-{siteConfig.address.district}
              </p>
              <p className="mt-4 text-white/80">
                E-Mail:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="underline underline-offset-4 hover:text-brand-red-soft"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
