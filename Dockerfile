# Dockerfile para Vite en producción
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install --frozen-lockfile || yarn install --frozen-lockfile
COPY . .
RUN npm run build || yarn build

# Servir estáticos con nginx con HTTPS support
FROM nginx:alpine

# Copiar archivos de aplicación
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar configuración nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# Crear directorios para SSL certificados
RUN mkdir -p /var/www/certbot
RUN mkdir -p /etc/letsencrypt/live/ruppelltec.com

# Instalar curl para health checks
RUN apk add --no-cache curl

# Crear certificados self-signed temporales como fallback
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/letsencrypt/live/ruppelltec.com/privkey.pem \
    -out /etc/letsencrypt/live/ruppelltec.com/fullchain.pem \
    -subj "/C=US/ST=State/L=City/O=Organization/CN=ruppelltec.com" || true

# Establecer permisos correctos
RUN chmod 600 /etc/letsencrypt/live/ruppelltec.com/privkey.pem 2>/dev/null || true
RUN chmod 644 /etc/letsencrypt/live/ruppelltec.com/fullchain.pem 2>/dev/null || true

# Exponer puertos
EXPOSE 80 443

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
