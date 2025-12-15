#!/bin/sh
set -e

DOMAIN="ruppelltec.com"
CERT_DIR="/etc/letsencrypt/live/${DOMAIN}"
FULLCHAIN="${CERT_DIR}/fullchain.pem"
PRIVKEY="${CERT_DIR}/privkey.pem"

# Asegura webroot para ACME challenge
mkdir -p /var/www/certbot

# Si no existe cert (o key), genera uno self-signed en el volumen montado
if [ ! -f "$FULLCHAIN" ] || [ ! -f "$PRIVKEY" ]; then
  echo "⚠️ No cert found for ${DOMAIN}. Generating self-signed..."
  mkdir -p "$CERT_DIR"

  openssl req -x509 -nodes -days 30 -newkey rsa:2048 \
    -keyout "$PRIVKEY" \
    -out "$FULLCHAIN" \
    -subj "/CN=${DOMAIN}"

  echo "✅ Self-signed generated at ${CERT_DIR}"
else
  echo "✅ Existing certificate found for ${DOMAIN}"
fi

exec nginx -g "daemon off;"
