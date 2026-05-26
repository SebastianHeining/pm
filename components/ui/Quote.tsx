import { cn } from "@/lib/utils";

export function Quote({
  children,
  attribution,
  className,
}: {
  children: React.ReactNode;
  attribution?: string;
  className?: string;
}) {
  return (
    <figure className={cn("relative pl-8", className)}>
      <span
        aria-hidden
        className="absolute left-0 top-0 text-6xl leading-none text-brand-red"
      >
        “
      </span>
      <blockquote className="text-pretty text-2xl font-medium leading-snug text-brand-navy sm:text-3xl">
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 text-sm uppercase tracking-[0.18em] text-graphite-soft">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}
