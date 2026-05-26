import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "wordmark",
  className,
  asLink = true,
  invert = false,
}: {
  variant?: "wordmark" | "mark";
  className?: string;
  asLink?: boolean;
  invert?: boolean;
}) {
  const src =
    variant === "mark"
      ? "/assets/logo/logo-am.png"
      : "/assets/logo/logo-am-wortmarke.jpg";

  // Aspect ratios from source files: mark is square (913x913), wordmark ≈ 1069x562
  const width = variant === "mark" ? 56 : 180;
  const height = variant === "mark" ? 56 : 96;

  const img = (
    <Image
      src={src}
      width={width}
      height={height}
      alt="Praxis für Physiotherapie Astrid Mally"
      priority
      className={cn(
        "h-12 w-auto sm:h-14",
        variant === "mark" && "rounded-full",
        invert && "brightness-0 invert",
        className,
      )}
    />
  );

  if (!asLink) return img;

  return (
    <Link href="/" aria-label="Zur Startseite" className="inline-flex items-center">
      {img}
    </Link>
  );
}
