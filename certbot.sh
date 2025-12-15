#!/bin/sh
set -e

DOMAIN="ruppelltec.com"
CERT_PATH="/etc/letsencrypt/live/$DOMAIN/fullchain.pem"

echo "Starting certbot..."
if [ -f "$CERT_PATH" ]; then
  echo "✅ Certificate already exists. Skipping first issuance."
else
  echo "🆕 No certificate found. Attempting first issuance..."
  certbot certonly --webroot -w /var/www/certbot \
    --email ruppelltec@gmail.com --agree-tos --non-interactive --no-eff-email \
    -d "$DOMAIN" -d "www.$DOMAIN"
fi

echo "Starting renew loop..."
trap "exit 0" TERM INT
while :; do
  certbot renew --webroot -w /var/www/certbot --quiet || true
  sleep 12h
done
