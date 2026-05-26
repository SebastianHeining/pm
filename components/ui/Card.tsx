import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Card({
  children,
  className,
  tone = "warm",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  tone?: "warm" | "white" | "navy";
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={cn(
        "rounded-2xl p-8",
        tone === "warm" && "bg-surface-warm border border-border-soft",
        tone === "white" && "bg-white shadow-sm ring-1 ring-border-soft",
        tone === "navy" && "bg-brand-navy text-white",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function CardTitle({
  children,
  className,
  as: Tag = "h3",
}: {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4";
}) {
  return (
    <Tag
      className={cn(
        "text-xl font-semibold leading-snug tracking-tight",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function CardBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("mt-3 text-base leading-relaxed", className)}>
      {children}
    </p>
  );
}
