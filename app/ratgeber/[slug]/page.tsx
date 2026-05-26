import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import {
  loadBlogPost,
  loadBlogPosts,
  loadBlogSlugs,
} from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await loadBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadBlogPost(slug);
  if (!post) return {};
  return {
    title: post.titel,
    description: post.kurzbeschreibung,
    openGraph: {
      title: post.titel,
      description: post.kurzbeschreibung,
      type: "article",
      publishedTime: post.datum,
      authors: [post.autor],
    },
  };
}

function articleJsonLd(post: {
  titel: string;
  kurzbeschreibung: string;
  datum: string;
  autor: string;
  slug: string;
  kategorie: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.titel,
    description: post.kurzbeschreibung,
    datePublished: post.datum,
    author: {
      "@type": "Organization",
      name: post.autor,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "MedicalBusiness",
      "@id": `${siteConfig.url}#praxis`,
      name: siteConfig.name,
    },
    articleSection: post.kategorie,
    mainEntityOfPage: `${siteConfig.url}/ratgeber/${post.slug}`,
  };
}

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

export default async function RatgeberDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await loadBlogPost(slug);
  if (!post) notFound();
  const all = await loadBlogPosts();
  const other = all.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Start", href: "/" },
            { name: "Ratgeber", href: "/ratgeber" },
            { name: post.titel, href: `/ratgeber/${post.slug}` },
          ]),
          articleJsonLd(post),
        ]}
      />

      <Section tone="warm" spacing="default">
        <Container size="narrow">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-graphite-soft">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-brand-red">Start</Link></li>
              <li aria-hidden>›</li>
              <li><Link href="/ratgeber" className="hover:text-brand-red">Ratgeber</Link></li>
              <li aria-hidden>›</li>
              <li className="text-brand-navy">{post.kategorie}</li>
            </ol>
          </nav>
          <SectionEyebrow>{post.kategorie}</SectionEyebrow>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-brand-navy text-balance sm:text-5xl">
            {post.titel}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-graphite sm:text-xl">
            {post.kurzbeschreibung}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-graphite-soft">
            <span>{formatDate(post.datum)}</span>
            <span aria-hidden>·</span>
            <span>{post.readingTimeMinutes} Min. Lesezeit</span>
            <span aria-hidden>·</span>
            <span>von {post.autor}</span>
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container size="narrow">
          <article
            className="prose-mally"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
          />
        </Container>
      </Section>

      <Section tone="warm" spacing="default">
        <Container size="narrow">
          <div className="rounded-3xl bg-white p-10 ring-1 ring-border-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
              Sie wollen das vertiefen?
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-brand-navy">
              Sprechen Sie mit uns.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-graphite">
              Jeder Körper ist anders — und jeder Verlauf braucht eine
              individuelle Antwort. Wenn Sie sich in diesem Artikel
              wiedererkennen, schauen Sie gerne bei uns vorbei oder rufen Sie
              uns an. Wir hören zu.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <LinkButton href="/kontakt">Terminanfrage stellen</LinkButton>
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

      {other.length > 0 && (
        <Section spacing="default">
          <Container>
            <SectionEyebrow>Weiterlesen</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-brand-navy sm:text-4xl">
              Mehr aus dem Ratgeber
            </h2>
            <ul className="mt-12 grid gap-6 lg:grid-cols-3">
              {other.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/ratgeber/${p.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border-soft bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-brand-red/30 hover:shadow-lg"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                      {p.kategorie}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-brand-navy group-hover:text-brand-red">
                      {p.titel}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite">
                      {p.kurzbeschreibung}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}
    </>
  );
}
