"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const THEME_KEY = "mally-theme";

export function ThemeSwitch({ mode }: { mode: "rot" | "standard" }) {
  const router = useRouter();

  useEffect(() => {
    if (mode === "rot") {
      localStorage.setItem(THEME_KEY, "rot");
      document.documentElement.classList.add("theme-rot");
    } else {
      localStorage.removeItem(THEME_KEY);
      document.documentElement.classList.remove("theme-rot");
    }
    router.replace("/");
  }, [mode, router]);

  return (
    <p className="px-6 py-16 text-center text-base text-graphite">
      Design-Variante wird aktiviert …
    </p>
  );
}
