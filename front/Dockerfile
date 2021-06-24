FROM node:14-alpine as base
WORKDIR /app
COPY package.json ./
COPY . ./

FROM base as dev
ENV NODE_ENV=developement
RUN npm install
