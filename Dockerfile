# Utilisez une image Node.js légère comme base
FROM node:16-alpine

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Installez Angular CLI globalement
RUN npm install -g @angular/cli@16.2.0

# Copiez le reste des fichiers de l'application
COPY . .

# Construisez l'application Angular en mode de production
RUN ng build --configuration=production


# Utilisez un serveur web léger pour servir l'application construite
FROM nginx:alpine
COPY --from=0 /app/dist/ /usr/share/nginx/html