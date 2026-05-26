import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  Section,
  SectionEyebrow,
  SectionHeading,
  SectionLead,
} from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import {
  kategorieLabel,
  leistungen,
  type Kategorie,
} from "@/content/leistungen";

export const metadata: Metadata = {
  title: "Unsere Leistungen",
  description:
    "Krankengymnastik, Manuelle Therapie, CMD, Skoliose nach Schroth, Lymphdrainage, Massage und mehr — alle Behandlungen der Praxis Mally im Überblick.",
};

const ORDER: Kategorie[] = ["spezial", "kasse", "selbstzahler"];

export default function LeistungenIndex() {
  const grouped = ORDER.map((kat) => ({
    kat,
    items: leistungen.filter((l) => l.kategorie === kat),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", href: "/" },
          { name: "Leistungen", href: "/leistungen" },
        ])}
      />
      <PageHero
        eyebrow="Behandlungen"
        title={
          <>
            Alles, was wir tun, damit Sie sich
            <span className="block text-brand-red">in Ihrem Körper wieder zuhause fühlen.</span>
          </>
        }
        lead="Wir kombinieren bewährte Verfahren mit spezialisierter Expertise — von Krankengymnastik bis zur Schroth-Therapie. Jede Behandlung wird individuell auf Ihre Bedürfnisse zugeschnitten."
      />

      {grouped.map(({ kat, items }) => (
        <Section
          key={kat}
          tone={kat === "spezial" ? "white" : kat === "kasse" ? "warm" : "white"}
          spacing="default"
        >
          <Container>
            <SectionEyebrow>{kategorieLabel[kat]}</SectionEyebrow>
            <SectionHeading>
              {kat === "spezial"
                ? "Unsere Schwerpunkte."
                : kat === "kasse"
                  ? "Klassische Heilmittel."
                  : "Prävention, Selbstzahler & Wellness."}
            </SectionHeading>
            {kat === "spezial" && (
              <SectionLead>
                Drei Bereiche, in denen unsere Praxis besonders qualifiziert ist
                — mit Zusatz­ausbildungen, kontinuierlicher Fortbildung und
                jahrzehntelanger Erfahrung.
              </SectionLead>
            )}

            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/leistungen/${l.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border-soft bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-brand-red/30 hover:shadow-lg"
                  >
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red-soft text-brand-red">
                      <ServiceIcon name={l.icon} />
                    </div>
                    <h3 className="text-xl font-semibold leading-snug tracking-tight text-brand-navy group-hover:text-brand-red">
                      {l.titel}
                    </h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-graphite">
                      {l.kurzbeschreibung}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy group-hover:text-brand-red">
                      Mehr erfahren
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ))}

      <Section tone="navy" spacing="default">
        <Container>
          <SectionHeading className="text-white">
            Nicht sicher, welche Behandlung zu Ihnen passt?
          </SectionHeading>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Rufen Sie uns an oder schicken Sie uns eine Terminanfrage —
            wir hören Ihnen zu und besprechen gemeinsam, welcher Weg
            sinnvoll ist.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex h-13 items-center justify-center rounded-full bg-white px-7 text-base font-medium text-brand-navy transition-colors hover:bg-brand-red hover:text-white"
            >
              Terminanfrage stellen
            </Link>
            <Link
              href="/faq"
              className="text-base font-medium text-white underline underline-offset-4 hover:text-brand-red-soft"
            >
              Antworten auf häufige Fragen
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
