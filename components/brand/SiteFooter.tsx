import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

const footerNav = {
  Praxis: [
    { label: "Über uns", href: "/praxis" },
    { label: "Über Astrid", href: "/ueber-astrid" },
    { label: "Team", href: "/praxis/team" },
    { label: "Karriere", href: "/karriere" },
  ],
  Leistungen: [
    { label: "Übersicht", href: "/leistungen" },
    { label: "Manuelle Therapie", href: "/leistungen/manuelle-therapie" },
    { label: "CMD / Kiefergelenk", href: "/leistungen/cmd-kiefergelenk" },
    { label: "Lymphdrainage", href: "/leistungen/manuelle-lymphdrainage" },
    { label: "Massage & Bindegewebsmassage", href: "/leistungen/massage-bgm" },
  ],
  Service: [
    { label: "Kontakt & Anfahrt", href: "/kontakt" },
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "FAQ", href: "/faq" },
    { label: "Bewertung abgeben", href: "/bewertung" },
  ],
  Rechtliches: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy text-white">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <Image
                src="/assets/logo/logo-am.png"
                alt=""
                width={72}
                height={72}
                className="h-16 w-16 rounded-full ring-1 ring-white/15"
              />
              <span>
                <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/70">
                  Praxis für Physiotherapie
                </span>
                <span className="block text-2xl font-semibold leading-none tracking-tight text-white">
                  Astrid Mally
                </span>
              </span>
            </Link>
            <p className="mt-8 max-w-sm text-base leading-relaxed text-white/80">
              {siteConfig.description} {siteConfig.tagline.charAt(0).toUpperCase() + siteConfig.tagline.slice(1)}.
            </p>
            <div className="mt-8 space-y-3 text-sm leading-relaxed text-white/85">
              <p className="font-semibold uppercase tracking-[0.18em] text-white">
                Praxis
              </p>
              <p>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}-{siteConfig.address.district}
              </p>
              <p>
                Telefon:{" "}
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="underline underline-offset-4 hover:text-brand-red-soft"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="underline underline-offset-4 hover:text-brand-red-soft"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
            <div className="mt-8 space-y-1 text-sm leading-relaxed text-white/85">
              <p className="font-semibold uppercase tracking-[0.18em] text-white">
                Öffnungszeiten
              </p>
              {siteConfig.hours.map((h) => (
                <p key={h.days} className="whitespace-nowrap">
                  <span className="inline-block w-20 text-white/70">{h.days}</span>
                  {h.time}
                </p>
              ))}
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(footerNav).map(([heading, links]) => (
              <nav key={heading} aria-label={heading}>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  {heading}
                </p>
                <ul className="mt-4 space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.legal.licensed}
          </p>
          <p>Hamm-Bockum-Hövel</p>
        </div>
      </Container>
    </footer>
  );
}
