import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import {
  Section,
  SectionEyebrow,
  SectionHeading,
  SectionLead,
} from "@/components/ui/Section";
import { Card, CardBody, CardTitle } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import {
  getLeistung,
  getRelated,
  leistungen,
  kategorieLabel,
} from "@/content/leistungen";
import { siteConfig } from "@/lib/site-config";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return leistungen.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const l = getLeistung(slug);
  if (!l) return {};
  return {
    title: l.titel,
    description: l.kurzbeschreibung,
  };
}

export default async function LeistungDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const leistung = getLeistung(slug);
  if (!leistung) notFound();
  const related = getRelated(slug);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", href: "/" },
          { name: "Leistungen", href: "/leistungen" },
          { name: leistung.titel, href: `/leistungen/${leistung.slug}` },
        ])}
      />

      <Section tone="warm" spacing="default">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-graphite-soft">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-red">Start</Link>
              </li>
              <li aria-hidden>›</li>
              <li>
                <Link href="/leistungen" className="hover:text-brand-red">Leistungen</Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-brand-navy">{leistung.titel}</li>
            </ol>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.6fr] lg:items-end">
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-red ring-1 ring-border-soft">
                <ServiceIcon name={leistung.icon} size={32} />
              </div>
              <SectionEyebrow>
                <span className="ml-3">{leistung.heroEyebrow}</span>
              </SectionEyebrow>
              <SectionHeading as="h1">{leistung.titel}</SectionHeading>
              <SectionLead>{leistung.heroLead}</SectionLead>
            </div>
            <div className="rounded-2xl bg-white p-7 ring-1 ring-border-soft lg:max-w-sm lg:justify-self-end">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                Kategorie
              </p>
              <p className="mt-2 text-base font-semibold text-brand-navy">
                {kategorieLabel[leistung.kategorie]}
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                Kostenübernahme
              </p>
              <p className="mt-2 text-base leading-relaxed text-graphite">
                {leistung.kostenuebernahme}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <article>
              <h2 className="text-2xl font-semibold text-brand-navy sm:text-3xl">
                Wann diese Behandlung sinnvoll ist
              </h2>
              <ul className="mt-6 space-y-4">
                {leistung.wannHilft.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-graphite">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-brand-red"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <h2 className="text-2xl font-semibold text-brand-navy sm:text-3xl">
                So läuft die Behandlung ab
              </h2>
              <ol className="mt-6 space-y-5">
                {leistung.ablauf.map((step, idx) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-red text-sm font-semibold text-white">
                      {idx + 1}
                    </span>
                    <p className="pt-1 text-base leading-relaxed text-graphite">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </article>
          </div>

          {leistung.hinweise && (
            <Card tone="warm" className="mt-16">
              <CardTitle>Gut zu wissen</CardTitle>
              <CardBody>{leistung.hinweise}</CardBody>
            </Card>
          )}
        </Container>
      </Section>

      {related.length > 0 && (
        <Section tone="warm" spacing="default">
          <Container>
            <SectionEyebrow>Passt dazu</SectionEyebrow>
            <SectionHeading>Verwandte Behandlungen</SectionHeading>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/leistungen/${r.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border-soft bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-brand-red/30 hover:shadow-lg"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-red-soft text-brand-red">
                      <ServiceIcon name={r.icon} size={24} />
                    </div>
                    <h3 className="text-lg font-semibold leading-snug tracking-tight text-brand-navy group-hover:text-brand-red">
                      {r.titel}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite">
                      {r.kurzbeschreibung}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <Section tone="navy" spacing="default">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <SectionEyebrow>
                <span className="text-brand-red-soft">Termin & Beratung</span>
              </SectionEyebrow>
              <SectionHeading className="text-white">
                Klingt das nach dem, was Sie suchen?
              </SectionHeading>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                Schreiben Sie uns kurz, was Ihre Beschwerden sind — wir melden
                uns zurück und besprechen alles Weitere persönlich.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <LinkButton href="/kontakt" variant="onNavy" size="lg">
                  Terminanfrage stellen
                </LinkButton>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="text-lg font-medium text-white underline underline-offset-4 hover:text-brand-red-soft"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red-soft">
                Öffnungszeiten
              </p>
              <ul className="mt-4 space-y-2 text-white/90">
                {siteConfig.hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex items-center justify-between gap-6"
                  >
                    <span className="text-white/70">{h.days}</span>
                    <span className="font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
