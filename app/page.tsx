import Image from "next/image";
import Link from "next/link";
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
import { JsonLd } from "@/components/JsonLd";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { medicalBusinessJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const usps = [
  {
    title: "Spezialisierung & Qualität",
    body: "Expertise in CMD-Therapie, Manueller Therapie und spezialisierter Schmerzphysiotherapie. Zusatzqualifikationen für eine optimale Behandlung Ihrer Beschwerden.",
  },
  {
    title: "Familiäre Atmosphäre",
    body: "Eine persönliche und wertschätzende Umgebung. Wir nehmen uns Zeit für Ihre Anliegen und schaffen einen Raum, in dem Sie sich rundum wohlfühlen.",
  },
  {
    title: "Seit 2000 in Hamm-Bockum-Hövel",
    body: "Als etablierte Praxis sind wir tief in der lokalen Gemeinschaft verwurzelt – ein vertrauensvoller Partner für Ihre Gesundheit.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={medicalBusinessJsonLd()} />
      <Link
        href="/karriere"
        className="group block bg-brand-red px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-brand-navy sm:text-base"
      >
        <span className="font-semibold uppercase tracking-[0.08em]">
          Motivierte Teamplayer gesucht!
        </span>{" "}
        <span className="text-white/90">
          Physiotherapeut:in (m/w/d) in Voll- oder Teilzeit
        </span>
        <span
          aria-hidden
          className="ml-2 inline-block transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
      <Section tone="warm" spacing="loose" className="relative overflow-hidden">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <SectionEyebrow>Praxis für Physiotherapie · Hamm-Bockum-Hövel</SectionEyebrow>
              <SectionHeading as="h1" className="mt-6">
                Physiotherapie Astrid Mally —
                <span className="block text-brand-red">individuell, empathisch, wirkungsvoll.</span>
              </SectionHeading>
              <SectionLead>
                Seit {siteConfig.founded} begleiten wir Menschen in Hamm-Bockum-Hövel
                auf ihrem Weg zu mehr Beweglichkeit und weniger Schmerzen — mit
                spezialisierten Behandlungskonzepten und einem Team, das zuhört.
              </SectionLead>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <LinkButton href="/kontakt" size="lg">
                  Terminanfrage stellen
                </LinkButton>
                <LinkButton href="/leistungen" variant="secondary" size="lg">
                  Leistungen ansehen
                </LinkButton>
              </div>
              <p className="mt-8 text-sm uppercase tracking-[0.18em] text-graphite-soft">
                {siteConfig.legal.licensed}
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface-mute lg:aspect-[5/6]">
              <Image
                src="/team/astrid-mally.jpg"
                alt="Astrid Mally – Inhaberin und Physiotherapeutin"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container>
          <SectionEyebrow>Warum Praxis Mally</SectionEyebrow>
          <SectionHeading>Therapie auf Augenhöhe — mit über zwei Jahrzehnten Erfahrung.</SectionHeading>
          <SectionLead>
            Wir fokussieren uns auf das, was wir gut können:
            professionelle Physiotherapie in einer Atmosphäre, in der sich Patient:innen ernst genommen fühlen.
          </SectionLead>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {usps.map((u) => (
              <Card key={u.title} tone="warm">
                <CardTitle>{u.title}</CardTitle>
                <CardBody>{u.body}</CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="warm" spacing="default">
        <Container size="narrow">
          <Quote attribution="Astrid Mally">
            Gesundheit beginnt dort, wo wir wieder lernen, auf unseren eigenen Körper zu hören.
          </Quote>
        </Container>
      </Section>

      <ReviewsSection />

      <Section tone="navy" spacing="default">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <SectionEyebrow>
                <span className="text-brand-red-soft">Kontakt</span>
              </SectionEyebrow>
              <SectionHeading className="text-white">
                Bereit für den nächsten Schritt zu mehr Wohlbefinden?
              </SectionHeading>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                Rufen Sie uns an oder schicken Sie eine Terminanfrage —
                wir melden uns zeitnah zurück und besprechen alles Weitere persönlich.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <LinkButton href="/kontakt" variant="onNavy" size="lg">
                  Terminanfrage
                </LinkButton>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="text-lg font-medium text-white underline underline-offset-4 hover:text-brand-red-soft"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-red-soft">
                Öffnungszeiten
              </p>
              <ul className="mt-4 space-y-2 text-white/90">
                {siteConfig.hours.map((h) => (
                  <li key={h.days} className="flex items-center justify-between gap-4">
                    <span className="whitespace-nowrap text-white/70">{h.days}</span>
                    <span className="whitespace-nowrap font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-white/70">
                Außerhalb dieser Zeiten erreichen Sie unseren Anrufbeantworter —
                wir rufen schnellstmöglich zurück.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
