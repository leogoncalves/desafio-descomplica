import React from "react";
import { render, screen } from "@testing-library/react";
import { ListStudentTitle } from "./ListStudentTitle";
test("Deve renderizar um texto", () => {
  render(<ListStudentTitle title="Teste" />);
  const element = screen.getByText(/Teste/);
  expect(element).toBeInTheDocument();
});
