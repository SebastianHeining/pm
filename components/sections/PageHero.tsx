import { Container } from "@/components/ui/Container";
import {
  Section,
  SectionEyebrow,
  SectionHeading,
  SectionLead,
} from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  lead,
  tone = "warm",
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: "warm" | "white" | "navy";
  align?: "left" | "center";
  children?: React.ReactNode;
}) {
  return (
    <Section tone={tone} spacing="default">
      <Container>
        <div className={cn(align === "center" && "text-center")}>
          {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
          <SectionHeading as="h1" className={cn(align === "center" && "mx-auto")}>
            {title}
          </SectionHeading>
          {lead && (
            <SectionLead className={cn(align === "center" && "mx-auto")}>
              {lead}
            </SectionLead>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </Section>
  );
}
