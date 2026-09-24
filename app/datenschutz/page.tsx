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
                2. Hosting & technische Bereitstellung
              </h2>
              <p className="mt-3">
                Beim Aufruf dieser Website verarbeitet unser Webserver die
                technisch erforderlichen Verbindungsdaten (insbesondere
                IP-Adresse, Zeitpunkt der Anfrage, abgerufene Ressource,
                User-Agent), soweit dies für die Auslieferung der Seite sowie
                für Stabilität und Sicherheit erforderlich ist. Die Website
                wird auf einem Server in Deutschland betrieben. Rechtsgrundlage
                ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
                einem sicheren Betrieb).
              </p>
              <p className="mt-3">
                Zur Auslieferung und Absicherung der Website nutzen wir den
                Dienst Cloudflare (Cloudflare, Inc., USA). Cloudflare arbeitet
                als technischer Vermittler (Content-Delivery-Netzwerk und
                Schutz vor Angriffen) und verarbeitet dabei Verbindungsdaten
                einschließlich Ihrer IP-Adresse. Die Verarbeitung erfolgt auf
                Grundlage eines Auftragsverarbeitungsvertrags; eine
                Übermittlung in die USA ist durch EU-Standardvertragsklauseln
                und die Zertifizierung von Cloudflare nach dem EU-U.S. Data
                Privacy Framework abgesichert. Rechtsgrundlage: Art. 6 Abs. 1
                lit. f DSGVO (berechtigtes Interesse an einer sicheren und
                performanten Bereitstellung).
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
              <p className="mt-3">
                Sofern Ihre Nachricht Angaben zu Ihrer Gesundheit enthält
                (etwa zu Ihrem Anliegen oder einer ärztlichen Verordnung),
                verarbeiten wir diese auf Grundlage Ihrer ausdrücklichen
                Einwilligung (Art. 9 Abs. 2 lit. a DSGVO), die Sie mit dem
                Absenden des Formulars erteilen. Bitte übermitteln Sie über
                das Formular nur die Angaben, die für die Terminanfrage
                erforderlich sind — Details besprechen wir gern persönlich.
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
                5. Anfahrtskarte (OpenStreetMap)
              </h2>
              <p className="mt-3">
                Auf der Kontaktseite binden wir eine Karte des Dienstes
                OpenStreetMap ein (OpenStreetMap Foundation, Cambridge,
                Vereinigtes Königreich). Die Karte wird erst geladen, wenn
                Sie dort die Ansicht „Karte“ auswählen; dabei wird eine
                Verbindung zu Servern der OpenStreetMap Foundation aufgebaut
                und es werden technische Daten (insbesondere Ihre
                IP-Adresse) übertragen. Wir nutzen die Karte, um Ihnen die
                Anfahrt zur Praxis anschaulich darzustellen. Rechtsgrundlage:
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
                verständlichen Anfahrtsbeschreibung). Für das Vereinigte
                Königreich besteht ein Angemessenheitsbeschluss der
                EU-Kommission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">
                6. Schriftarten (DM Sans)
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
                7. Cookies & Tracking
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
                8. Patient:innen-Bewertungen
              </h2>
              <p className="mt-3">
                Über das Formular auf der Seite „Bewertung“ können Sie uns
                freiwillig eine Bewertung übermitteln (Sterne, Text, optional
                Name und Ort). Die Angaben werden an die Praxis übermittelt und
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
                9. KI-Chat-Assistentin „Biene“
              </h2>
              <p className="mt-3">
                Auf dieser Webseite können Sie freiwillig einen Chat-Assistenten
                nutzen, der allgemeine Fragen zur Praxis beantwortet (z. B.
                Öffnungszeiten, Behandlungsangebot, Ablauf). Die Antworten
                werden durch ein KI-Sprachmodell erzeugt. Dazu werden Ihre
                Chat-Eingaben an unseren Auftragsverarbeiter Anthropic
                (Anthropic PBC, USA — Claude API) übermittelt; die Übermittlung
                in die USA ist durch EU-Standardvertragsklauseln abgesichert.
                Anthropic verwendet über die API übermittelte Inhalte nicht zum
                Training seiner Modelle und speichert sie nur kurzzeitig zur
                Missbrauchsprävention. Wir selbst speichern den Chat-Verlauf
                nicht; er verbleibt in Ihrem Browser bis zum Verlassen der
                Seite. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Ihre
                Einwilligung durch aktive Nutzung). Bitte geben Sie im Chat
                keine Gesundheitsdaten oder andere sensible Informationen ein —
                für persönliche Anliegen erreichen Sie uns telefonisch. Die
                Antworten der KI sind ohne Gewähr und ersetzen keine
                medizinische Beratung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy">
                10. Ihre Rechte
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
              Stand: August 2026. Wir passen diese Datenschutzerklärung an,
              wenn sich die Website oder die eingesetzten Dienste ändern.
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}
