import React, { useEffect, useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { formatterCPF } from "../utils.ts/formatters";

interface Student {
  nome: string;
  email: string;
  cpf: string;
}
export const Search = () => {
  const [filter, setFilter] = useState<string>("");
  const [students, setStudents] = useState<Student[]>([]);
  const GET_STUDENTS = gql`
    query students($filter: String) {
      fetchStudents(filter: $filter) {
        nome
        cpf
        email
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_STUDENTS, {
    variables: { filter },
  });

  useEffect(() => {
    if (!loading && data) {
      setStudents(data.fetchStudents);
    }
  }, [loading, data]);

  if (error) {
    return <h1>Ops</h1>;
  }

  return (
    <div className="App">
      <Input filter={filter} setFilter={setFilter} />
      {loading ? <h1>Loading</h1> : <Table students={students} />}
    </div>
  );
};

const Input = ({ filter, setFilter }: { filter?: string; setFilter?: any }) => (
  <input
    key={"filter"}
    type="text"
    value={filter}
    onChange={(event) => {
      event.preventDefault();
      setFilter(event.target.value);
    }}
  />
);

const Table = ({ students }: { students: Student[] }) => (
  <table>
    <thead>
      <tr>
        <td>Nome</td>
        <td>CPF</td>
        <td>E-mail</td>
      </tr>
    </thead>
    <tbody>
      {students.map((student: Student) => (
        <tr key={student.cpf}>
          <td>{student.nome}</td>
          <td>{formatterCPF(student.cpf)}</td>
          <td>{student.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
