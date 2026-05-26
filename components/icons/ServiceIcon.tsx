import { cn } from "@/lib/utils";

export type IconName =
  | "kg"
  | "manuelle"
  | "lymph"
  | "cmd"
  | "skoliose"
  | "beckenboden"
  | "pilates"
  | "heilpraktiker"
  | "waerme"
  | "elektro"
  | "tape"
  | "reflex"
  | "hausbesuch";

const paths: Record<IconName, React.ReactNode> = {
  kg: (
    <>
      <path d="M12 3v18M4 8h16M4 16h16" />
      <circle cx="12" cy="12" r="9" />
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
  cmd: (
    <>
      <path d="M5 9c0-3 3-5 7-5s7 2 7 5c0 2-1 3-3 4-1 1-1 1-1 3v2c0 1-1 2-3 2s-3-1-3-2v-3c0-1 0-1-1-2-2-1-3-2-3-4Z" />
      <path d="M9 13l-2 4M15 13l2 4" />
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
  tape: (
    <>
      <path d="M5 5l14 14" />
      <path d="M5 9l10 10" />
      <path d="M9 5l10 10" />
    </>
  ),
  reflex: (
    <>
      <path d="M9 21c-2 0-4-2-4-4 0-3 4-7 4-10a3 3 0 0 1 6 0c0 1 0 2 1 3 2 2 3 4 3 6 0 2-1 4-3 5-1 0-1 0-2-1-1 1-3 1-5 1Z" />
      <circle cx="10" cy="9" r="0.8" fill="currentColor" />
      <circle cx="14" cy="11" r="0.8" fill="currentColor" />
      <circle cx="11" cy="14" r="0.8" fill="currentColor" />
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
