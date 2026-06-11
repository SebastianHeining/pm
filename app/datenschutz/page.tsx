import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: true, follow: false },
  description: "Informationen zur Verarbeitung personenbezogener Daten auf physiotherapie-mally.de.",
};

export default function Datenschutz() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        lead="Wir gehen sorgsam mit Ihren Daten um. Hier erklären wir, welche Daten beim Besuch dieser Webseite verarbeitet werden — und warum."
      />

      <Section spacing="default">
        <Container size="narrow">
          <article className="space-y-10 text-base leading-relaxed text-graphite">
            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">
                1. Verantwortliche Stelle
              </h2>
              <p className="mt-3">
                {siteConfig.name}
                <br />
                Inhaberin: Astrid Mally
                <br />
                {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
                {siteConfig.address.city}-{siteConfig.address.district}
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
                2. Welche Daten verarbeiten wir beim Besuch der Seite?
              </h2>
              <p className="mt-3">
                Beim bloßen Aufruf dieser Website werden durch unseren Provider
                technisch erforderliche Server-Log-Daten verarbeitet
                (IP-Adresse, Zeitpunkt der Anfrage, abgerufene Ressource,
                User-Agent). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an einem sicheren Betrieb).
                Speicherdauer: maximal 7 Tage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">
                3. Kontaktformular & E-Mail
              </h2>
              <p className="mt-3">
                Wenn Sie uns über das Kontaktformular oder per E-Mail eine
                Anfrage zukommen lassen, werden Ihre Angaben (Name,
                Kontaktdaten, Nachricht) zur Bearbeitung der Anfrage gespeichert.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung
                eines Behandlungsvertrags) bzw. Art. 6 Abs. 1 lit. a DSGVO
                (Einwilligung). Die Daten löschen wir, sobald die Bearbeitung
                abgeschlossen ist und keine gesetzlichen Aufbewahrungspflichten
                entgegenstehen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">
                4. 3D-Praxisrundgang (Matterport)
              </h2>
              <p className="mt-3">
                Auf der Praxis-Seite bieten wir einen interaktiven 3D-Rundgang
                an, der bei aktiver Einwilligung von einem Server der Matterport
                Inc. (USA) geladen wird. Dabei werden technische Daten
                (insbesondere Ihre IP-Adresse) an Matterport übertragen. Der
                Rundgang lädt erst nach einem ausdrücklichen Klick auf
                „Rundgang laden“. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO
                (Einwilligung). Sie können Ihre Einwilligung jederzeit
                widerrufen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">
                5. Schriftarten (DM Sans)
              </h2>
              <p className="mt-3">
                Diese Seite verwendet die Schriftart „DM Sans“. Sie wird beim
                Build der Seite einmalig vom Anbieter bezogen und anschließend{" "}
                <strong>lokal auf unserem Server</strong> ausgeliefert. Es findet
                also keine Verbindung Ihres Browsers zu externen
                Schriftarten-Servern (z. B. Google Fonts) statt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">
                6. Cookies & Tracking
              </h2>
              <p className="mt-3">
                Diese Webseite setzt keine Marketing-Cookies und nutzt kein
                Tracking durch Drittanbieter. Es werden ausschließlich
                technisch notwendige Cookies eingesetzt, sofern dies für den
                Betrieb erforderlich ist.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">
                7. Patient:innen-Bewertungen
              </h2>
              <p className="mt-3">
                Über das Formular auf der Seite „Bewertung“ können Sie uns
                freiwillig eine Bewertung übermitteln (Sterne, Text, optional
                Name und Ort). Die Angaben werden uns per E-Mail zugestellt und
                nur mit Ihrer ausdrücklichen Einwilligung — ggf. gekürzt — auf
                dieser Webseite veröffentlicht. Rechtsgrundlage ist Art. 6
                Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit mit
                Wirkung für die Zukunft widerrufen; wir entfernen die
                Bewertung dann zeitnah von der Webseite. Ein Anspruch auf
                Veröffentlichung besteht nicht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">
                8. Ihre Rechte
              </h2>
              <p className="mt-3">
                Sie haben das Recht auf Auskunft (Art. 15 DSGVO),
                Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO),
                Einschränkung der Verarbeitung (Art. 18 DSGVO), Widerspruch
                (Art. 21 DSGVO) sowie Datenübertragbarkeit (Art. 20 DSGVO).
                Erteilte Einwilligungen können Sie jederzeit mit Wirkung für
                die Zukunft widerrufen. Außerdem steht Ihnen ein Beschwerderecht
                bei einer Aufsichtsbehörde zu (in NRW: Landesbeauftragte für
                Datenschutz und Informationsfreiheit NRW).
              </p>
            </section>

            <p className="text-sm text-graphite-soft">
              <strong>Hinweis:</strong> Diese Datenschutzerklärung ist ein
              Vorschlag und ersetzt keine individuelle Prüfung. Bitte vor dem
              Live-Gang durch einen Datenschutzbeauftragten bzw. eine Anwältin
              prüfen lassen — insbesondere wegen Matterport-Einbindung und
              eventueller Patient:innendaten.
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}
