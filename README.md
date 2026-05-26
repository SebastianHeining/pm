# Praxis Mally — Webseite

Neue Webseite für die [Praxis für Physiotherapie Astrid Mally](https://physiotherapie-mally.de) in Hamm-Bockum-Hövel. Next.js 16 + Tailwind v4, statisch generiert, mit Markdown-basierter Pflege von Team und Ratgeber.

## Lokale Entwicklung

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Production-Build prüfen:

```bash
pnpm build
pnpm start
```

## Aufbau

```
app/                    Routen (App Router)
  api/contact/          Terminanfrage-Endpoint
  leistungen/[slug]/    Dynamische Leistungsseiten
  ratgeber/[slug]/      Dynamische Blog-Artikel
  praxis/team/          Team-Seite (lädt Markdown)
components/
  brand/                Header, Footer, Logo
  sections/             Wiederverwendbare Sektionen (Hero, Matterport, Formular)
  ui/                   Button, Card, Section, Accordion, Quote, …
  icons/                Inline-SVG-Service-Icons
content/
  leistungen.ts         13 Leistungen als getypte Daten
  team/*.md             1 Datei pro Person, Frontmatter + Bio
  blog/*.md             1 Datei pro Ratgeber-Artikel
lib/                    site-config, seo, content-loader, mail
public/                 Assets (Logo, Teamfotos, Praxisräume)
public/admin/           Decap-CMS-Oberfläche für die Redaktion
```

## Inhalte pflegen

**Statische Seiten** (Startseite, Praxis, Über Astrid, Leistungen, Kontakt, FAQ, Karriere): direkt im Code.

**Team** und **Blog**: Markdown-Dateien in `content/team/` und `content/blog/`. Wahlweise

1. direkt im Editor bearbeiten, oder
2. über die Web-Oberfläche **Decap CMS** unter `/admin`.

Für lokale Tests des CMS in einem zweiten Terminal:
```bash
npx decap-server
```
Dann `/admin` im Browser öffnen.

Im Production wird `backend: git-gateway` aktiv und Login läuft über GitHub OAuth (siehe `public/admin/config.yml`).

## Kontaktformular / SMTP

Die Terminanfrage in `lib/contact.ts` versendet via SMTP über **nodemailer**. Fehlen die Env-Variablen, wird die Nachricht nur ins Server-Log geschrieben — das Formular gibt trotzdem erfolgreich zurück (Dev-Fallback).

Für Production diese Variablen setzen:

```
SMTP_HOST=...
SMTP_PORT=587            # oder 465 für SSL
SMTP_USER=...
SMTP_PASS=...
MAIL_FROM=info@physiotherapie-mally.de
MAIL_TO=info@physiotherapie-mally.de
```

## Designsystem

- Schrift: **DM Sans** (selbst gehostet via `next/font`)
- Farben: `#152D47` Marineblau · `#C8202A` Logo-Rot · `#4C4C4D` Graphit · `#F7F5F2` Warm-Off-White
- Style-Guide unter `/styleguide` (nicht in Sitemap, von robots ausgeschlossen)

## Hosting

Self-host: `pnpm build && pnpm start` (Node 22) hinter nginx-Reverse-Proxy.
Alternativ Vercel mit `git push` als Auto-Deploy.

## Offene Punkte

Siehe [`TODO.md`](./TODO.md) — Foto-Zuordnung, Hosting-Setup, Klärung sektorale Heilpraktikerin etc.
