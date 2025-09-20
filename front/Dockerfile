# Frontend Dockerfile - Build multi-stage
FROM node:18-alpine as build

WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le code source
COPY . .

# Build Expo pour le web
RUN npx expo export -p web

COPY --from=builder /app/dist /usr/share/nginx/html

# Copier votre configuration Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Supprimer la config par défaut
RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]