# TODO — Offene Punkte (für Astrid Mally bzw. Sebastian)

> Stand: 2026-06-11. Feedbackrunde 2 ist vollständig eingearbeitet
> (Rot/Grau ist Standard-Design, Team final, Leistungen mit Behandlungsfotos).

## Aus Feedbackrunde 2 noch offen

- [ ] **Karriere-Text an Astrid mailen** (Sebastian): Astrid möchte den Karriere-Seitentext zum Querlesen per Mail — Seite ist auf die Version ohne 12-Punkte-Plan zurückgebaut.
- [x] **Domain-Postfach**: Erledigt (2026-08-28) — die Webseite zeigt überall `kontakt@physiotherapie-mally.de` (zentral in `lib/site-config.ts`).
- [ ] **Benefits-Icons der Kundin**: Astrid hat sich Icons „mit ChatGPT gemacht" — falls sie die liefert, in die Karriere-Seite einbauen.
- [ ] **Google-Maps-Routenziel** zeigt erst nach dem Domain-/GBP-Livegang zuverlässig auf die Praxis (Kundin informiert).

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
- [ ] **QR-Aushang aufhängen**: Seit dem Live-Gang (2026-08-28) funktioniert der QR-Code (`physiotherapie-mally.de/bewertung`) — Aushang unter /bewertung/aushang drucken und in der Praxis aufhängen.
- [ ] Hinweis-Text „Bewertungen" in Datenschutzerklärung ergänzen lassen (Einwilligung/Widerruf ist im Formular abgedeckt, zur Sicherheit juristisch prüfen).

## KI-Chat „Sabine" (NEU — eingebaut)

- [x] Floating-Chat unten links auf allen Seiten — Comic-Avatar im Praxis-Kasack
- [x] `/api/chat` mit Claude API (Haiku, Prompt-Caching), Wissensbasis aus allen Website-Inhalten
- [x] Regeln: keine medizinische Beratung, Termin verschieben/absagen nur telefonisch, keine erfundenen Preise
- [x] Datenschutz-Abschnitt zum KI-Chat
- [x] `ANTHROPIC_API_KEY` in Vercel gesetzt (Production, 2026-06-11) — Chat antwortet live. Modell via `CHAT_MODEL` übersteuerbar (Standard `claude-haiku-4-5`). Verbrauch/Kosten einsehbar unter console.anthropic.com.
- [ ] Optional: Avatar durch ein generiertes Comic-Porträt nach Sabines echtem Foto ersetzen (Datei einfach gegen `components/chat/SabineAvatar.tsx` tauschen bzw. PNG einsetzen).

## Aus Feedbackrunde 5 (Astrid, 2026-08-13)

- [x] **Ratgeber wieder eingeblendet**: Astrid vermisste die Artikel- und Podcast-Seite. Nav-/Footer-Link zurück, Redirects entfernt, Sitemap und Biene-Wissen wieder mit Blog.
- [x] **Massage & Fango/Heißluft** erscheinen in beiden Bereichen der Leistungsübersicht (Kassenleistungen und Selbstzahler, Feld `auchIn`) — Astrids Nachfassen: Patienten sollen sofort sehen, dass beides möglich ist.
- [x] **Therapie Plus**: „für ergänzende Techniken im Anschluss an die Behandlung" → „vor Ihrem Behandlungstermin" korrigiert.
- [ ] **Rückfrage an Astrid**: Sie erwähnt „Informationen zu Rückenbeschwerden" — einen Rücken-Artikel gab es nie (vorhanden: CMD, Lymphdrainage, Schulterschmerzen; der frühere Skoliose-Artikel wurde auf Kundenwunsch ersetzt). Falls gewünscht: neuen Artikel „Rückenschmerzen" schreiben und fachlich freigeben lassen.
- [x] **web1-Deploy nachgeholt + LIVE-GANG (2026-08-28)**: Kundin hat freigegeben. Aktueller Stand deployed, Tunnel-Ingress von 3002 (Holding) auf 3001 (echte Seite) umgestellt, alle 6 Hostnames extern verifiziert (Hauptdomain 200, Rest 308-Redirect). Rollback-Anleitung in DEPLOY-HOMESERVER.md.

## Aus Feedbackrunde 4 offen

- [x] **Ratgeber vorerst ausgeblendet** (Sebastian, 2026-08-05) — in FB5 auf Astrids Wunsch wieder eingeblendet, siehe oben.

