import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "onNavy";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-red text-white hover:bg-brand-navy focus-visible:outline-brand-red",
  secondary:
    "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white focus-visible:outline-brand-navy",
  ghost:
    "text-brand-navy hover:text-brand-red underline-offset-4 hover:underline focus-visible:outline-brand-red",
  onNavy:
    "bg-white text-brand-navy hover:bg-brand-red hover:text-white focus-visible:outline-white",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  iconRight?: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  iconRight,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
      {iconRight}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  iconRight,
  external,
  ...rest
}: CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; external?: boolean }) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, sizes[size], variants[variant], className)}
        {...rest}
      >
        {children}
        {iconRight}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {children}
      {iconRight}
    </Link>
  );
}
