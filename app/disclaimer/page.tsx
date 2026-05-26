import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Disclaimer",
  robots: { index: false, follow: false },
  description: "Haftungsausschluss für externe Links und medizinische Hinweise.",
};

export default function Disclaimer() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Disclaimer"
        lead="Haftungshinweise zu externen Inhalten und medizinischer Beratung."
      />
      <Section spacing="default">
        <Container size="narrow">
          <article className="space-y-8 text-base leading-relaxed text-graphite">
            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">
                Medizinischer Hinweis
              </h2>
              <p className="mt-3">
                Die Inhalte dieser Webseite, einschließlich Ratgeberartikel und
                Beschreibungen unserer Leistungen, dienen ausschließlich der
                allgemeinen Information. Sie ersetzen keine individuelle
                ärztliche oder physiotherapeutische Beratung, Diagnose oder
                Behandlung. Bei Beschwerden suchen Sie bitte eine Ärztin, einen
                Arzt oder eine fachkundige Therapeutin auf.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">
                Haftung für Links
              </h2>
              <p className="mt-3">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">
                Verfügbarkeit
              </h2>
              <p className="mt-3">
                Wir bemühen uns um eine durchgängige Verfügbarkeit dieser
                Webseite. Eine Haftung oder Garantie für eine permanente
                Verfügbarkeit kann jedoch nicht übernommen werden.
              </p>
            </section>
          </article>
        </Container>
      </Section>
    </>
  );
}
