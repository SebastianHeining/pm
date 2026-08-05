# Hosting auf dem Heimserver „web1" (10.10.10.76)

Stand: 2026-08-05. Die Seite läuft dort produktionsbereit parallel zu Vercel —
die DNS-Umstellung passiert erst nach Kundenfreigabe.

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

## DNS-Umstellung (erst nach Kundenfreigabe!)

Alle drei Zonen liegen bereits in Cloudflare („Active"). Pro Zone im
Dashboard (DNS → Records):

1. Vorhandene `A`/`CNAME`-Records für `@` und `www` (zeigen auf das alte
   Hosting) löschen bzw. ersetzen durch:
   - `CNAME  @    3b6709d4-e4fb-4c43-a0fa-20814b421c20.cfargotunnel.com` (Proxy: an/orange)
   - `CNAME  www  3b6709d4-e4fb-4c43-a0fa-20814b421c20.cfargotunnel.com` (Proxy: an/orange)
2. Das für `physiotherapie-mally.de`, `physiotherapie-astrid-mally.de`
   und `physio-astrid-mally.de` wiederholen.
3. Testen: Alle 6 Hostnames aufrufen — Nebendomains/www müssen per 301 auf
   `https://physiotherapie-mally.de` landen.

Alternativ per CLI auf dem Server (macht dasselbe):

```bash
cloudflared tunnel route dns 3b6709d4-e4fb-4c43-a0fa-20814b421c20 physiotherapie-mally.de
# … je Hostname wiederholen
```

Nach der Umstellung außerdem:
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
