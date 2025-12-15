#!/bin/sh
set -e

DOMAIN="ruppelltec.com"
CERT_DIR="/etc/letsencrypt/live/$DOMAIN"
FULLCHAIN="$CERT_DIR/fullchain.pem"
PRIVKEY="$CERT_DIR/privkey.pem"

mkdir -p /var/www/certbot

if [ -f "$FULLCHAIN" ] && [ -f "$PRIVKEY" ]; then
  echo "✅ Existing certificate found for $DOMAIN"
else
  echo "⚠️ No Let's Encrypt cert yet for $DOMAIN. Nginx will still start (HTTP works); HTTPS may fail until cert exists."
fi

exec nginx -g "daemon off;"
