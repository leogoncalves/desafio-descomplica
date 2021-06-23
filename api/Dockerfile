FROM node:14-alpine as base

COPY . /src
WORKDIR /src

FROM base as dev 
ENV NODE_ENV=developement
RUN npm install