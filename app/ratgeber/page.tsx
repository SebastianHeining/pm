import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionHeading, SectionLead } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { loadBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ratgeber & Tipps",
  description:
    "Fachwissen aus unserer Praxis: Beiträge zu CMD, Skoliose, Lymphdrainage und mehr — von Astrid Mally und ihrem Team.",
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

export default async function RatgeberIndex() {
  const posts = await loadBlogPosts();

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
