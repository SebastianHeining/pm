import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionHeading, SectionLead } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section tone="warm" spacing="loose">
      <Container size="narrow">
        <SectionEyebrow>Fehler 404</SectionEyebrow>
        <SectionHeading as="h1">
          Diese Seite gibt es nicht —
          <span className="block text-brand-red">oder nicht mehr.</span>
        </SectionHeading>
        <SectionLead>
          Vielleicht wurde die Seite verschoben oder der Link enthält einen
          Tippfehler. Kein Problem — von hier aus finden Sie alles Wichtige.
        </SectionLead>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <LinkButton href="/" size="lg">
            Zur Startseite
          </LinkButton>
          <LinkButton href="/leistungen" variant="secondary" size="lg">
            Unsere Leistungen
          </LinkButton>
          <Link
            href="/kontakt"
            className="text-base font-medium text-brand-navy underline underline-offset-4 hover:text-brand-red"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </Container>
    </Section>
  );
}
