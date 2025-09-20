# Backend Dockerfile
FROM node:18-alpine

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le code source
COPY . .

# Exposer le port
EXPOSE 3001

# Commande pour démarrer l'application
CMD ["npm", "start"]