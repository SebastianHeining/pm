# Hosting auf dem Heimserver „web1" (10.10.10.76)

Stand: 2026-08-05. Die Seite läuft dort produktionsbereit parallel zu Vercel.

## AKTUELLE PHASE: Übergangsseite (Holding)

Bis zur Kundenfreigabe zeigen die Domains auf die **Übergangsseite**
(`mally-holding.service`, Port 3002 — Logo, Öffnungszeiten, Kontakt,
Anfahrt, Impressum, „neue Webseite in Arbeit"). Alte Deep-Links landen
ebenfalls dort. Test-/Preview-URL: https://mally-test.flipdigital.de

**Umschalten auf die echte Webseite bei Freigabe** (1 Befehl auf web1):

```bash
sudo sed -i 's|service: http://localhost:3002|service: http://localhost:3001|g' /etc/cloudflared/config.yml \
  && sudo cloudflared tunnel --config /etc/cloudflared/config.yml ingress validate \
  && sudo systemctl restart cloudflared
```

(Der Test-Hostname mally-test.flipdigital.de darf dabei auf 3002 bleiben
oder mit umgestellt werden.)

## Noch offen: DNS der 3 Mally-Zonen (Dashboard, ~5 Min)

Das Server-Zertifikat (`cert.pem`) ist nur für die flipdigital.de-Zone
autorisiert — die Mally-Zonen müssen einmalig im Cloudflare-Dashboard
umgestellt werden. Pro Zone (physiotherapie-mally.de,
physiotherapie-astrid-mally.de, physio-astrid-mally.de) unter DNS → Records:

1. Bestehende `A`/`AAAA`/`CNAME`-Records für `@` und `www` löschen
   (MX/TXT nicht anfassen!)
2. Neu anlegen, Proxy-Status „Proxied" (orange Wolke):
   - `CNAME  @    3b6709d4-e4fb-4c43-a0fa-20814b421c20.cfargotunnel.com`
   - `CNAME  www  3b6709d4-e4fb-4c43-a0fa-20814b421c20.cfargotunnel.com`

**Aufräumen (einmalig):** In der Zone **flipdigital.de** sind versehentlich
6 CNAME-Records entstanden (`physiotherapie-mally.de.flipdigital.de`,
`www.physiotherapie-mally.de.flipdigital.de` usw. für alle drei Domains) —
diese 6 löschen. `mally-test` und `share` bleiben!

## Architektur

- **Server**: Ubuntu 24.04, Host „web1", LAN 10.10.10.76 (SSH-User `seb`)
- **App**: `/opt/mally-website` (Service-User `mally`), Node 22 + pnpm 11,
  `next start` auf `127.0.0.1:3001`
- **Service**: `mally-website.service` (systemd, gehärtet analog flipshare),
  Env aus `/etc/mally-website.env` (dort liegt der `ANTHROPIC_API_KEY`;
  SMTP-Variablen sind vorbereitet und noch auskommentiert)
- **Öffentliche Anbindung**: Cloudflare Tunnel `3b6709d4-…` (cloudflared,
  `/etc/cloudflared/config.yml`). Ingress: alle 6 Hostnames
  (3 Domains + www) → `localhost:3001`; share.flipdigital.de → 3000 bleibt.
- **Domain-Logik**: `physiotherapie-mally.de` ist die Hauptdomain. Alle
  anderen Hosts (www + beide Nebendomains) leiten per 301 dorthin —
  das macht die Next-App selbst (next.config.ts, Host-Redirects).

## Neues Deployment einspielen

Von diesem Repo aus (Windows, PuTTY installiert):

```bash
bash scripts/deploy-web1.sh
```

Das Skript packt den aktuellen Git-Stand (`git archive HEAD`), lädt ihn auf
den Server, baut dort neu und startet den Service durch. SSH-Passwort wird
abgefragt (oder vorab `export WEB1_PW=…`).

## Nach der Kundenfreigabe (Live-Gang der echten Seite)

1. Ingress von 3002 auf 3001 umschalten (Befehl oben)
2. Testen: Alle 6 Hostnames aufrufen — Nebendomains/www müssen per 301 auf
   `https://physiotherapie-mally.de` landen.

Außerdem:
- Vercel-Deployment pausieren oder als Staging weiterlaufen lassen
- Google Business Profile auf die neue URL aktualisieren
- QR-Aushang für /bewertung freigeben (zeigt auf physiotherapie-mally.de)
- Decap-CMS-OAuth auf die echte Domain einrichten

## SMTP scharf schalten (sobald Zugangsdaten da sind)

In `/etc/mally-website.env` die SMTP_*/MAIL_*-Zeilen einkommentieren und
füllen, dann `sudo systemctl restart mally-website`. Bis dahin werden
Formular-Eingänge nur ins Journal geloggt
(`journalctl -u mally-website | grep '\[mail\]'`).

## Nützliche Kommandos (auf dem Server)

```bash
systemctl status mally-website        # Service-Status
journalctl -u mally-website -f        # Logs live
sudo systemctl restart mally-website  # Neustart
cloudflared tunnel --config /etc/cloudflared/config.yml ingress validate
```
