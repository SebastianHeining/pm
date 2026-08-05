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

## DNS der 3 Mally-Zonen — ERLEDIGT (2026-08-05)

Alle drei Zonen zeigen mit `CNAME @` und `CNAME www` (Proxied) auf
`3b6709d4-e4fb-4c43-a0fa-20814b421c20.cfargotunnel.com` — die
Übergangsseite ist damit unter allen 6 Hostnames live. Die Mail-Records
(`A mail`, MX `mail.webclient2.de`, SPF/DKIM-TXT) blieben unangetastet,
E-Mail läuft weiter über den bisherigen Anbieter. Die versehentlich
entstandenen 6 CNAMEs in der flipdigital.de-Zone sind gelöscht
(`mally-test` und `share` bestehen weiter).

**Hinweis lokales Testen:** Der LAN-Resolver zuhause hängt an die Domains
das Suffix `.zuhause.heining.nrw` an und liefert dann die dogado-Park-IP.
Daher extern testen (Mobilfunk) oder per
`curl --resolve physiotherapie-mally.de:443:188.114.96.3 https://physiotherapie-mally.de/`.

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
