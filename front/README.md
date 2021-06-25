# Começando com Create React App

Utilizamos [Create React App](https://github.com/facebook/create-react-app) como bootstrap para o projeto.

## TL;DR

Renomeie o arquivo `.env-example` para `.env`, instale os pacotes com `yarn` ou `npm install`.
Em seguida, faça `npm run dev` ou `yarn dev` (para inicializar o server da aplicação em react).

## Scripts

No diretório desse projeto, é possíve executar:

### `yarn start`

Executa a aplicação em desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver o resultado no navegador.

A página irá recarregar caso alguma edição seja feita em algum arquivo. Também é possível ver erros de lint no console.

### `yarn test`

Executa os testes em modo iterativo.\
Veja a [documentação](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `yarn build`

Gera uma build de produção na pasta `build`

Veja a [documentação](https://facebook.github.io/create-react-app/docs/deployment) para mais informação.

### Outros comandos

- yarn eject
  - "Ejeta" do Create React App. Veja a [documentação](https://create-react-app.dev/docs/available-scripts/#npm-run-eject) para mais informação.
- yarn analyze
  - Realiza a análise do bundle gerado para produção.

## Variáveis de ambiente

```
REACT_APP_APOLLO_LINK=http://localhost/api
```

**REACT_APP_APOLLO_LINK define o link da nossa api GraphQL.**

**Para desenvolvimento do projeto, é esperado que sejam utilizados os containers e serviços levantados com o docker-compose que está na raiz do projeto.**
