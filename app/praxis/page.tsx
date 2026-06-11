import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import {
  Section,
  SectionEyebrow,
  SectionHeading,
  SectionLead,
} from "@/components/ui/Section";
import { Card, CardBody, CardTitle } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { MatterportEmbed } from "@/components/sections/MatterportEmbed";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Unsere Praxis",
  description:
    "Familiäre Atmosphäre, moderne Praxisräume und ein 3D-Rundgang: Lernen Sie die Praxis Mally in Hamm-Bockum-Hövel kennen.",
};

const werte = [
  {
    title: "Spezialisierung & Qualität",
    body: "Expertise in CMD-Therapie, Manueller Therapie und spezialisierter Schmerzphysiotherapie — gestützt durch kontinuierliche Fortbildung.",
  },
  {
    title: "Familiäre Atmosphäre",
    body: "Wir nehmen uns Zeit. Wertschätzung, Zuhören und ein Raum, in dem sich Patient:innen ernst genommen fühlen, sind Teil unseres Selbstverständnisses.",
  },
  {
    title: "Empathisch & ressourcenorientiert",
    body: "Ihre Stärken und Bedürfnisse stehen im Mittelpunkt. Jeder Therapieplan ist individuell und nutzt das, was Ihr Körper schon kann.",
  },
  {
    title: "Transparente Kommunikation",
    body: "Wir erklären verständlich, was wir tun und warum — auf Augenhöhe und immer nachvollziehbar. So bleiben Sie Teil Ihrer Therapie.",
  },
];

export default function PraxisPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", href: "/" },
          { name: "Praxis", href: "/praxis" },
        ])}
      />
      <Section tone="warm" spacing="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div>
              <SectionEyebrow>
                Seit {siteConfig.founded} in Hamm-Bockum-Hövel
              </SectionEyebrow>
              <SectionHeading as="h1" className="mt-6">
                Ein Ort, an dem Therapie wirkt —
                <span className="block text-brand-red">
                  weil sie persönlich bleibt.
                </span>
              </SectionHeading>
              <SectionLead>
                Mit über zwei Jahrzehnten Erfahrung bieten wir professionelle
                Physiotherapie in einer angenehmen, familiären Atmosphäre.
                Unsere Praxis ist barrierefrei zugänglich – wir freuen uns auf
                Ihren Besuch.
              </SectionLead>
            </div>
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                <span className="h-px w-8 bg-brand-red" />
                Virtueller 3D-Rundgang
              </p>
              <MatterportEmbed />
              <p className="mt-4 text-sm leading-relaxed text-graphite-soft">
                Schauen Sie sich vorab um — klicken Sie sich durch
                Behandlungsräume, Gerätebereich und Wartebereich.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container>
          <SectionEyebrow>Worauf wir achten</SectionEyebrow>
          <SectionHeading>Unsere vier Grundüberzeugungen</SectionHeading>
          <SectionLead>
            Therapie ist mehr als Technik. Diese Werte prägen, wie wir
            mit unseren Patient:innen und im Team arbeiten.
          </SectionLead>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {werte.map((w) => (
              <Card key={w.title} tone="warm">
                <CardTitle>{w.title}</CardTitle>
                <CardBody>{w.body}</CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container>
          <SectionEyebrow>Einblicke</SectionEyebrow>
          <SectionHeading>Aus unseren Räumen.</SectionHeading>
          <SectionLead>
            Hell, freundlich und mit kurzen Wegen — ein paar Eindrücke aus dem
            3D-Rundgang. Noch mehr sehen Sie oben im virtuellen Rundgang.
          </SectionLead>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/praxis/empfang.jpg", alt: "Empfangsbereich mit Tresen und Blick zum Wartebereich", caption: "Empfang" },
              { src: "/praxis/behandlungsraum.jpg", alt: "Behandlungsraum mit Liege und Schlingentisch", caption: "Behandlungsraum" },
              { src: "/praxis/therapieraum.jpg", alt: "Therapieraum mit Liege, Sprossenwand und Übungsgeräten", caption: "Therapieraum mit Sprossenwand" },
            ].map((img) => (
              <figure key={img.src} className="overflow-hidden rounded-2xl border border-border-soft bg-white">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm font-medium text-brand-navy">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="warm" spacing="default">
        <Container>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <SectionEyebrow>Unser Team</SectionEyebrow>
              <SectionHeading className="mt-4 max-w-2xl">
                Die Menschen, die hier täglich für Sie da sind.
              </SectionHeading>
            </div>
            <LinkButton href="/praxis/team" variant="secondary">
              Team kennenlernen
            </LinkButton>
          </div>
        </Container>
      </Section>

      <Section tone="navy" spacing="default">
        <Container>
          <SectionEyebrow>Lust auf einen ersten Eindruck?</SectionEyebrow>
          <SectionHeading>
            Vereinbaren Sie einen Termin und kommen Sie persönlich vorbei.
          </SectionHeading>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <LinkButton href="/kontakt" size="lg">
              Terminanfrage stellen
            </LinkButton>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="text-lg font-medium text-brand-navy underline underline-offset-4 hover:text-brand-red"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
