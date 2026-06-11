import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "wordmark",
  className,
  asLink = true,
  invert = false,
  sizeClassName = "h-12 w-auto sm:h-14",
}: {
  variant?: "wordmark" | "mark";
  className?: string;
  asLink?: boolean;
  invert?: boolean;
  sizeClassName?: string;
}) {
  const src =
    variant === "mark"
      ? "/assets/logo/logo-am.png"
      : "/assets/logo/logo-am-wortmarke.png";

  // Source sizes: mark 913x913, wordmark (transparent PNG, getrimmt) 918x415
  const width = variant === "mark" ? 56 : 240;
  const height = variant === "mark" ? 56 : 108;

  const img = (
    <Image
      src={src}
      width={width}
      height={height}
      alt="Praxis für Physiotherapie Astrid Mally"
      priority
      className={cn(
        sizeClassName,
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
