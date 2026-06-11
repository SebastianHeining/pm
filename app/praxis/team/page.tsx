import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import {
  Section,
  SectionEyebrow,
  SectionHeading,
  SectionLead,
} from "@/components/ui/Section";
import { Card, CardBody, CardTitle } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/seo";
import { loadTeam, type TeamMember } from "@/lib/content";

export const metadata: Metadata = {
  title: "Unser Team",
  description:
    "Erfahrene Physiotherapeut:innen, freundliche Anmeldekräfte und spezialisierte Fachkräfte — lernen Sie unser Team kennen.",
};

function MemberPortrait({ member, size = 96 }: { member: TeamMember; size?: number }) {
  if (member.bild) {
    return (
      <div
        className="relative shrink-0 overflow-hidden rounded-2xl bg-surface-mute"
        style={{ width: size, height: size }}
      >
        <Image
          src={member.bild}
          alt={`Foto von ${member.name === "Name?" ? "Teammitglied" : member.name}`}
          fill
          sizes={`${size}px`}
          className="object-cover"
        />
      </div>
    );
  }
  const initials = member.name === "Name?" ? "?" : member.name
    .split(/\s+/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-2xl bg-brand-navy text-2xl font-semibold uppercase text-white"
      style={{ width: size, height: size }}
      aria-hidden
    >
      {initials}
    </div>
  );
}

// Erklärungen für Qualifikationen, die beim Anklicken aufklappen
// (Kunden-Wunsch: WABASKA-Text nur zeigen, wenn man draufklickt)
const qualiDetails: Record<string, string> = {
  "Beckenbodentraining nach WABASKA":
    "Das WABASKA-Konzept (Wahrnehmung & Aktivierung des Beckenbodens, Stabilisation, Koordination, Atmung) ist ein ganzheitlicher Trainingsansatz — etwa bei Inkontinenz, in der Rückbildung oder nach gynäkologischen Eingriffen. Die Behandlung ist Teil der Krankengymnastik und damit ganz normal verordnungsfähig. Sprechen Sie uns an.",
};

function QualiTag({ q, compact }: { q: string; compact?: boolean }) {
  const detail = qualiDetails[q];
  const base = compact
    ? "rounded-full bg-surface-warm px-2.5 py-0.5 text-xs font-medium text-brand-navy ring-1 ring-border-soft"
    : "rounded-full bg-surface-warm px-3 py-1 text-sm font-medium text-brand-navy ring-1 ring-border-soft";

  if (!detail) {
    return <li className={base}>{q}</li>;
  }
  return (
    <li className="max-w-md">
      <details className="group">
        <summary
          className={`${base} flex cursor-pointer list-none items-center gap-1.5 transition-colors hover:ring-brand-red/40 [&::-webkit-details-marker]:hidden`}
        >
          {q}
          <span
            aria-hidden
            className="text-brand-red transition-transform group-open:rotate-45"
          >
            +
          </span>
        </summary>
        <p
          className={`mt-2 rounded-xl bg-surface-warm p-3 leading-relaxed text-graphite ring-1 ring-border-soft ${compact ? "text-xs" : "text-sm"}`}
        >
          {detail}
        </p>
      </details>
    </li>
  );
}

function MemberTile({ member, featured }: { member: TeamMember; featured?: boolean }) {
  const isPlaceholder = member.name === "Name?";
  return (
    <article
      className={
        featured
          ? "grid gap-8 rounded-3xl border border-border-soft bg-white p-8 sm:grid-cols-[260px_1fr] sm:p-10"
          : "rounded-2xl border border-border-soft bg-white p-7"
      }
    >
      <div className={featured ? "" : "flex items-start gap-5"}>
        <MemberPortrait
          member={member}
          size={featured ? 260 : 96}
        />
        {!featured && (
          <div className="flex-1">
            <h3 className="text-lg font-semibold leading-snug tracking-tight text-brand-navy">
              {member.name}
            </h3>
            <p className="mt-1 text-sm text-graphite-soft">{member.rolle}</p>
            {member.seitJahr && member.seitJahr > 1900 && (
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-brand-red">
                seit {member.seitJahr}
              </p>
            )}
          </div>
        )}
      </div>
      {featured && (
        <div>
          <h3 className="text-2xl font-semibold leading-snug tracking-tight text-brand-navy">
            {member.name}
          </h3>
          <p className="mt-2 text-base font-medium text-graphite">{member.rolle}</p>
          {member.seitJahr && member.seitJahr > 1900 && (
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-brand-red">
              seit {member.seitJahr}
            </p>
          )}
          {member.bio && (
            <p className="mt-5 text-base leading-relaxed text-graphite">{member.bio}</p>
          )}
          {member.qualifikationen.length > 0 && (
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite-soft">
                Qualifikationen
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {member.qualifikationen.map((q) => (
                  <QualiTag key={q} q={q} />
                ))}
              </ul>
            </div>
          )}
          {member.slug.includes("astrid") && (
            <div className="mt-7">
              <LinkButton href="/ueber-astrid" variant="secondary">
                Mehr über Astrid
              </LinkButton>
            </div>
          )}
        </div>
      )}
      {!featured && member.qualifikationen.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {member.qualifikationen.map((q) => (
            <QualiTag key={q} q={q} compact />
          ))}
        </ul>
      )}
      {isPlaceholder && (
        <p className="mt-4 rounded-lg bg-brand-red-soft px-3 py-2 text-xs text-brand-red-hover">
          Foto vorhanden — Namen folgt nach Abstimmung mit der Praxis.
        </p>
      )}
    </article>
  );
}

