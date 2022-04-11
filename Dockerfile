FROM node:17-alpine as base

WORKDIR /src
COPY package*.json ./
EXPOSE 8080

FROM base as dev
ENV NODE_ENV=development
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]