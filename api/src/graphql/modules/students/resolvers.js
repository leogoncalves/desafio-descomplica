import Student from "../../../models/Student";

export default {
  Query: {
    students: () => Student.find(),
  },
  Mutation: {
    createStudent: (_, { data }) => Student.create(data),
  },
};
