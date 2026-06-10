import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import {
  Section,
  SectionEyebrow,
  SectionHeading,
  SectionLead,
} from "@/components/ui/Section";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { LinkButton } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Häufige Fragen",
  description:
    "Antworten zu Termin, Verordnung, Kostenübernahme, Hausbesuchen und unseren Spezialisierungen.",
};

const faqs: Array<AccordionItem & { plain: string }> = [
  {
    question: "Wie bekomme ich einen Termin für Physiotherapie?",
    plain:
      "Für eine physiotherapeutische Behandlung benötigen Sie in der Regel eine ärztliche Verordnung von Ihrem Haus- oder Facharzt. Mit dieser können Sie telefonisch einen Termin bei uns vereinbaren. Als Selbstzahler können Sie auch ohne Verordnung einen Termin bei uns buchen.",
    answer: (
      <p>
        Für eine physiotherapeutische Behandlung benötigen Sie in der Regel eine
        ärztliche Verordnung von Ihrem Haus- oder Facharzt. Mit dieser können
        Sie telefonisch einen Termin bei uns vereinbaren. Als Selbstzahler
        können Sie auch ohne Verordnung einen Termin bei uns buchen.
      </p>
    ),
  },
  {
    question: "Übernimmt die Krankenkasse die Kosten für meine Behandlung?",
    plain:
      "Bei einer ärztlichen Verordnung übernimmt Ihre gesetzliche Krankenkasse den Großteil der Kosten. Sie zahlen lediglich die gesetzliche Zuzahlung von 10 € plus 10 % der Behandlungskosten, sofern Sie nicht von der Zuzahlung befreit sind. Private Krankenversicherungen erstatten die Kosten je nach Tarif. Wir beraten Sie gerne zu den Details.",
    answer: (
      <p>
        Bei einer ärztlichen Verordnung übernimmt Ihre gesetzliche Krankenkasse
        den Großteil der Kosten. Sie zahlen lediglich die gesetzliche
        Zuzahlung von 10 € plus 10 % der Behandlungskosten, sofern Sie nicht
        von der Zuzahlung befreit sind. Private Krankenversicherungen erstatten
        die Kosten je nach Tarif. Wir beraten Sie gerne zu den Details.
      </p>
    ),
  },
  {
    question: "Was sollte ich zur ersten Behandlung mitbringen?",
    plain:
      "Bitte bringen Sie zu Ihrem ersten Termin Ihre ärztliche Verordnung, Ihre Versichertenkarte und bequeme Kleidung mit. Bei Rückenbeschwerden sind kurze Hosen und T-Shirt ideal, bei Knieproblemen eine kurze Hose.",
    answer: (
      <p>
        Bitte bringen Sie zu Ihrem ersten Termin Ihre{" "}
        <strong>ärztliche Verordnung</strong>, Ihre{" "}
        <strong>Versichertenkarte</strong> und bequeme Kleidung mit. Bei
        Rückenbeschwerden sind kurze Hosen und T-Shirt ideal, bei Knieproblemen
        eine kurze Hose.
      </p>
    ),
  },
  {
    question: "Wie lange dauert eine Behandlung?",
    plain:
      "Die Dauer einer Behandlung richtet sich nach der verordneten Therapieform und Ihren individuellen Bedürfnissen. In der Regel dauert eine Einzelbehandlung zwischen 15 und 20 Minuten.",
    answer: (
      <p>
        Die Dauer einer Behandlung richtet sich nach der verordneten
        Therapieform und Ihren individuellen Bedürfnissen. In der Regel dauert
        eine Einzelbehandlung zwischen 15 und 20 Minuten.
      </p>
    ),
  },
  {
    question: "Bieten Sie auch Hausbesuche an?",
    plain:
      'Ja, bei entsprechender ärztlicher Verordnung ("Hausbesuch") oder in begründeten Fällen bieten wir physiotherapeutische Behandlungen bei Ihnen zu Hause an. Dies ist besonders für Patienten mit eingeschränkter Mobilität eine wertvolle Option.',
    answer: (
      <p>
        Ja, bei entsprechender ärztlicher Verordnung („Hausbesuch") oder in
        begründeten Fällen bieten wir physiotherapeutische Behandlungen bei
        Ihnen zu Hause an. Dies ist besonders für Patient:innen mit
        eingeschränkter Mobilität eine wertvolle Option.
      </p>
    ),
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Start", href: "/" },
            { name: "FAQ", href: "/faq" },
          ]),
          faqPageJsonLd(
            faqs.map((f) => ({ question: f.question, answer: f.plain })),
          ),
        ]}
      />
      <PageHero
        eyebrow="Häufig gestellt"
        title={
          <>
            Antworten auf die <span className="text-brand-red">wichtigsten Fragen</span>.
          </>
        }
        lead="Sie finden Ihre Frage nicht? Rufen Sie uns an oder schicken Sie uns eine Nachricht — wir helfen gerne weiter."
      />

      <Section spacing="default">
        <Container size="narrow">
          <Accordion items={faqs.map(({ question, answer }) => ({ question, answer }))} />
          <div className="mt-16 rounded-2xl bg-surface-warm p-8 ring-1 ring-border-soft">
            <p className="text-lg font-semibold text-brand-navy">
              Noch eine Frage offen?
            </p>
            <p className="mt-2 text-base leading-relaxed text-graphite">
              Unser freundliches Team steht Ihnen telefonisch zur Verfügung —
              oder schreiben Sie uns über das Kontaktformular.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <LinkButton href="/kontakt">Frage stellen</LinkButton>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="text-base font-medium text-brand-navy underline underline-offset-4 hover:text-brand-red"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
