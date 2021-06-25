# Desafio Descomplica

Nesse repositório está o código do desafio proposto para a vaga de desenvolvedor full-stack júnior para a Descomplica.

- **[TL;DR](#tldr)**
- **[GraphQL API](#graphql-api)**
- **[Front](#front)**
- **[docker-compose](#docker-compose)**

## <a name="tldr"></a> TL;DR

Nesse projeto, estamos utilizando docker para servir tudo que seja necessário para aplicação e docker-compose para orquestrar os containers. Caso não conheça algum dos dois, recomendo a leitura da documentação **[aqui](https://docs.docker.com/)** e **[aqui](https://docs.docker.com/compose/)**.

Para executar a aplicação, renomeie os arquivos `.env-example` nas pastas **`api`** e **`front`** para `.env`.

Em seguida, execute:

> $ docker-compose up -d --build

A flag build é necessário já que iremos criar nossas imagens.

Quando os containers estiverem prontos, será possível acessar duas urls:

A aplicação, escrita em React, que exibe uma lista de estudantes previamente cadastrados

> $ http://localhost

![Uma tela onde é possível observar um título Desafio Descomplica, um input de texto para realizar a busca por estudantes a partir dos nome, cpf ou email e uma tabela que lista esses mesmos dados](./docs/screenshots/app.png)

Um "playground" para GraphQL

> $ http://localhost/api

> ![Uma tela onde é possível observar um cliente para executar consultas com graphql](./docs/screenshots/api.png)

_Todos os dados cadastrados foram gerados automaticamente e qualquer semelhança com a possíveis dados reais será mera coincidência_

---

## <a name="graphql-api"></a> GraphQL API

Desenvolvemos uma API com GraphQL que deve retornar os estudantes cadastrados em nossa base. Cada estudante deve ter um CPF, um nome e um e-mail. Como não temos informação sobre algum atributo poder ser opcional, todos foram considerados obrigatórios.

Utilizamos Mongoose para lidar com operações com o Mongo, e Apollo Server para GraphQL. Também utilizamos Babel para transpilar nosso código (escrito originalmente em ES6).

É possível subir os containers da aplicação (com alguns dados já previamente inseridos) com o docker-compose existente no projeto. Para isso, seria necessário fazer

> $ docker-compose up mongo descomplica-api --build --force-recreate -d

Mais detalhes podem ser lidos no [readme do projeto da api](./api/readme.md).

---

## <a name="front"></a> Front

Nosso front é feito em React + Typescript. Também estamos usando Apollo Client para realizar consultas a nossa API, Bulma (com sass) para os estilos dos componentes, além de react-router-dom, que utilizamos para evitar o um usuário tente acessar uma rota que não exista e acabe caindo em uma tela vazia.

Esse mapeamento poderia ser feito com redirecionamentos no nginx, mas optamos por fazer isso isolado na aplicação.

Mais detalhes podem ser lidos no [readme do projeto da api](./front/README.md).

---

## <a name="docker-compose"></a> docker-compose

Usamos docker-compose para orquestrar nossa aplicação. Nele, temos o seguinte:

```docker-compose.yml
version: "3"

services:
  mongo:
    container_name: mongoose
    image: mongo
    restart: unless-stopped
    ports:
      - 27017:27017
    deploy:
      resources:
        limits:
          cpus: "1"
          memory: 512M
  descomplica-api:
    container_name: graphql-api
    build:
      context: ./api/
      target: dev
    # volumes:
    #   - .:/api
    ports:
      - "4000:4000"
    environment:
      NODE_ENV: development
    env_file:
      - ./api/.env
    deploy:
      resources:
        limits:
          cpus: "1"
          memory: 512M
    depends_on:
      - mongo
  react-app:
    container_name: web-app
    ports:
      - "3000:3000"
    build:
      context: ./front/
      dockerfile: Dockerfile
    # volumes:
    #   - ./front:/app
    env_file:
      - ./front/.env
    deploy:
      resources:
        limits:
          cpus: "1"
  nginx:
    container_name: reverse-proxy
    image: nginx:1.20-alpine
    ports:
      - "80:80"
    depends_on:
      - react-app
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf:ro

```

Aqui, precisamos fazer algumas considerações sobre decisões tomadas no desenvolvimento da aplicação
