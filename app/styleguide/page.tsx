import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import {
  Section,
  SectionEyebrow,
  SectionHeading,
  SectionLead,
} from "@/components/ui/Section";
import { Button, LinkButton } from "@/components/ui/Button";
import { Card, CardBody, CardTitle } from "@/components/ui/Card";
import { Quote } from "@/components/ui/Quote";
import { Logo } from "@/components/brand/Logo";

export const metadata: Metadata = {
  title: "Style Guide",
  robots: { index: false, follow: false },
};

// Rot/Weiß/Grau-Palette (Kunden-Entscheidung Feedbackrunde 2) —
// Token-Name "brand-navy" ist historisch und meint die dunkle Primärfarbe.
const swatches = [
  { name: "brand-navy (Stone)", value: "#544F4A", text: "white" },
  { name: "brand-navy-soft", value: "#6B6660", text: "white" },
  { name: "brand-red", value: "#C8202A", text: "white" },
  { name: "brand-red-hover", value: "#A51820", text: "white" },
  { name: "brand-red-soft", value: "#F1D4D6", text: "navy" },
  { name: "graphite", value: "#5C5751", text: "white" },
  { name: "graphite-soft", value: "#6E6964", text: "white" },
  { name: "surface", value: "#FFFFFF", text: "navy" },
  { name: "surface-warm", value: "#F7F5F2", text: "navy" },
  { name: "surface-mute", value: "#EFEBE5", text: "navy" },
  { name: "border-soft", value: "#E5E2DD", text: "navy" },
];

export default function StyleGuide() {
  return (
    <>
      <Section tone="warm" spacing="tight">
        <Container>
          <SectionEyebrow>Designsystem · Stand M1</SectionEyebrow>
          <SectionHeading as="h1">Style Guide — Praxis Mally</SectionHeading>
          <SectionLead>
            Diese Seite zeigt alle Basiselemente der neuen Webseite. Sie dient
            als Abnahmegrundlage für das Designsystem.
          </SectionLead>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <h2 className="text-2xl font-semibold">Logo</h2>
          <div className="mt-6 flex flex-wrap items-center gap-12 rounded-2xl border border-border-soft bg-surface-warm p-10">
            <Logo variant="wordmark" asLink={false} />
            <Logo variant="mark" asLink={false} />
          </div>
          <p className="mt-4 text-sm text-graphite-soft">
            Wortmarke im Header (Empfehlung) · Punkt als Favicon und kompakte
            Verwendung.
          </p>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <h2 className="text-2xl font-semibold">Farben</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {swatches.map((s) => (
              <div
                key={s.name}
                className="overflow-hidden rounded-xl border border-border-soft"
              >
                <div
                  className="h-24"
                  style={{ background: s.value }}
                  aria-hidden
                />
                <div className="p-4 text-sm">
                  <p className="font-medium">{s.name}</p>
                  <p className="text-graphite-soft">{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <h2 className="text-2xl font-semibold">Typografie</h2>
          <div className="mt-6 space-y-6 rounded-2xl border border-border-soft bg-surface-warm p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-graphite-soft">
                Display / H1
              </p>
              <p className="mt-2 text-5xl font-semibold leading-[1.05] tracking-tight text-brand-navy lg:text-6xl">
                Individuell, empathisch, wirkungsvoll.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-graphite-soft">
                H2
              </p>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-brand-navy">
                Therapie auf Augenhöhe
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-graphite-soft">
                H3
              </p>
              <p className="mt-2 text-2xl font-semibold text-brand-navy">
                Manuelle Therapie
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-graphite-soft">
                Body
              </p>
              <p className="mt-2 max-w-2xl text-lg leading-relaxed">
                Seit 2000 begleiten wir Menschen in Hamm-Bockum-Hövel auf ihrem
                Weg zu mehr Beweglichkeit und weniger Schmerzen — mit
                spezialisierten Behandlungskonzepten und einem Team, das zuhört.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-graphite-soft">
                Eyebrow / Akzent
              </p>
              <p className="mt-2">
                <SectionEyebrow>Warum Praxis Mally</SectionEyebrow>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <div className="mt-6 space-y-6">
            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border-soft bg-surface-warm p-8">
              <Button variant="primary">Terminanfrage stellen</Button>
              <Button variant="primary" size="lg">
                Primär — Large
              </Button>
              <Button variant="secondary">Mehr erfahren</Button>
              <Button variant="secondary" size="lg">
                Sekundär — Large
              </Button>
              <Button variant="ghost">Tertiär / Ghost</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-brand-navy p-8">
              <LinkButton href="#" variant="onNavy">
                Auf dunklem Hintergrund
              </LinkButton>
              <LinkButton href="#" variant="onNavy" size="lg">
                On-Navy Large
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <h2 className="text-2xl font-semibold">Cards</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Card tone="warm">
              <CardTitle>Warm-Variante</CardTitle>
              <CardBody>
                Standard-Card für USPs und Leistungs-Teaser auf weißem
                Hintergrund.
              </CardBody>
            </Card>
            <Card tone="white">
              <CardTitle>White-Variante</CardTitle>
              <CardBody>
                Für Sektionen mit warmem Hintergrund. Leichter Schatten und
                feiner Ring.
              </CardBody>
            </Card>
            <Card tone="navy">
              <CardTitle className="text-white">Navy-Variante</CardTitle>
              <CardBody className="text-white/85">
                Für Akzent-Cards oder Kontakt-Module auf hellem Hintergrund.
              </CardBody>
            </Card>
          </div>
        </Container>
      </Section>

      <Section spacing="tight" tone="warm">
        <Container size="narrow">
          <h2 className="text-2xl font-semibold">Zitat</h2>
          <div className="mt-6">
            <Quote attribution="Astrid Mally">
              Gesundheit beginnt dort, wo wir wieder lernen, auf unseren eigenen
              Körper zu hören.
            </Quote>
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <h2 className="text-2xl font-semibold">Section · Navy</h2>
          <p className="mt-2 text-sm text-graphite-soft">
            Beispiel für eine Sektion mit dunklem Hintergrund (z. B. Kontakt-CTA
            auf Startseite).
          </p>
        </Container>
        <div className="mt-6 bg-brand-navy py-16 text-white">
          <Container>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-red-soft">
              Kontakt
            </p>
            <p className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white">
              Bereit für den nächsten Schritt zu mehr Wohlbefinden?
            </p>
          </Container>
        </div>
      </Section>
    </>
  );
}
