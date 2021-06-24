import React, { useState } from "react";
import "./App.css";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

function App() {
  const [filter, setFilter] = useState<string>("");
  const STUDENTS = gql`
    query students($filter: String) {
      fetchStudents(filter: $filter) {
        nome
        cpf
        email
      }
    }
  `;
  const { loading, error, data } = useQuery(STUDENTS, {
    variables: { filter },
  });

  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>Ops</h1>;
  }

  return (
    <div className="App">
      <input onChange={(event) => setFilter(event.target.value)} type="text" />
      <table>
        <thead>
          <tr>
            <td>nome</td>
            <td>cpf</td>
            <td>email</td>
          </tr>
        </thead>
        <tbody>
          {data.fetchStudents.map((element: any, index: any) => (
            <tr key={element.cpf}>
              <td>{element.nome}</td>
              <td>{element.cpf}</td>
              <td>{element.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