- [ ] **Therapie Plus — finaler Text von Astrid**: Die neue Selbstzahler-Seite `/leistungen/therapie-plus` (10-Min-Verlängerung) steht mit einem Platzhalter-Entwurf. Sobald Astrids Text kommt, in `content/leistungen.ts` ersetzen.
- [ ] **Rückfrage Kundin: „2 Bilder nebeneinander, da muss das eine weg"** — der Satz in der Mail nennt die Stelle nicht („Außerdem sind bei…. 2 Bilder nebeneinander"). Klären, welche Seite gemeint ist.
- [x] **Illustrationen**: Alle 5 verfügbaren Motive eingebaut (KG, MT, CMD, Massage, Taping) — übrige Leistungen als Icon-Kacheln. Foto-Versionen liegen zum Rücktausch parallel in `public/leistungen/`.
- [ ] Optional: Tim könnte 4 fehlende Illustrations-Motive nachliefern (Fango/Wärme, Hausbesuch, Fußreflexzonen, fachlich korrekte Lymphdrainage) — dann wären alle Kacheln illustriert.
- [ ] Bearbeitete Bilder 03 (Handgriffe), 05 (Bein), 06 (Schulter Rückenlage), 08 (Massage überkreuzt), 09 (Tape Arm) + 8 weitere Illustrationen liegen ungenutzt in `dokumentekunde/feedback4/entpackt/` als Reserve.

## Technik / Setup

- [x] **Hosting**: Heimserver „web1" (10.10.10.76) ist produktionsbereit eingerichtet (2026-08-05) — App unter /opt/mally-website, systemd `mally-website.service` auf Port 3001, Cloudflare-Tunnel-Ingress für alle 3 Domains + www vorbereitet. Details + Deploy-Skript: `DEPLOY-HOMESERVER.md` / `scripts/deploy-web1.sh`. Vercel läuft parallel weiter als Preview.
- [x] **DNS-Umstellung** (2026-08-05): Alle 3 Cloudflare-Zonen zeigen mit CNAME @ + www auf den Tunnel; Mail-Records unangetastet. Live ist die **Übergangsseite** (Port 3002). Nach Kundenfreigabe nur noch Ingress auf 3001 umschalten (1 Befehl, siehe DEPLOY-HOMESERVER.md) — danach GBP, QR-Aushang, Decap-OAuth.
- [x] **SMTP aktiviert (2026-08-28)**: Versand über das neue Postfach `kontakt@physiotherapie-mally.de` (mail.webclient2.de, Port 465). Formulare gehen an t-online-Postfach UND kontakt@-Postfach. End-to-End getestet (mode: sent). Zugangsdaten liegen nur in `/etc/mally-website.env` (chmod 600).
- [x] **Öffentliche Praxis-Mail umgestellt (2026-08-28)**: Website, Impressum, Datenschutz und Biene zeigen jetzt `kontakt@physiotherapie-mally.de` (Entscheidung Sebastian). Formulare gehen weiter zusätzlich ans t-online-Postfach.
- [ ] **Decap CMS Production-Backend**: GitHub-OAuth einrichten, sobald über die echte Domain erreichbar.
- [x] **Datenschutz/Impressum: technisches Selbst-Review (2026-08-28)**: Cloudflare-Abschnitt neu (Auslieferung läuft seit Live-Gang über Cloudflare), OpenStreetMap-Abschnitt ergänzt (fehlte komplett), „Gesundheitsamt des Kreises Hamm" → „der Stadt Hamm" (Hamm ist kreisfrei), toter EU-ODR-Verweis entfernt (Plattform seit Mitte 2025 eingestellt, § 36 VSBG-Satz bleibt), öffentliche „Dies ist ein Vorschlag"-Hinweise von beiden Seiten entfernt, Art.-9-Absatz (Gesundheitsdaten) beim Kontaktformular ergänzt, Bewertungs-Text („per E-Mail") neutralisiert.
- [ ] **Externe Datenschutz-Beratung** — Fragenliste zum Mitgeben:
  - AV-Verträge dokumentieren: Cloudflare (Self-Serve-DPA) und Anthropic (Data Processing Addendum) — liegen sie der Praxis vor?
  - Kontaktformular-Dropdown „Anliegen" (z. B. „CMD / Kiefergelenk") ist ein Gesundheitsbezug (Art. 9 DSGVO) — reicht der Einwilligungstext im Formular?
  - KI-Chat Biene: Einwilligung „durch aktive Nutzung" tragfähig, oder Hinweis/Opt-in direkt im Chat-Fenster ergänzen?
  - OpenStreetMap lädt ohne Zwei-Klick-Lösung (Matterport hat eine) — auf lit. f stützen oder vereinheitlichen?
  - Solange SMTP fehlt, landen Formulareingaben im Server-Journal (journald, unbegrenzt) — Löschkonzept/Retention festlegen.
  - Streichung des EU-ODR-Hinweises bestätigen (Plattform per VO (EU) 2024/3228 eingestellt).

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
