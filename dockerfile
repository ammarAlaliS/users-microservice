# Dockerfile
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json primero
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de archivos
COPY . .

# Construir el proyecto
RUN npm run build

# Puerto de la app (opcional)
EXPOSE 3001

# Comando por defecto
CMD ["npm", "run", "start:prod"]
