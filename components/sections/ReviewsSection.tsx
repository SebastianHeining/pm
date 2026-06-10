import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  Section,
  SectionEyebrow,
  SectionHeading,
} from "@/components/ui/Section";
import { loadBewertungen } from "@/lib/content";

function Stars({ count }: { count: number }) {
  return (
    <span aria-label={`${count} von 5 Sternen`} className="text-brand-red">
      {"★".repeat(count)}
      <span className="text-border-strong">{"★".repeat(5 - count)}</span>
    </span>
  );
}

export async function ReviewsSection() {
  const bewertungen = await loadBewertungen();
  if (bewertungen.length === 0) return null;

  const shown = bewertungen.slice(0, 3);

  return (
    <Section spacing="default">
      <Container>
        <SectionEyebrow>Das sagen unsere Patient:innen</SectionEyebrow>
        <SectionHeading>Stimmen aus der Praxis.</SectionHeading>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {shown.map((b) => (
            <li
              key={b.slug}
              className="flex flex-col rounded-2xl bg-surface-warm p-7 ring-1 ring-border-soft"
            >
              <p className="text-xl tracking-wide">
                <Stars count={b.sterne} />
              </p>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-graphite">
                „{b.text}“
              </blockquote>
              <p className="mt-5 text-sm font-semibold text-brand-navy">
                {b.name}
                {b.ort && (
                  <span className="font-normal text-graphite-soft">
                    {" "}
                    · {b.ort}
                  </span>
                )}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-graphite-soft">
          Waren Sie bei uns in Behandlung?{" "}
          <Link
            href="/bewertung"
            className="font-medium text-brand-navy underline underline-offset-4 hover:text-brand-red"
          >
            Teilen Sie Ihre Erfahrung
          </Link>
          {" "}— es dauert keine zwei Minuten.
        </p>
      </Container>
    </Section>
  );
}
