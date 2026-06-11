type Props = {
  size?: number;
  className?: string;
};

/**
 * Gezeichneter Comic-Avatar „Sabine“ im weißen Praxis-Kasack — flacher,
 * freundlich-professioneller Stil in den Markenfarben.
 */
export function SabineAvatar({ size = 56, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      role="img"
      aria-label="Sabine — digitale Praxis-Assistentin"
      className={className}
    >
      <defs>
        <clipPath id="sabine-circle">
          <circle cx="48" cy="48" r="46" />
        </clipPath>
      </defs>

      {/* Hintergrund */}
      <circle cx="48" cy="48" r="46" fill="#f1d4d6" />
      <g clipPath="url(#sabine-circle)">
        {/* Haare hinten (blond) — eigene Kopf-Gruppe, da sie hinter dem
            Kasack liegen müssen; animiert synchron zur Gesichts-Gruppe */}
        <g className="sabine-head">
          <path
            d="M48 16c-16 0-25 11-25 25 0 8 1 14 1 20 0 9 4 16 4 16h40s4-7 4-16c0-6 1-12 1-20 0-14-9-25-25-25z"
            fill="#d9a93f"
          />
        </g>
        {/* Kasack (weiß, Arztdress) */}
        <path
          d="M24 96c0-15 9-23 24-23s24 8 24 23z"
          fill="#ffffff"
          stroke="#d9d5cf"
          strokeWidth="1.5"
        />
        {/* V-Ausschnitt */}
        <path
          d="M40 74l8 9 8-9"
          fill="none"
          stroke="#d9d5cf"
          strokeWidth="1.5"
        />
        {/* Unterziehshirt im V */}
        <path d="M44 78l4 5 4-5c-1.5-2-6.5-2-8 0z" fill="#544f4a" />
        {/* Brusttasche mit rotem Stift */}
        <rect x="60" y="82" width="9" height="8" rx="1.5" fill="#f7f5f2" stroke="#d9d5cf" />
        <rect x="63.4" y="79.5" width="2.2" height="6" rx="1.1" fill="#c8202a" />
        {/* Hals */}
        <path d="M42 64h12v8c0 3.3-2.7 5-6 5s-6-1.7-6-5z" fill="#f3c9a5" />
        {/* Kopf-Gruppe (neigt sich sanft) */}
        <g className="sabine-head">
        {/* Gesicht */}
        <ellipse cx="48" cy="45" rx="17.5" ry="19" fill="#f9d9b8" />
        {/* Ohren */}
        <circle cx="30.5" cy="46" r="3.4" fill="#f9d9b8" />
        <circle cx="65.5" cy="46" r="3.4" fill="#f9d9b8" />
        {/* Ohrring */}
        <circle cx="65.5" cy="49.5" r="1.4" fill="#c8202a" />
        {/* Pony / Haare vorn */}
        <path
          d="M30 44c-1-14 7-22 18-22s19 8 18 22c-1-7-4-9-7-13-2 4-14 6-22 4-3 2-6 3-7 9z"
          fill="#e8bd54"
        />
        {/* Haarsträhnen seitlich */}
        <path d="M29 42c-2 6-2 13 0 18-4-2-6-8-5-13z" fill="#e8bd54" />
        <path d="M67 42c2 6 2 13 0 18 4-2 6-8 5-13z" fill="#e8bd54" />
        {/* Augenbrauen */}
        <path d="M37 41c2-2 6-2 8 0" fill="none" stroke="#b5872f" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M51 41c2-2 6-2 8 0" fill="none" stroke="#b5872f" strokeWidth="1.8" strokeLinecap="round" />
        {/* Augen (blinzeln) */}
        <g className="sabine-eye">
          <circle cx="41" cy="46.5" r="2.3" fill="#423e39" />
          <circle cx="41.8" cy="45.7" r="0.7" fill="#ffffff" />
        </g>
        <g className="sabine-eye">
          <circle cx="55" cy="46.5" r="2.3" fill="#423e39" />
          <circle cx="55.8" cy="45.7" r="0.7" fill="#ffffff" />
        </g>
        {/* Wangen */}
        <circle cx="36.5" cy="53" r="2.8" fill="#f4b8ab" opacity="0.7" />
        <circle cx="59.5" cy="53" r="2.8" fill="#f4b8ab" opacity="0.7" />
        {/* Nase */}
        <path d="M48 49v4.5c0 1-1 1.6-2 1.4" fill="none" stroke="#e0a87f" strokeWidth="1.5" strokeLinecap="round" />
        {/* Lächeln */}
        <path
          d="M41 58c2.5 3 11.5 3 14 0"
          fill="none"
          stroke="#b3593f"
          strokeWidth="2"
          strokeLinecap="round"
        />
        </g>
      </g>
      {/* feiner Rand */}
      <circle cx="48" cy="48" r="45.2" fill="none" stroke="#c8202a" strokeOpacity="0.25" strokeWidth="1.5" />
    </svg>
  );
}
