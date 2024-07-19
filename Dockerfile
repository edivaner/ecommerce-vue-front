FROM node:16-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências do projeto
RUN npm cache clean --force
RUN npm install

# Copia o restante dos arquivos do projeto para o contêiner
COPY . .

# Expõe a porta padrão do Vite
EXPOSE 5173

# Comando para iniciar o servidor de desenvolvimento do Vite
CMD ["npm", "run", "dev"]
