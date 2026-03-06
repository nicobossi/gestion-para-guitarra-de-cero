FROM node:22-alpine

WORKDIR /gestion-de-pagos

COPY package*.json /gestion-de-pagos

RUN npm ci

COPY . /gestion-de-pagos

RUN npm run build

CMD ["sh", "-c", "npm run db:deploy && npm run dev"]