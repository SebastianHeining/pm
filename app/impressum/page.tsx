import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: true, follow: false },
  description: "Impressum der Praxis für Physiotherapie Astrid Mally.",
};

export default function Impressum() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        lead="Angaben gemäß § 5 DDG."
      />
      <Section spacing="default">
        <Container size="narrow">
          <article className="prose-content space-y-8 text-base leading-relaxed text-graphite">
            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">Diensteanbieter</h2>
              <p className="mt-3">
                {siteConfig.name}
                <br />
                Inhaberin: Astrid Mally
                <br />
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}-{siteConfig.address.district}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">Kontakt</h2>
              <p className="mt-3">
                Telefon:{" "}
                <a
                  className="underline underline-offset-2 hover:text-brand-red"
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
                <br />
                Telefax: 02381 / 5444 - 534
                <br />
                E-Mail:{" "}
                <a
                  className="underline underline-offset-2 hover:text-brand-red"
                  href={`mailto:${siteConfig.contact.email}`}
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">
                Berufsbezeichnung & berufsrechtliche Regelungen
              </h2>
              <p className="mt-3">
                <strong>Berufsbezeichnung:</strong> Physiotherapeutin
                <br />
                <strong>Verliehen in:</strong> Bundesrepublik Deutschland
              </p>
              <p className="mt-3">
                Es gelten folgende berufsrechtliche Regelungen:
                Masseur- und Physiotherapeutengesetz (MPhG) sowie die
                Heilmittel-Richtlinien des Gemeinsamen Bundesausschusses (G-BA).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">
                Zuständige Aufsichtsbehörde
              </h2>
              <p className="mt-3">
                Gesundheitsamt des Kreises Hamm
                <br />
                Gustav-Heinemann-Straße 10
                <br />
                59065 Hamm
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-3">
                Astrid Mally
                <br />
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}-{siteConfig.address.district}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">
                EU-Streitschlichtung
              </h2>
              <p className="mt-3">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  className="underline underline-offset-2 hover:text-brand-red"
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ec.europa.eu/consumers/odr
                </a>
                . Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">
                Haftung für Inhalte
              </h2>
              <p className="mt-3">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">
                Urheberrecht
              </h2>
              <p className="mt-3">
                Die durch die Seitenbetreiberin erstellten Inhalte und Werke
                auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
                schriftlichen Zustimmung der Verfasserin.
              </p>
            </section>

            <p className="text-sm text-graphite-soft">
              <strong>Hinweis:</strong> Dieses Impressum ist ein Vorschlag und
              ersetzt keine rechtliche Beratung. Bitte vor dem Live-Gang durch
              die Praxis prüfen lassen.
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}
