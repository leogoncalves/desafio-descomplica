import { gql } from "graphql-tag";

export const GET_STUDENTS_QUERY = gql`
  query students($filter: String) {
    fetchStudents(filter: $filter) {
      nome
      cpf
      email
    }
  }
`;
