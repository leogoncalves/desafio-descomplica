# GraphQL API

## Dados de teste

Para poder testar a aplicação, utilizamos faker para gerar nomes e e-mails aleatórios e node-cpf para gerar cpfs válidos e populamos nossa base com esses dados. O script para isso está em `./src/seed/students.js`. Definimos um script para isso no nosso package.json, então para gerar novos dados, basta fazer `npm run seed`.

## Estrutura de pastas

Esse projeto está organizado da seguinte forma:

```
.
├── src
│   ├── graphql
│   │   ├── modules
│   │   │   └── students
│   │   │       ├── resolvers.js
│   │   │       └── schema.gql
│   │   ├── resolvers.js
│   │   └── typeDefs.js
│   ├── models
│   │   └── Student.js
│   ├── seed
│   │   └── students.js
│   ├── index.js
│   └── startServer.js
├── Dockerfile
├── package.json
├── .env-example
├── readme.md
└── run.sh

```

Em graphql definimos nosso schema e, tipos e resolvers;

Em models, definimos o modelo que será utilizado pelo Mongoose;

Em startServer.js criamos nosso servidor com Apollo Server e estabelecemos a conexão com o banco de dados.

## GraphQL

Definimos duas consultas para a nossa api:

\- Listar todos os estudantes cadastrados

```gql
query {
  students {
    nome
    cpf
    email
  }
}
```

\- Buscar estudantes filtrando por CPF, nome ou email. A variável filter deve receber o valor a ser procurado. Não é necessário utilizar pontuação para buscar por CPF.

```gql
query {
  fetchStudents(filter: "") {
    nome
    cpf
    email
  }
}
```

E uma mutation, para cadastrar novos estudantes

\- Cadastrar um novo estudante

```gql
mutation {
  createStudent(
    data: {
      nome: "Leonardo Alexandre"
      email: "leonardo.goncalvs@mail.com"
      cpf: "14554332440"
    }
  ) {
    _id
  }
}
```

## Container

Geramos nossa própria imagem a partir de uma imagem do alpine. Temos um Dockerfile e um run.sh, utilizado como entrypoint que serve para executar os comandos necessários para rodar a aplicação.

## Variáveis de ambiente

Temos no arquivo .env-example

```
DB_HOST=mongoose
DB_PORT=27017
DB_NAME=graphql
DB_COLLECTION=students
AMOUNT_REGISTERS=200
```

- DB_HOST: host da nossa base de dados. Utilizamos o nome do container para a comunicação
- DB_PORT: Porta do mongodb. Utilizamos a padrão
- DB_NAME: Nome da nossa base de dados. Onde iremos criar nossa coleção
- DB_COLLECTION: Nome da nossa coleção.
- AMOUNT_REGISTERS: Quantidade de registros que serão adicionados pelo script de seed.

**A alteração das variáveis DB_HOST, DB_PORT, DB_NAME, DB_COLLECTION precisariam ser refletidas no docker-compose do projeto e no front em react.**

## TO DO

[] Adicionar paginação de resultados
[] Adicionar ordenação de resultados
[] Melhorar o uso do cache do Apollo Server
