import type { Metadata } from "next";
import Link from "next/link";
import QRCode from "qrcode";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionHeading, SectionLead } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { loadBlogPosts } from "@/lib/content";
import { podcastEmpfehlungen } from "@/content/podcasts";

export const metadata: Metadata = {
  title: "Ratgeber & Tipps",
  description:
    "Fachwissen aus unserer Praxis: Beiträge zu CMD, Schulter, Lymphdrainage und mehr — plus Podcast-Empfehlungen von Astrid Mally und ihrem Team.",
};

function formatDate(isoLike: string) {
  if (!isoLike) return "";
  const date = new Date(isoLike);
  if (Number.isNaN(date.getTime())) return isoLike;
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

async function qrSvg(url: string): Promise<string> {
  return QRCode.toString(url, {
    type: "svg",
    margin: 0,
    width: 112,
    color: { dark: "#152D47", light: "#FFFFFF" },
  });
}

export default async function RatgeberIndex() {
  const posts = await loadBlogPosts();
  const podcasts = await Promise.all(
    podcastEmpfehlungen.map(async (p) => ({
      ...p,
      qr: p.url ? await qrSvg(p.url) : null,
    })),
  );

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", href: "/" },
          { name: "Ratgeber", href: "/ratgeber" },
        ])}
      />

      <PageHero
        eyebrow="Wissen aus unserer Praxis"
        title={
          <>
            Ratgeber & Tipps —
            <span className="block text-brand-red">Physiotherapie zum Mitnehmen.</span>
          </>
        }
        lead="In unserem Ratgeber teilen wir Erfahrungen aus über zwei Jahrzehnten Praxis: Was wir über Schmerzen, Bewegung und Selbsthilfe gelernt haben — und was Sie selbst tun können, um sich besser zu fühlen."
      />

      {posts.length === 0 ? (
        <Section spacing="default">
          <Container size="narrow">
            <p className="text-base leading-relaxed text-graphite">
              Aktuell sind noch keine Artikel veröffentlicht. Schauen Sie bald wieder vorbei — oder rufen Sie uns mit Ihren Fragen direkt an.
            </p>
          </Container>
        </Section>
      ) : (
        <Section spacing="default">
          <Container>
            <ul className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/ratgeber/${post.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border-soft bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-brand-red/30 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-brand-red">
                      <span>{post.kategorie}</span>
                      <span aria-hidden className="text-graphite-soft">·</span>
                      <span className="text-graphite-soft normal-case tracking-normal">
                        {post.readingTimeMinutes} Min. Lesezeit
                      </span>
                    </div>
                    <h2 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-brand-navy group-hover:text-brand-red">
                      {post.titel}
                    </h2>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-graphite">
                      {post.kurzbeschreibung}
                    </p>
                    <div className="mt-6 flex items-center justify-between text-sm text-graphite-soft">
                      <span>{formatDate(post.datum)}</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-brand-navy group-hover:text-brand-red">
                        Lesen <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <Section tone="warm" spacing="default">
        <Container>
          <SectionEyebrow>Hör-Empfehlungen</SectionEyebrow>
          <SectionHeading>Podcasts, die wir unseren Patient:innen ans Herz legen.</SectionHeading>
          <SectionLead>
            Wissen für unterwegs: Diese Podcasts hört Astrid selbst — von
            Ernährung über Schmerzverständnis bis zur geführten Meditation.
            Einfach den QR-Code mit dem Handy scannen.
          </SectionLead>
          <ul className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {podcasts.map((p) => (
              <li
                key={p.titel}
                className="flex gap-5 rounded-2xl bg-white p-6 ring-1 ring-border-soft"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-brand-navy">
                    {p.titel}
                  </h3>
                  <p className="mt-0.5 text-sm text-graphite-soft">{p.von}</p>
                  <p className="mt-3 text-sm leading-relaxed text-graphite">
                    {p.beschreibung}
                  </p>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy underline underline-offset-4 hover:text-brand-red"
                    >
                      Anhören <span aria-hidden>↗</span>
                    </a>
                  ) : (
                    <p className="mt-3 text-sm italic text-graphite-soft">
                      {p.suchhinweis}
                    </p>
                  )}
                </div>
                {p.qr && (
                  <div
                    aria-hidden
                    className="h-28 w-28 shrink-0 self-center rounded-lg bg-white p-1.5 ring-1 ring-border-soft"
                    dangerouslySetInnerHTML={{ __html: p.qr }}
                  />
                )}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-graphite-soft">
            Externe Inhalte: Die verlinkten Podcasts sind Angebote Dritter —
            für deren Inhalte sind die jeweiligen Anbieter verantwortlich.
          </p>
        </Container>
      </Section>

      <Section spacing="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <SectionEyebrow>Themenvorschlag?</SectionEyebrow>
              <SectionHeading>Worüber sollen wir als nächstes schreiben?</SectionHeading>
              <SectionLead>
                Sie haben eine Frage, zu der wir keinen Artikel finden? Schreiben Sie uns — vielleicht wird genau das unser nächster Beitrag.
              </SectionLead>
              <div className="mt-8">
                <LinkButton href="/kontakt" variant="primary" size="lg">
                  Themenvorschlag senden
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
