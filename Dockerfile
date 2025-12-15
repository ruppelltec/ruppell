FROM node:20-alpine AS build
WORKDIR /app

# evita cache en /root/.npm
ENV npm_config_cache=/tmp/.npm

COPY package*.json ./
RUN npm ci && npm cache clean --force

COPY . .
RUN npm run build

# Nginx para servir estáticos + HTTPS
FROM nginx:alpine

# App estática
COPY --from=build /app/dist /usr/share/nginx/html

# Config nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# Herramientas mínimas
RUN apk add --no-cache curl openssl

# Webroot para ACME challenge
RUN mkdir -p /var/www/certbot

# Entrypoint que garantiza cert (self-signed si falta)
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80 443

CMD ["/entrypoint.sh"]
