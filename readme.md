# TL;DR

Nesse projeto, estamos utilizando docker para servir tudo que seja necessário para aplicação e docker-compose para orquestrar os containers. Caso não conheça algum dos dois, recomendo a leitura da documentação **[aqui](https://docs.docker.com/)** e **[aqui](https://docs.docker.com/compose/)**.

Para executar a aplicação, renomeie os arquivos `.env-example` nas pastas **`api`** e **`front`** para `.env`.

Em seguida, execute:

> $ docker-compose up -d

Quando os containers estiverem prontos, será possível acessar duas urls:

A aplicação, escrita em React, que exibe uma lista de estudantes previamente cadastrados

> $ http://localhost:81

Um "playground" para GraphQL

> $ http://localhost:81/api

_Todos os dados cadastrados foram gerados automaticamente e qualquer semelhança com a possíveis dados reais será mera coincidência_

# API

Para a API, utilizamos Apollo Server + Mongoose.

Para essa parte, desenvolvemos uma API simples com GraphQL que deverá retornar os estudantes cadastrados previamente na nossa base.

Desenvolvida em js, usamos Mongoose + GraphQL + Apollo Server

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
