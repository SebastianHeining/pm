/**
 * Stilisierte Anfahrts- und Parkskizze rund um die Hammer Str. 90a.
 * Geographie der OpenStreetMap-Ansicht nachempfunden (nicht maßstabsgetreu),
 * bewusst reduziert: Praxis, Parken, Volksbank, Kirche, Bushaltestellen.
 */
export function AnfahrtsSkizze({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 760"
      role="img"
      aria-label="Anfahrtsskizze: Die Praxis liegt an der Hammer Straße 90a. Parkplätze direkt vor dem Gebäude und auf dem Kundenparkplatz am Ärztehaus, erreichbar über die kleine Seitenstraße. Bushaltestelle Löcke/JuSt in Gehweite."
      className={className}
      style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
    >
      {/* Grund */}
      <rect width="1000" height="760" fill="#F7F5F2" />

      {/* Dezente Gebäude zur Orientierung */}
      <g fill="#EAE6E0" stroke="#DBD6CF" strokeWidth="2">
        {/* Herz-Jesu-Kirche */}
        <rect x="80" y="130" width="110" height="85" rx="4" />
        {/* Volksbank */}
        <rect x="443" y="238" width="74" height="48" rx="4" />
        {/* Jugend- und Stadtteilzentrum */}
        <rect x="770" y="150" width="100" height="60" rx="4" />
      </g>

      {/* Straßen: Rand + Fahrbahn */}
      <g strokeLinecap="round" fill="none">
        {/* kleine Seitenstraße (senkrecht) */}
        <path d="M 388 0 L 428 304 L 468 760" stroke="#DBD6CF" strokeWidth="30" />
        <path d="M 388 0 L 428 304 L 468 760" stroke="#FFFFFF" strokeWidth="22" />
        {/* Windmühlenweg */}
        <path d="M 722 317 C 760 430 755 560 790 760" stroke="#DBD6CF" strokeWidth="26" />
        <path d="M 722 317 C 760 430 755 560 790 760" stroke="#FFFFFF" strokeWidth="18" />
        {/* Hammer Straße (Hauptstraße) */}
        <path d="M 0 416 L 1000 245" stroke="#DBD6CF" strokeWidth="52" />
        <path d="M 0 416 L 1000 245" stroke="#FFFFFF" strokeWidth="42" />
        <path d="M 0 416 L 1000 245" stroke="#DBD6CF" strokeWidth="2" strokeDasharray="14 12" />
      </g>

      {/* Straßennamen */}
      <text x="330" y="345" fill="#8A857E" fontSize="26" fontWeight="600" transform="rotate(-9.7 330 345)">
        Hammer Straße
      </text>
      <text x="762" y="560" fill="#8A857E" fontSize="21" fontWeight="600" transform="rotate(80 762 560)">
        Windmühlenweg
      </text>

      {/* Kirche: Icon + Label */}
      <g fill="#5C5751">
        <path d="M 135 118 v -26 m -9 9 h 18" stroke="#5C5751" strokeWidth="5" fill="none" strokeLinecap="round" />
        <text x="135" y="185" fontSize="20" fontWeight="600" textAnchor="middle" fill="#544F4A">
          Herz-Jesu-
        </text>
        <text x="135" y="207" fontSize="20" fontWeight="600" textAnchor="middle" fill="#544F4A">
          Kirche
        </text>
      </g>

      {/* Volksbank Label */}
      <text x="480" y="228" fontSize="20" fontWeight="600" textAnchor="middle" fill="#544F4A">
        Volksbank
      </text>

      {/* Jugendzentrum Label */}
      <text x="820" y="122" fontSize="17" fontWeight="600" textAnchor="middle" fill="#544F4A">
        Jugend- und Stadtteil-
      </text>
      <text x="820" y="144" fontSize="17" fontWeight="600" textAnchor="middle" fill="#544F4A">
        zentrum „JuSt“
      </text>

      {/* Kundenparkplatz am Ärztehaus (Streifen westlich der Seitenstraße) */}
      <g>
        <rect x="358" y="390" width="60" height="255" rx="8" fill="#EDE9E3" stroke="#C9C3BB" strokeWidth="2" strokeDasharray="7 5" />
        {[418, 452, 486, 520, 554, 588].map((y) => (
          <line key={y} x1="362" y1={y} x2="414" y2={y} stroke="#C9C3BB" strokeWidth="2" />
        ))}
        <circle cx="388" cy="518" r="24" fill="#544F4A" />
        <text x="388" y="528" fontSize="30" fontWeight="700" textAnchor="middle" fill="#FFFFFF">
          P
        </text>
        <text x="330" y="682" fontSize="19" fontWeight="600" fill="#544F4A">
          Kundenparkplatz am Ärztehaus
        </text>
        <text x="330" y="705" fontSize="17" fill="#5C5751">
          2 Std. kostenlos, bitte Parkscheibe auslegen
        </text>
      </g>

      {/* Parken direkt vor dem Gebäude */}
      <g>
        <circle cx="622" cy="352" r="17" fill="#544F4A" />
        <text x="622" y="359" fontSize="21" fontWeight="700" textAnchor="middle" fill="#FFFFFF">
          P
        </text>
        <text x="648" y="358" fontSize="17" fill="#5C5751">
          vor dem Gebäude
        </text>
      </g>

      {/* Praxisgebäude */}
      <rect x="455" y="344" width="135" height="100" rx="6" fill="#F1D4D6" stroke="#C8202A" strokeWidth="3" />

      {/* Bushaltestellen */}
      <g>
        <g transform="translate(618 268)">
          <rect x="-13" y="-13" width="26" height="26" rx="6" fill="#544F4A" />
          <path d="M -6 -5 h 12 v 8 h -12 z M -5 6 h 3 M 2 6 h 3" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
        <g transform="translate(300 400)">
          <rect x="-13" y="-13" width="26" height="26" rx="6" fill="#544F4A" />
          <path d="M -6 -5 h 12 v 8 h -12 z M -5 6 h 3 M 2 6 h 3" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
        <text x="288" y="440" fontSize="19" fontWeight="600" fill="#544F4A" textAnchor="middle">
          Haltestelle
        </text>
        <text x="288" y="462" fontSize="19" fontWeight="600" fill="#544F4A" textAnchor="middle">
          „Löcke/JuSt“
        </text>
      </g>

      {/* Praxis-Pin + Label (zuletzt, liegt über allem) */}
      <g>
        <path d="M 523 388 C 523 388 497 356 497 336 a 26 26 0 1 1 52 0 c 0 20 -26 52 -26 52 z" fill="#C8202A" />
        <circle cx="523" cy="334" r="10" fill="#FFFFFF" />
        <rect x="548" y="392" width="330" height="62" rx="12" fill="#FFFFFF" stroke="#E5E2DD" strokeWidth="2" />
        <text x="566" y="418" fontSize="21" fontWeight="700" fill="#C8202A">
          Praxis für Physiotherapie
        </text>
        <text x="566" y="442" fontSize="19" fontWeight="600" fill="#544F4A">
          Astrid Mally · Hammer Str. 90a
        </text>
      </g>

      {/* Nordpfeil */}
      <g transform="translate(952 60)">
        <circle r="26" fill="#FFFFFF" stroke="#E5E2DD" strokeWidth="2" />
        <path d="M 0 12 L 0 -12 M 0 -12 l -7 9 M 0 -12 l 7 9" stroke="#544F4A" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text y="-34" fontSize="17" fontWeight="700" textAnchor="middle" fill="#544F4A">
          N
        </text>
      </g>

      {/* Fußnote */}
      <text x="978" y="742" fontSize="14" fill="#8A857E" textAnchor="end">
        Skizze, nicht maßstabsgetreu
      </text>
    </svg>
  );
}