export default async function TeamPage() {
  const team = await loadTeam();
  const inhaberin = team.find((m) => m.reihenfolge === 1);
  const therapie = team.filter((m) => m.abteilung === "therapie" && m.reihenfolge !== 1);
  const empfang = team.filter((m) => m.abteilung === "empfang");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Start", href: "/" },
            { name: "Praxis", href: "/praxis" },
            { name: "Team", href: "/praxis/team" },
          ]),
          ...team
            .filter((m) => m.name !== "Name?")
            .map((m) =>
              personJsonLd({
                name: m.name,
                jobTitle: m.rolle,
                imagePath: m.bild || undefined,
                qualifications: m.qualifikationen,
              }),
            ),
        ]}
      />

      <PageHero
        eyebrow="Unser Team"
        title={
          <>
            Kompetent, zugewandt,
            <span className="block text-brand-red">motiviert.</span>
          </>
        }
        lead="Unsere Praxis lebt von den Menschen, die hier arbeiten. Ein engagiertes Team aus erfahrenen Physiotherapeut:innen, freundlichen Anmeldekräften und spezialisierten Kolleg:innen sorgt dafür, dass Sie sich jederzeit gut aufgehoben fühlen."
      />

      {inhaberin && (
        <Section spacing="default">
          <Container>
            <SectionEyebrow>Praxisinhaberin</SectionEyebrow>
            <SectionHeading>Astrid Mally — die Praxis trägt ihren Namen.</SectionHeading>
            <div className="mt-12">
              <MemberTile member={inhaberin} featured />
            </div>
          </Container>
        </Section>
      )}

      <Section tone="warm" spacing="default">
        <Container>
          <SectionEyebrow>Therapie-Team</SectionEyebrow>
          <SectionHeading>Wer Sie sonst noch behandelt.</SectionHeading>
          <SectionLead>
            Unser gesamtes Team bildet sich regelmäßig fort, um Ihnen die
            bestmögliche Therapie nach aktuellen wissenschaftlichen
            Erkenntnissen bieten zu können.
          </SectionLead>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {therapie.map((m) => (
              <li key={m.slug}>
                <MemberTile member={m} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {empfang.length > 0 && (
        <Section spacing="default">
          <Container>
            <SectionEyebrow>Anmeldung & Organisation</SectionEyebrow>
            <SectionHeading>Ihre Stimmen am Telefon.</SectionHeading>
            <SectionLead>
              Freundlich, organisiert und immer für Sie da: unser Empfangs- und
              Organisationsteam koordiniert Termine und beantwortet Ihre
              Fragen zu Rezepten, Kostenübernahme und allem rundum die Praxis.
            </SectionLead>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {empfang.map((m) => (
                <li key={m.slug}>
                  <MemberTile member={m} />
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <Section tone="navy" spacing="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <SectionEyebrow>Karriere</SectionEyebrow>
              <SectionHeading>
                Lust, Teil unseres Teams zu werden?
              </SectionHeading>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite">
                Wir suchen Therapeut:innen, die mit Herz und Verstand bei der
                Sache sind. Wertschätzung, fachliche Weiterentwicklung und
                planbare Arbeitszeiten sind bei uns gelebter Alltag.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <LinkButton href="/karriere" size="lg">
                  Karriere bei Mally
                </LinkButton>
              </div>
            </div>
            <Card className="bg-white shadow-sm ring-1 ring-border-soft">
              <CardTitle>Wir suchen Verstärkung</CardTitle>
              <CardBody>
                Aktuell suchen wir eine:n Physiotherapeut:in (m/w/d) in Voll-
                oder Teilzeit für unser Team in Hamm-Bockum-Hövel.
              </CardBody>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
