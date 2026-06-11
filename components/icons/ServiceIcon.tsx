import { cn } from "@/lib/utils";

export type IconName =
  | "kg"
  | "manuelle"
  | "lymph"
  | "cmd"
  | "massage"
  | "skoliose"
  | "beckenboden"
  | "pilates"
  | "heilpraktiker"
  | "waerme"
  | "elektro"
  | "schlingentisch"
  | "tape"
  | "reflex"
  | "hausbesuch";

const paths: Record<IconName, React.ReactNode> = {
  // Aktive Person in Bewegung — Krankengymnastik
  kg: (
    <>
      <circle cx="12" cy="4.5" r="2" />
      <path d="M12 7v6" />
      <path d="M5 9.5l7 1L19 8" />
      <path d="M12 13l-3.5 8M12 13l3.5 8" />
    </>
  ),
  manuelle: (
    <>
      <path d="M7 14V8a2 2 0 1 1 4 0v6" />
      <path d="M11 11V6a2 2 0 1 1 4 0v8" />
      <path d="M15 12V8a2 2 0 1 1 4 0v6c0 4-3 7-7 7s-7-3-7-7" />
    </>
  ),
  lymph: (
    <>
      <path d="M12 21c4-4 7-7 7-11a5 5 0 0 0-9-3 5 5 0 0 0-9 3c0 4 3 7 7 11 1 1 3 1 4 0Z" />
      <path d="M12 14v3" />
      <circle cx="12" cy="10" r="0.8" fill="currentColor" />
    </>
  ),
  // Kiefer mit Gelenkpunkt — CMD
  cmd: (
    <>
      <path d="M4.5 8.5h10" />
      <path d="M17 10.5c0 4.2-3.2 7-7.5 7h-5" />
      <circle cx="17" cy="8.5" r="2" />
      <path d="M20.5 5.5l1.5-1.5M21.5 9.5H23" />
    </>
  ),
  skoliose: (
    <>
      <path d="M12 3c-2 3 2 5 0 8s2 5 0 8" />
      <path d="M8 5h8M8 12h8M8 19h8" />
    </>
  ),
  beckenboden: (
    <>
      <path d="M4 12h16" />
      <path d="M6 12c0 4 2 7 6 7s6-3 6-7" />
      <path d="M9 12V8a3 3 0 0 1 6 0v4" />
    </>
  ),
  pilates: (
    <>
      <circle cx="12" cy="6" r="2" />
      <path d="M12 8v5l-3 8M12 13l3 8M9 13h6" />
    </>
  ),
  heilpraktiker: (
    <>
      <path d="M12 3v18M3 12h18" />
      <circle cx="12" cy="12" r="9" />
    </>
  ),
  waerme: (
    <>
      <path d="M8 21c0-2 2-3 2-5s-2-2-2-5 2-3 2-5" />
      <path d="M14 21c0-2 2-3 2-5s-2-2-2-5 2-3 2-5" />
    </>
  ),
  elektro: (
    <>
      <path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z" />
    </>
  ),
  schlingentisch: (
    <>
      <path d="M4 4h16" />
      <path d="M7 4v5M17 4v5" />
      <path d="M7 9c0 4 2.2 6.5 5 6.5S17 13 17 9" />
      <path d="M12 15.5V20" />
    </>
  ),
  tape: (
    <>
      <path d="M5 5l14 14" />
      <path d="M5 9l10 10" />
      <path d="M9 5l10 10" />
    </>
  ),
  // Fußsohle mit Druckpunkten — Fußreflexzonen
  reflex: (
    <>
      <path d="M10.5 3.5C13 3.5 15 5.8 15 9c0 2.4-1.1 3.6-1.1 5.6 0 1.6 1 2.2 1 3.7 0 1.6-1.3 2.7-3.1 2.7s-3-1.1-3-2.6c0-1.6.7-2.4.7-4.4C9.5 11.6 7 10.6 7 7.5c0-2.3 1.4-4 3.5-4Z" />
      <circle cx="11" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="11.6" cy="11" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="11" cy="14.5" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  // Zwei Hände über Wellen — Massage
  massage: (
    <>
      <path d="M7 4.5c2.5 1.5 7.5 1.5 10 0" />
      <path d="M5.5 9c3.5 2 9.5 2 13 0" />
      <path d="M12 11.5v3" />
      <path d="M8 21v-3.5c0-1.5 1-2.5 2.5-2.5h3c1.5 0 2.5 1 2.5 2.5V21" />
      <path d="M5.5 21v-2c0-1.2.8-2 2-2M18.5 21v-2c0-1.2-.8-2-2-2" />
    </>
  ),
  hausbesuch: (
    <>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </>
  ),
};

export function ServiceIcon({
  name,
  className,
  size = 28,
}: {
  name: IconName;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-brand-red", className)}
    >
      {paths[name]}
    </svg>
  );
}
