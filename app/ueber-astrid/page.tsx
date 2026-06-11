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
import { Quote } from "@/components/ui/Quote";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Astrid Mally – Physiotherapeutin aus Leidenschaft",
  description:
    "Seit 2000 begleitet Astrid Mally Menschen in Hamm-Bockum-Hövel auf ihrem Weg zu mehr Beweglichkeit. Über ihren Therapie-Ansatz, ihre Qualifikationen und Werte.",
};

const ansatz = [
  {
    title: "Individuell",
    body: "Jeder Mensch und jeder Körper ist einzigartig. Deshalb entwickle ich für Sie eine maßgeschneiderte Therapie, die auf Ihre persönlichen Bedürfnisse und Ziele abgestimmt ist.",
  },
  {
    title: "Aktivierend",
    body: "Ich möchte Sie zu einer aktiven Mitarbeit motivieren, denn nur gemeinsam können wir nachhaltige Erfolge erzielen. Ihre eigene Aktivität ist der Schlüssel zum Therapieerfolg.",
  },
  {
    title: "Interdisziplinär",
    body: "Bei Bedarf arbeite ich eng mit Ärzten, Osteopathen und anderen Gesundheitsexperten zusammen, um Ihnen eine ganzheitliche Betreuung zu ermöglichen.",
  },
  {
    title: "Messbar besser",
    body: "Gemeinsam definieren wir klare Ziele und überprüfen regelmäßig Ihre Fortschritte. So können Sie Ihre Verbesserungen konkret wahrnehmen.",
  },
];

const qualifikationen = [
  "Staatlich anerkannte Physiotherapeutin",
  "Manuelle Therapie",
  "Manuelle Lymphdrainage",
  "CMD-Therapeutin",
  "Sportphysiotherapie",
  "Schmerzphysiotherapie (Florian Hockenholz Akademie)",
  "Medizinische Trainingstherapie / KG am Gerät",
  "Orthopädischer Rückenschulleiter nach Dr. Brügger",
  "Pilates, Faszienyoga und Nordic-Walking",
  "Dorn-Breuss-Therapeutin",
  "Kinesiologisches Taping",
];

export default function UeberAstrid() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Start", href: "/" },
            { name: "Über Astrid", href: "/ueber-astrid" },
          ]),
          personJsonLd({
            name: "Astrid Mally",
            jobTitle: "Praxisinhaberin & Physiotherapeutin",
            imagePath: "/team/astrid-mally.jpg",
            qualifications: qualifikationen,
          }),
        ]}
      />

      <Section tone="warm" spacing="loose">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <SectionEyebrow>Über mich</SectionEyebrow>
              <SectionHeading as="h1">
                Astrid Mally —
                <span className="block text-brand-red">Physiotherapeutin aus Leidenschaft.</span>
              </SectionHeading>
              <SectionLead>
                Seit 2000 begleite ich Menschen in Hamm-Bockum-Hövel auf ihrem
                Weg zu mehr Beweglichkeit und weniger Schmerzen. Als Gründerin
                der Praxis liegt mir die individuelle Betreuung jeder einzelnen
                Patient:in besonders am Herzen.
              </SectionLead>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <LinkButton href="/kontakt" size="lg">
                  Termin bei Astrid anfragen
                </LinkButton>
                <LinkButton href="/praxis/team" variant="secondary" size="lg">
                  Das ganze Team
                </LinkButton>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface-mute">
              <Image
                src="/team/astrid-mally.jpg"
                alt="Astrid Mally – Praxisinhaberin und Physiotherapeutin"
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
        <Container size="narrow">
          <div className="space-y-6 text-lg leading-relaxed text-graphite">
            <p>
              Physiotherapie ist für mich mehr als nur ein Beruf — sie ist meine
              Leidenschaft. Ich glaube daran, dass unser Körper eine enorme
              Fähigkeit zur Heilung besitzt. Manchmal braucht es jedoch
              Unterstützung, Wissen und die richtigen Impulse, um diese Kräfte
              zu aktivieren.
            </p>
            <p>
              In meiner Arbeit ist es mir wichtig, Menschen nicht nur zu
              behandeln, sondern sie zu begleiten. Ich möchte Ihnen helfen,
              Ihren Körper besser zu verstehen, seine Signale wahrzunehmen und
              wieder Vertrauen in Ihre eigenen Fähigkeiten zu entwickeln.
            </p>
            <p>
              Neben der physiotherapeutischen Behandlung gebe ich Ihnen
              praktische Tipps zu Bewegung, Ernährung und einem gesunden
              Lebensstil. Außerdem teile ich inspirierende Podcasts und
              Wissensquellen rund um Selbstheilung, moderne Therapiekonzepte
              und Gesundheit.
            </p>
            <p>
              Mein Ziel ist es, dass Sie nicht nur mit weniger Beschwerden nach
              Hause gehen, sondern auch mit mehr Wissen, mehr Bewusstsein für
              Ihren Körper und dem Gefühl, selbst aktiv etwas für Ihre
              Gesundheit tun zu können.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" spacing="default">
        <Container size="narrow">
          <Quote attribution="Astrid Mally">
            Gesundheit beginnt dort, wo wir wieder lernen, auf unseren eigenen
            Körper zu hören.
          </Quote>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-graphite">
            Gesundheit ist mehr als das Verschwinden von Schmerzen — sie
            bedeutet, sich im eigenen Körper wieder wohl, stark und lebendig zu
            fühlen.
          </p>
        </Container>
      </Section>

      <Section spacing="default">
        <Container>
          <SectionEyebrow>Mein Therapie-Ansatz</SectionEyebrow>
          <SectionHeading>So arbeite ich mit Ihnen.</SectionHeading>
          <SectionLead>
            Vier Prinzipien, die jede Therapie bei mir prägen — von der ersten
            Anamnese bis zum Abschlussgespräch.
          </SectionLead>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ansatz.map((a) => (
              <Card key={a.title} tone="warm">
                <CardTitle>{a.title}</CardTitle>
                <CardBody>{a.body}</CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="warm" spacing="default">
        <Container>
          <SectionEyebrow>Meine Qualifikationen</SectionEyebrow>
          <SectionHeading>
            Kontinuierliche Fortbildung. Spezialisierte Expertise.
          </SectionHeading>
          <SectionLead>
            Ein Auszug aus meinen Aus- und Weiterbildungen — die Grundlage
            dafür, dass ich Ihnen ein breites Spektrum an Behandlungen
            anbieten kann.
          </SectionLead>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {qualifikationen.map((q) => (
              <li
                key={q}
                className="flex items-start gap-3 rounded-xl bg-surface p-5 ring-1 ring-border-soft"
              >
                <span
                  aria-hidden
                  className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-brand-red"
                />
                <span className="text-base font-medium text-brand-navy">
                  {q}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="navy" spacing="default">
        <Container>
          <Quote attribution="Astrid Mally">
            Mir ist wichtig, dass Therapie verständlich bleibt — und dass Sie
            unsere Praxis mit einem guten Gefühl verlassen. Ich freue mich
            darauf, Sie auf Ihrem Weg zu mehr Wohlbefinden zu begleiten.
          </Quote>
          <div className="mt-12">
            <LinkButton href="/kontakt" size="lg">
              Terminanfrage stellen
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
