"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navigation, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border-soft bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6 lg:h-24">
          {/* Großes Logo, das unten über den Header-Rahmen hinausragt */}
          <div className="relative z-10 -mb-6 self-end sm:-mb-7 lg:-mb-9">
            <Logo sizeClassName="h-20 w-auto drop-shadow-sm sm:h-24 lg:h-32" />
          </div>
          <nav aria-label="Hauptnavigation" className="hidden lg:flex">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-md px-4 py-2 text-sm font-medium text-brand-navy transition-colors hover:bg-surface-warm hover:text-brand-red"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="text-sm font-medium text-brand-navy hover:text-brand-red"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
            <LinkButton href="/kontakt" size="md" className="animate-cta-attention">
              Terminanfrage
            </LinkButton>
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-soft text-brand-navy lg:hidden"
          >
            <span className="sr-only">Menü</span>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>
      <div
        id="mobile-nav"
        className={cn(
          "lg:hidden border-t border-border-soft transition-[grid-template-rows] duration-200 grid",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <Container>
            <nav aria-label="Mobile Navigation" className="py-6">
              <ul className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-3 text-base font-medium text-brand-navy hover:bg-surface-warm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col gap-3 border-t border-border-soft pt-4">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="text-base font-medium text-brand-navy"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
                <LinkButton href="/kontakt" size="md">
                  Terminanfrage stellen
                </LinkButton>
              </div>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
