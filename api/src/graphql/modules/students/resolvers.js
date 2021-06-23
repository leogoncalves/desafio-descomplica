import Student from "../../../models/Student";

export default {
  Query: {
    students: () => Student.find(),
    fetchStudents: (parent, args, context, info) => {
      const { filter } = args;
      const shoudApplyFilters = filter.length > 0;

      if (!shoudApplyFilters) {
        return Student.find();
      }

      const regex = new RegExp(filter, "i");
      const students = Student.aggregate([
        {
          $match: {
            $or: [{ nome: regex }, { cpf: regex }, { email: regex }],
          },
        },
      ]);

      return students;
    },
  },
  Mutation: {
    createStudent: (_, { data }) => Student.create(data),
  },
};
