import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import {
  Section,
  SectionEyebrow,
  SectionHeading,
  SectionLead,
} from "@/components/ui/Section";
import { Card, CardBody, CardTitle } from "@/components/ui/Card";
import { ContactForm } from "@/components/sections/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, medicalBusinessJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt",
  description:
    "So erreichen Sie die Praxis für Physiotherapie Astrid Mally in Hamm-Bockum-Hövel — Telefon, Adresse, Anfahrt und Online-Terminanfrage.",
};

const mapsQuery = encodeURIComponent(
  `${siteConfig.name}, ${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}-${siteConfig.address.district}`,
);

export default function Kontakt() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Start", href: "/" },
            { name: "Kontakt", href: "/kontakt" },
          ]),
          medicalBusinessJsonLd(),
        ]}
      />

      <Section tone="warm" spacing="loose">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <SectionEyebrow>Kontakt</SectionEyebrow>
              <SectionHeading as="h1">
                So erreichen Sie uns —
                <span className="block text-brand-red">persönlich, schnell, unkompliziert.</span>
              </SectionHeading>
              <SectionLead>
                Wir nehmen uns Zeit für Sie. Rufen Sie an, schreiben Sie uns
                oder kommen Sie während der Öffnungszeiten persönlich in der
                Praxis vorbei.
              </SectionLead>

              <dl className="mt-10 space-y-6">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite-soft">
                    Telefon
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-brand-navy">
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                      className="hover:text-brand-red"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite-soft">
                    E-Mail
                  </dt>
                  <dd className="mt-1 text-lg font-medium text-brand-navy">
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="hover:text-brand-red"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite-soft">
                    Adresse
                  </dt>
                  <dd className="mt-1 text-lg font-medium text-brand-navy">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.postalCode} {siteConfig.address.city}-{siteConfig.address.district}
                  </dd>
                </div>
              </dl>
            </div>

            <Card tone="white" className="p-0 overflow-hidden">
              <div className="p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                  Öffnungszeiten
                </p>
                <p className="mt-2 text-2xl font-semibold text-brand-navy">
                  Anmeldung & Therapie
                </p>
                <ul className="mt-6 space-y-3 text-base">
                  {siteConfig.hours.map((h) => (
                    <li
                      key={h.days}
                      className="flex items-center justify-between gap-6 border-b border-border-soft pb-3 last:border-0"
                    >
                      <span className="font-medium text-brand-navy">{h.days}</span>
                      <span className="text-graphite">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-graphite-soft">
                  Außerhalb dieser Zeiten erreichen Sie unseren
                  Anrufbeantworter — wir rufen schnellstmöglich zurück.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <SectionEyebrow>Anfahrt</SectionEyebrow>
              <SectionHeading>So finden Sie zu uns.</SectionHeading>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-graphite">
                <p>
                  <strong className="text-brand-navy">Mit dem Auto:</strong>{" "}
                  Direkte Zufahrt über die Hammer Straße. Parkplätze finden Sie
                  direkt vor dem Gebäude.
                </p>
                <p>
                  <strong className="text-brand-navy">Parkscheibe nicht vergessen:</strong>{" "}
                  Auf dem großen Kundenparkplatz am Ärztehaus parken Sie 2
                  Stunden kostenlos — bitte legen Sie Ihre Parkscheibe gut
                  sichtbar aus.
                </p>
                <p>
                  <strong className="text-brand-navy">Mit dem Bus:</strong>{" "}
                  Bushaltestelle „Lücke / JuSt", wenige Gehminuten von der Praxis
                  entfernt.
                </p>
                <p>
                  <strong className="text-brand-navy">Barrierefrei:</strong>{" "}
                  Unsere Praxis ist barrierefrei zugänglich.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold text-brand-navy underline underline-offset-4 hover:text-brand-red"
                >
                  In Google Maps öffnen
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border-soft">
              <iframe
                title="Standort der Praxis auf einer Karte (OpenStreetMap)"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=7.7806%2C51.7064%2C7.8006%2C51.7164&layer=mapnik&marker=51.7114%2C7.7906`}
                className="h-[420px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="warm" spacing="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <SectionEyebrow>Terminanfrage</SectionEyebrow>
              <SectionHeading>Schreiben Sie uns.</SectionHeading>
              <SectionLead>
                Schildern Sie uns kurz Ihr Anliegen. Wir melden uns zeitnah
                telefonisch oder per E-Mail zurück, um einen passenden Termin
                zu finden.
              </SectionLead>
            </div>
            <Card tone="white" className="p-8 sm:p-10">
              <CardTitle as="h2">Ihr Kontakt zu uns</CardTitle>
              <CardBody className="mb-6 text-graphite">
                Felder mit{" "}
                <span className="text-brand-red">*</span> sind Pflichtfelder.
              </CardBody>
              <ContactForm />
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
