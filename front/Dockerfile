FROM node:14-alpine as base
WORKDIR /app
COPY package.json ./
COPY . ./

FROM base as dev
ENV NODE_ENV=development

RUN npm install
RUN chmod +x run.sh

ENTRYPOINT [ "./run.sh" ]