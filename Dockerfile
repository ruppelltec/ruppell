# Dockerfile para Vite en producción
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install --frozen-lockfile || yarn install --frozen-lockfile
COPY . .
RUN npm run build || yarn build

# Servir estáticos con nginx con HTTPS support
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
# Create directories for SSL certificates
RUN mkdir -p /var/www/certbot
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
