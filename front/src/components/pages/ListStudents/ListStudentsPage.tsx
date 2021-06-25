import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { IStudent } from "../../../models/IStudent";
import { TextInput } from "../../Input/Input";
import { StudentTable } from "../../Table/StudentTable/StudentTable";
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
          placeholder="Busque um estudante por nome, e-mail ou CPF"
          onChange={onChange}
          key="filter"
        />
      </div>

      <span className="column is-half my-0 py-0 mx-auto">
        * Não é necessário digitar a pontuação para pesquisar por CPF
      </span>
      <div className="column is-half mx-auto">
        <StudentTable students={students} loading={loading} error={!!error} />
      </div>
    </div>
  );
};
