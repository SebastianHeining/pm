# TODO — Offene Punkte (für Astrid Mally bzw. Sebastian)

> Stand: 2026-05-26. Stand reflektiert M1+M2 abgeschlossen. Updates hier eintragen, sobald geklärt.

## Inhalte / Klärung mit der Kundin

- [ ] **Foto-Zuordnung Team**: 8 Studiofotos vorhanden. Sicher identifiziert: Astrid Mally (`public/team/astrid-mally.jpg`, blonde Locken, dunkelblaues Shirt). Die restlichen 7 Fotos sind aktuell als `team-01` … `team-08` benannt. Pro Foto muss Astrid sagen: Wer ist das?
- [ ] **Marion Wenzel**: Qualifikationen ergänzen (PPTX sagte "to be filled"). Vermutlich „seit '81" als Eintrittsjahr, plausibel Physiotherapeutin mit allgemeinem Profil.
- [ ] **Markus Wenzel**: Auf der alten Seite gelistet als Therapeut (kein Tippfehler — Markus UND Marion sind zwei Personen). Soll er im neuen Team bleiben? Wenn ja: Spezialisierung Manuelle Lymphdrainage + Ödemtherapie (laut PPTX), Anstellung als Masseur und med. Bademeister.
- [ ] **Sektorale Heilpraktikerin**: PPTX und Excel sagen *Birgit Wittwer*. Alte Webseite (heute online) sagt aber *Martina Köster, seit Januar 2015*. → Bitte klären: wer ist es **aktuell**?
- [ ] **Birgit Wittwer Foto**: nicht eindeutig in den 8 Fotos zu identifizieren — gibt es ein separates Foto?
- [ ] **Empfang/Anmeldung**: laut alter Seite Andrea Dörholt, Sabine Ueter, Sabine Mally (Praxismanagement). Sollen sie auf der Team-Seite mit aufgeführt werden? Wenn ja, Fotos vorhanden?
- [ ] **Praxisraum-Fotos**: alte sollen raus, neue rein. Aktuell `public/praxis/` leer. → Fotoshooting nötig oder vorhandene Bilder beistellen?
- [ ] **Logo**: Header nutzt aktuell die JPG-Wortmarke (`logo-am-wortmarke.jpg`). Für saubere Skalierung wäre eine SVG-Version optimal — falls vorhanden, schicken. Sonst exportieren wir aus dem `.eps`.

## Technik / Setup

- [ ] **Hosting-Entscheidung**: ionos oder hetzner oder eigener Server.
  - Self-hosted Node.js (empfohlen): `pnpm build && pnpm start`, dahinter nginx als Reverse Proxy + Let's Encrypt
  - Alternative: Static Export auf einen statischen Hoster — dann brauchen wir ein externes Formular-Backend (z. B. Formspree, oder PHP-Mailer)
- [ ] **Domain-DNS**: aktueller Hoster und Zugang klären; Wechsel-Plan und Downtime-Fenster
- [ ] **E-Mail-Postfach `info@physiotherapie-mally.de`**: existiert es schon? Wer richtet ein? SMTP-Zugangsdaten für Kontaktformular benötigt → `.env`:
  - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM`, `MAIL_TO`
- [ ] **Datenschutz-/Impressums-Review**: aktuelle Texte sind Vorschläge auf Basis der alten Seite und gängiger Muster. Vor Live-Gang juristisch prüfen lassen (insb. Matterport-Einbindung, OSM-Karte, Patient:innen-Kontaktformular).

## Pending Aufgaben (Roadmap)

- [ ] **M3** — Leistungsseiten (Übersicht + 13 Detailseiten)
- [ ] **M4** — Team-Seite + Decap CMS für Team-Pflege durch Mitarbeiterin
- [ ] **M5** — Karriere-Seite + Blog-Setup + erste Pilot-Artikel (Sebastian schreibt, später Astrid)
- [ ] **M6** — Polish, Performance/Accessibility-Audit, SEO-Audit, Google Business Profile sync, Domain-Umzug

## Nice-to-haves (mit Astrid abstimmen)

- [ ] **Google-Bewertungen / Testimonials** prominent einbinden (Astrid hat zugestimmt — Trust-Widget oder Zitate-Karussell)
- [ ] **Patient:innen-Stimmen** als Markdown-Sammlung über CMS
- [ ] **Newsletter** oder "Ratgeber per Mail" als Lead-Magnet — nur falls explizit gewünscht
