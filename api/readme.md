# GraphQL API

Para esse projeto, temos a seguinte organização

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
├── readme.md
└── run.sh

```

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
[] Corrigir uso do cache
