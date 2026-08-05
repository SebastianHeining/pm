#!/usr/bin/env bash
# Deploy des aktuellen Git-Stands auf den Heimserver web1 (10.10.10.76).
# Voraussetzungen: Git-Bash unter Windows mit PuTTY (plink/pscp) im PATH.
# Passwort via  export WEB1_PW=…  oder interaktive Abfrage.
set -euo pipefail

HOST="10.10.10.76"
USER="seb"
HOSTKEY="SHA256:C9YPt10GlIQR4RdFNhSXo5L2f25ZldIjrJNuVWdoepE"

if [ -z "${WEB1_PW:-}" ]; then
  read -r -s -p "SSH-Passwort für ${USER}@${HOST}: " WEB1_PW
  echo
fi

cd "$(dirname "$0")/.."
ARCHIVE="$(mktemp -t mally-src-XXXX).tar.gz"
trap 'rm -f "$ARCHIVE"' EXIT

echo "» Packe Git-Stand ($(git rev-parse --short HEAD)) …"
git archive --format=tar.gz -o "$ARCHIVE" HEAD

echo "» Lade auf ${HOST} hoch …"
pscp -batch -hostkey "$HOSTKEY" -pw "$WEB1_PW" "$ARCHIVE" "${USER}@${HOST}:/tmp/mally-website-src.tar.gz"

echo "» Baue und starte auf dem Server neu …"
plink -ssh -batch -hostkey "$HOSTKEY" "${USER}@${HOST}" -pw "$WEB1_PW" "
echo '$WEB1_PW' | sudo -S -p '' bash -c '
set -e
cd /opt/mally-website
tar -xzf /tmp/mally-website-src.tar.gz -C /opt/mally-website
chown -R mally:mally /opt/mally-website
sudo -u mally pnpm install --frozen-lockfile >/dev/null
sudo -u mally pnpm build 2>&1 | tail -3
systemctl restart mally-website
sleep 3
systemctl is-active mally-website
curl -s -o /dev/null -w \"Startseite: %{http_code}\n\" http://127.0.0.1:3001/
rm -f /tmp/mally-website-src.tar.gz
'"
echo "» Fertig."
