# TODO — Offene Punkte (für Astrid Mally bzw. Sebastian)

> Stand: 2026-06-10. Kunden-Feedback („Änderungen Sebastian~02.docx") ist eingearbeitet.

## Inhalte / Klärung mit der Kundin

- [x] **Foto-Zuordnung Team**: KOMPLETT gelöst über die Bilder im Feedback-Dokument. Alle 10 Personen haben ihr Foto: Astrid, Stefanie, Celina, Marion, Markus, Zoe (Therapie) + Andrea, Sabine U., Sabine M., Jasmin (Empfang). Das übrige Studio-Foto (ältere Dame, rote Brille, pinkes Shirt — vermutlich ehemalige Mitarbeiterin) wurde entfernt.
- [ ] **Bessere Fotos anfragen**: Zoe Spalek (~240 px), Stefanie Scholz (Word-Rasterpunkte sichtbar) und Marion Wenzel (Handy-Foto, warmstichig) stammen aus dem Word-Dokument in niedriger Qualität. Im nächsten Foto-Termin durch Studio-Aufnahmen ersetzen.
- [ ] **Zoe Spalek**: Qualifikationen nach Ausbildungsabschluss ergänzen.
- [ ] **Marion Wenzel**: Weitere Qualifikationen über „Physiotherapeutin" hinaus? Aktuell bewusst schlicht gehalten.
- [ ] **Eintrittsjahre Empfangs-Team** (Andrea, Sabine U., Sabine M., Jasmin) — falls gewünscht.
- [ ] **„Wann diese Behandlung sinnvoll ist"**: Indikationslisten auf allen Leistungsseiten von Astrid fachlich freigeben lassen (Feedback bat um Prüfung).
- [ ] **Fotos bei Leistungen**: Entscheidung Sebastian (Juni 2026): eigenes Shooting in der Praxis. Termin mit Astrid vereinbaren — dabei auch Ersatz-Fotos für Stefanie/Marion/Zoe machen. Option als Zwischenlösung: Standbilder aus dem Matterport-Rundgang für raumbezogene Seiten (Schlingentisch, Praxis).
- [ ] **Praxisraum-Fotos** allgemein: `public/praxis/` weiterhin leer — wird mit dem Shooting gelöst.
- [ ] **Podcast-Links**: „Neuro 360" und „Momentmal (Franziska Behlert)" haben noch keinen verifizierten Link — aktuell nur Suchhinweis. Links von Astrid besorgen, dann QR-Codes automatisch.
- [x] **Kategorie/Kostenübernahme bei Leistungen**: Kategorie entfernt, Kostenübernahme-Box bleibt (Entscheidung Sebastian, Juni 2026) — Texte vereinheitlicht („Kassenleistung — …").
- [ ] **WABASKA**: Als eigene Leistungsseite entfernt (gehört zur normalen KG). Quali-Tag bei Stefanie Scholz vorhanden. Gewünschtes „Aufklapp-Detail beim Klick auf die Qualifikation" auf der Team-Seite wäre als Erweiterung möglich — bei Bedarf melden.
- [ ] **Logo als SVG**: weiterhin offen (aktuell PNG/JPG; EPS liegt im Repo).

## Bewertungs-Feature (NEU — eingebaut)

- [x] `/bewertung` — Formular ohne Google-Konto (Sterne, Text, Name optional, Einwilligung)
- [x] `/bewertung/aushang` — A4-Druckseite mit QR-Code für die Praxis
- [x] Decap-CMS-Collection „Bewertungen" — eingehende Bewertungen kommen per E-Mail, Mitarbeiterin legt sie im CMS an und schaltet sie frei
- [x] Startseiten-Sektion „Das sagen unsere Patient:innen" (erscheint erst, wenn mind. 1 Bewertung veröffentlicht ist)
- [ ] **Wichtig**: QR-Code zeigt auf `physiotherapie-mally.de/bewertung` — funktioniert erst nach dem Domain-Umzug. Aushang erst danach aufhängen.
- [ ] Hinweis-Text „Bewertungen" in Datenschutzerklärung ergänzen lassen (Einwilligung/Widerruf ist im Formular abgedeckt, zur Sicherheit juristisch prüfen).

## Technik / Setup

- [ ] **Hosting-Entscheidung**: ionos / hetzner / eigener Server (oder Vercel behalten — läuft bereits auf mally-website-one.vercel.app).
- [ ] **Domain-DNS**: Zugang klären; Umzugsplan.
- [ ] **E-Mail-Postfach `info@physiotherapie-mally.de`** + SMTP-Zugangsdaten als Env-Vars setzen (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM`, `MAIL_TO`) — betrifft Kontaktformular UND Bewertungs-Formular.
- [ ] **Decap CMS Production-Backend**: GitHub-OAuth einrichten, sobald über die echte Domain erreichbar.
- [ ] **Datenschutz-/Impressums-Review** vor Live-Gang (Matterport, OSM, Formulare, Bewertungen).

## Erledigt mit Feedback-Runde (2026-06-10)

- [x] Öffnungszeiten: Mo+Mi 7:30–19:00, Di+Do 7:30–16:30, Fr 7:30–15:00 (Website + Holding-Page)
- [x] „Seit 1998" → „seit 2000" überall
- [x] Birgit Wittwer komplett entfernt (inkl. Leistung „Sektorale Heilpraktikerin")
- [x] Zoe Spalek (ab Aug 2026) + Jasmin Gelhaus neu im Team
- [x] Andrea Dörholt → „Anmeldung und Abrechnung", Foto zugeordnet; Sabine Mally → „Praxismanagement und Anmeldung"
- [x] Astrids Bio („…Beweglichkeit und Selbstfürsorge…") + erweiterte Qualifikationsliste
- [x] Skoliose aus Außendarstellung (Leistung, Blog-Artikel, FAQ P6, Praxis-Werte, Footer, Dropdown) — Quali-Tag bei Astrid bleibt
- [x] KG am Gerät & Elektrotherapie/Ultraschall entfernt; Schlingentisch als eigene Seite
- [x] WABASKA-Leistungsseite entfernt
- [x] Massage/Fango/Wärme unter „Prävention, Selbstzahler & Wellness" einsortiert
- [x] MT als Schwerpunkt; Abkürzung „MT" im Team
- [x] Behandlungs-Abläufe: „auf Grundlage Ihrer ärztlichen Verordnung" vorangestellt
- [x] Kategorie-Feld auf Leistungs-Detailseiten entfernt
- [x] FAQ: P1 ohne Privatpatient, P3 ohne Behandlungskleidung, P4 15–20 Min., P6 gelöscht
- [x] Kontakt: Verordnungs-Hinweis unter Terminanfrage entfernt
- [x] Blog: Skoliose-Artikel ersetzt durch Schulter-Artikel; CMD-Artikel ohne Heilpraktiker-Absatz
- [x] Podcast-Empfehlungen mit QR-Codes auf /ratgeber
- [x] Job-Banderole auf Startseite → /karriere
- [x] Karriere: 12 Original-Benefits + „Wenn Du…"-Intro vom Praxis-Aushang
- [x] „hochqualitativ" → „professionell"
