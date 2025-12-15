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

# Instalar curl para health checks
RUN apk add --no-cache curl

# Instalar openssl para generar certificados
RUN apk add --no-cache openssl

# Crear directorios base (pero NO generar certificados aquí)
# Los certificados se generan en el workflow para asegurar persistencia
RUN mkdir -p /var/www/certbot

# Exponer puertos
EXPOSE 80 443

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
