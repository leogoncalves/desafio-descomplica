# API

Para essa parte, desenvolvemos uma API simples com GraphQL que deverá retornar os estudantes cadastrados previamente na nossa base.

Desenvolvida em js, usamos Mongoose + GraphQL + Apollo Server.

Babel será utilizado para fazer a transpilação do ES6.

# Front

Aplicação web em React + TypeScript que vai consumir os dados da nossa API.

# docker-compose

Para a aplicação, configuramos um container de mongo para isolar a base de dados

```docker-compose.yml
services:
  mongo:
    image: mongo
    restart: unless-stopped
    environment:
      MONGO_INITDB_DATABASE: graphql
    ports:
      - 27017:27017

```
