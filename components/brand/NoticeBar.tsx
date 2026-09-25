import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/**
 * Temporäres Hinweis-Band unter dem Header (z. B. Baustelle vor der Tür).
 * Gesteuert über siteConfig.aktuellerHinweis — null blendet es aus.
 */
export function NoticeBar() {
  const hinweis = siteConfig.aktuellerHinweis;
  if (!hinweis) return null;

  return (
    <div className="border-b border-brand-red/15 bg-brand-red-soft print:hidden">
      <p className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-0.5 px-4 py-3 text-center text-base leading-snug text-brand-navy">
        <span aria-hidden>{hinweis.emoji}</span>
        <span>{hinweis.kurz}</span>
        <Link
          href="/kontakt#anfahrt"
          className="whitespace-nowrap font-semibold underline underline-offset-4 hover:text-brand-red"
        >
          Anfahrt-Tipps →
        </Link>
      </p>
    </div>
  );
}
