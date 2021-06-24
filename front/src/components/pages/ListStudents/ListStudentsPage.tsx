import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { IStudent } from "../../../models/IStudent";
import { TextInput } from "../../Input/Input";
import { StudentTable } from "../../Table/StudentTable/Table";
import { ListStudentTitle } from "../../Title/ListStudentTitle";
import { GET_STUDENTS_QUERY } from "./Query";

export const ListStudentsPage = () => {
  const [filter, setFilter] = useState<string>("");
  const [students, setStudents] = useState<IStudent[]>([]);

  const { loading, error, data } = useQuery(GET_STUDENTS_QUERY, {
    variables: { filter },
  });

  useEffect(() => {
    if (!loading && data) {
      setStudents(data.fetchStudents);
    }
  }, [loading, data]);

  if (error) {
    return <h1>Ops, tivemos um erro</h1>;
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFilter(event.target.value);
  };
  return (
    <div className="container my-6">
      <ListStudentTitle title="Desafio Descomplica" />
      <div className="column is-half mx-auto">
        <TextInput
          value={filter}
          placeholder="Busque por nome, e-mail ou CPF de um estudante"
          onChange={onChange}
          key="filter"
        />
        <span className="pt-5">
          * Não é necessário digitar a pontuação para pesquisar por CPF
        </span>
      </div>
      <div className="column is-half mx-auto">
        {loading ? (
          <ListStudentTitle title="Carregando" />
        ) : (
          <StudentTable students={students} />
        )}
      </div>
    </div>
  );
};
