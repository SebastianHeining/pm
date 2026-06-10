import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import {
  Section,
  SectionEyebrow,
  SectionHeading,
  SectionLead,
} from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ReviewForm } from "@/components/sections/ReviewForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ihre Bewertung",
  description:
    "Wie war Ihr Besuch bei uns? Teilen Sie Ihre Erfahrung — ganz ohne Google-Konto, in unter zwei Minuten.",
  robots: { index: false, follow: true },
};

export default function BewertungPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", href: "/" },
          { name: "Bewertung", href: "/bewertung" },
        ])}
      />

      <Section tone="warm" spacing="default">
        <Container size="narrow">
          <SectionEyebrow>Ihre Meinung zählt</SectionEyebrow>
          <SectionHeading as="h1">
            Wie war Ihr Besuch
            <span className="block text-brand-red">bei uns?</span>
          </SectionHeading>
          <SectionLead>
            Ihr Feedback hilft uns, besser zu werden — und anderen
            Patient:innen bei der Entscheidung. Ganz ohne Google-Konto, in
            unter zwei Minuten.
          </SectionLead>
        </Container>
      </Section>

      <Section spacing="default">
        <Container size="narrow">
          <Card tone="white" className="p-8 sm:p-10">
            <ReviewForm />
          </Card>
          <p className="mt-6 text-sm leading-relaxed text-graphite-soft">
            Hinweis: Eingesendete Bewertungen werden vor der Veröffentlichung
            von uns gesichtet. Es besteht kein Anspruch auf Veröffentlichung.
            Bei Beschwerden möchten wir lieber direkt mit Ihnen sprechen —
            rufen Sie uns an, wir nehmen uns Zeit.
          </p>
        </Container>
      </Section>
    </>
  );
}
