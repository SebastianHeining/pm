import type { Metadata } from "next";
import Image from "next/image";
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
    "Krankengymnastik, Manuelle Therapie, CMD, Lymphdrainage, Massage und mehr — alle Behandlungen der Praxis Mally im Überblick.",
};

const ORDER: Kategorie[] = ["kasse", "selbstzahler"];

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
        lead="Wir kombinieren bewährte Verfahren mit spezialisierter Expertise — von Krankengymnastik bis zur Manuellen Therapie. Jede Behandlung wird individuell auf Ihre Bedürfnisse zugeschnitten."
      />

      {grouped.map(({ kat, items }) => (
        <Section
          key={kat}
          tone={kat === "kasse" ? "white" : "warm"}
          spacing="default"
        >
          <Container>
            <SectionEyebrow>{kategorieLabel[kat]}</SectionEyebrow>
            <SectionHeading>
              {kat === "kasse"
                ? "Klassische Heilmittel."
                : "Prävention, Selbstzahler & Wellness."}
            </SectionHeading>
            {kat === "kasse" && (
              <SectionLead>
                Verordnungsfähige Behandlungen — von Krankengymnastik über
                Manuelle Therapie bis zur CMD-Behandlung. Jede Therapie wird
                individuell auf Sie zugeschnitten.
              </SectionLead>
            )}

            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/leistungen/${l.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-soft bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {l.bild ? (
                        <Image
                          src={l.bild}
                          alt={l.bildAlt ?? l.titel}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-surface-warm transition-colors duration-300 group-hover:bg-brand-red-soft/60">
                          <ServiceIcon
                            name={l.icon}
                            size={72}
                            className="text-brand-red/70 transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      )}
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                      <div className="absolute bottom-3 left-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-brand-red shadow-md ring-1 ring-border-soft transition-transform duration-300 group-hover:scale-110">
                        <ServiceIcon name={l.icon} size={24} />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-semibold leading-snug tracking-tight text-brand-navy group-hover:text-brand-red">
                        {l.titel}
                      </h3>
                      <p className="mt-2.5 flex-1 text-base leading-relaxed text-graphite">
                        {l.kurzbeschreibung}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy group-hover:text-brand-red">
                        Mehr erfahren
                        <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>
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
