"use client";

import { useEffect, useState } from "react";
import { THEME_KEY } from "./ThemeSwitch";

// Kleine Hinweis-Pille, solange die Rot/Grau-Variante aktiv ist —
// macht den Vergleich für die Kundin nachvollziehbar und bietet den Rückweg.
export function ThemeBadge() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(localStorage.getItem(THEME_KEY) === "rot");
  }, []);

  if (!active) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-3 rounded-full bg-brand-navy-deep/90 py-2 pl-4 pr-2 text-xs text-white shadow-lg backdrop-blur">
      <span className="font-medium">Design-Variante: Rot/Grau</span>
      <button
        type="button"
        onClick={() => {
          localStorage.removeItem(THEME_KEY);
          document.documentElement.classList.remove("theme-rot");
          window.location.reload();
        }}
        className="rounded-full bg-white/15 px-3 py-1 font-semibold transition-colors hover:bg-brand-red"
      >
        Standard anzeigen
      </button>
    </div>
  );
}
