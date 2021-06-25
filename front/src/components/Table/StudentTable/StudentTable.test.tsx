import { render, screen } from "@testing-library/react";
import React from "react";
import { StudentTable } from "./StudentTable";

test("Deve renderizar uma mensagem caso não existam registros", () => {
  render(
    <StudentTable
      key="studentsTable"
      students={[]}
      loading={false}
      error={false}
    />
  );

  const element = screen.getByText(/Não foram encontrados registros/);
  expect(element).toBeInTheDocument();
});

test("Deve renderizar uma mensagem de aviso de carregamento", () => {
  render(
    <StudentTable
      key="studentsTable"
      students={[]}
      loading={true}
      error={false}
    />
  );

  const element = screen.getByText(/Carregando.../);
  expect(element).toBeInTheDocument();
});

test("Deve renderizar uma mensagem de aviso erro", () => {
  render(
    <StudentTable
      key="studentsTable"
      students={[]}
      loading={false}
      error={true}
    />
  );

  const element = screen.getByText(/Não foram encontrados registros./);
  expect(element).toBeInTheDocument();
});

test("Deve renderizar o cpf de um aluno formatado", () => {
  render(
    <StudentTable
      key="studentsTable"
      students={[
        { nome: "Aluno de Teste", email: "teste@mail.com", cpf: "00000000000" },
      ]}
      loading={false}
      error={true}
    />
  );

  const element = screen.getByText(/000.000.000-00/);
  expect(element).toBeInTheDocument();
});
