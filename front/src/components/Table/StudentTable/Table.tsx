import { IStudent } from "../../../models/IStudent";
import { formatterCPF } from "../../../utils/formatters";
import { ListStudentTitle } from "../../Title/ListStudentTitle";

interface IStudentTable {
  students: IStudent[];
  loading: boolean;
  error: boolean;
}

export const StudentTable = ({ students, loading, error }: IStudentTable) => (
  <div className="table-container">
    <table className="table is-fullwidth is-bordered is-striped is-hoverable my-5 mx-auto">
      <thead>
        <tr>
          <td className="has-text-centered has-text-weight-bold">Nome</td>
          <td className="has-text-centered has-text-weight-bold">E-mail</td>
          <td className="has-text-centered has-text-weight-bold">CPF</td>
        </tr>
      </thead>
      <tbody>
        {students.map((student: IStudent) => (
          <tr key={student.cpf}>
            <td className="has-text-centered">{student.nome}</td>
            <td className="has-text-centered">{student.email}</td>
            <td className="has-text-centered">{formatterCPF(student.cpf)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    {loading ? <ListStudentTitle title="Carregando..." /> : null}
    {students.length === 0 ? (
      <ListStudentTitle title="Não foram encontrados registros." />
    ) : null}
    {error ? <ListStudentTitle title="Ops, tivemos algum problema." /> : null}
  </div>
);
