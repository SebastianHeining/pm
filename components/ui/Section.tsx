import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "white",
  spacing = "default",
  as: Tag = "section",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "white" | "warm" | "navy" | "mute";
  spacing?: "tight" | "default" | "loose";
  as?: "section" | "div" | "article" | "header" | "footer";
}) {
  return (
    <Tag
      className={cn(
        tone === "white" && "bg-surface",
        tone === "warm" && "bg-surface-warm",
        tone === "mute" && "bg-surface-mute",
        // FB: Kunde wollte die dunklen CTA-Bänder etwas heller — soft-Ton
        // statt Vollton; der Footer bleibt dunkler (bg-brand-navy)
        tone === "navy" && "bg-brand-navy-soft text-white",
        spacing === "tight" && "py-12 sm:py-16",
        spacing === "default" && "py-20 sm:py-28 lg:py-32",
        spacing === "loose" && "py-28 sm:py-36 lg:py-44",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-brand-red">
      <span className="h-px w-8 bg-brand-red" />
      {children}
    </span>
  );
}

export function SectionHeading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        Tag === "h1" && "text-4xl sm:text-5xl lg:text-6xl",
        Tag === "h2" && "text-3xl sm:text-4xl lg:text-5xl",
        Tag === "h3" && "text-2xl sm:text-3xl",
        "mt-4 max-w-3xl text-balance font-semibold leading-[1.1] tracking-tight",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function SectionLead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-6 max-w-2xl text-lg leading-relaxed text-graphite sm:text-xl",
        className,
      )}
    >
      {children}
    </p>
  );
}
