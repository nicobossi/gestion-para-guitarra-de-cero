# STAGE 1

FROM node:22-alpine AS builder

WORKDIR /gestion-de-pagos 

COPY package*.json /gestion-de-pagos/ 

RUN npm install

COPY . /gestion-de-pagos/

# ver si es necesario hacer migracion
RUN npx prisma generate --schema=resources/prisma/schema.prisma --config=resources/prisma.config.ts

RUN npm run build 


# STAGE 2

FROM node:22-alpine

WORKDIR /gestion-de-pagos 

COPY package*.json /gestion-de-pagos/

RUN npm install --omit=dev

COPY --from=builder /gestion-de-pagos/dist /gestion-de-pagos/dist

EXPOSE 3000

ENTRYPOINT ["node", "/dist/index.js"]


