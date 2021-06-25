import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { createMockClient } from "mock-apollo-client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { GET_STUDENTS_QUERY } from "./components/pages/ListStudents/Query";
test("Deve renderizar a aplicação (com router a ApolloProvider)", () => {
  const history = createMemoryHistory();
  const apolloClient = new ApolloClient({
    uri: `${process.env.REACT_APP_APOLLO_LINK}`,
    cache: new InMemoryCache(),
  });

  const mockClient = createMockClient();
  mockClient.setRequestHandler(GET_STUDENTS_QUERY, () =>
    Promise.resolve({
      data: {
        students: [],
      },
    })
  );
  render(
    <ApolloProvider client={apolloClient}>
      <Router history={history}>
        <App />
      </Router>
    </ApolloProvider>
  );

  const titleElement = screen.getByText(/Desafio Descomplica/);
  const inputElement = screen.getByPlaceholderText(
    /Busque um estudante por nome, e-mail ou CPF/
  );
  const tableElement = screen.getByText(/Não foram encontrados registros./);
  expect(titleElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(tableElement).toBeInTheDocument();
});
