const faker = require("faker/locale/pt_BR");
const cpf = require("node-cpf");
const MongClient = require("mongodb");

const DB_URL = "mongodb://mongoose:27017";
const DB_NAME = "graphql";

const create_seed_data = (totalRegisters) => {
  let iter;
  let students = [];

  for (iter = 0; iter <= totalRegisters; iter++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const name = `${firstName} ${lastName}`;
    const email = faker.internet.email(
      firstName.toLowerCase(),
      lastName.toLowerCase()
    );

    const document = cpf.generate().toString();
    const student = {
      nome: name,
      email,
      cpf: document,
    };

    students.push(student);
  }
  console.log(students);
  return students;
};

const create_database = () =>
  MongClient.connect(DB_URL).then((client) => {
    // Cria uma nova base
    const database = client.db(DB_NAME);

    // Cria uma nova collection
    database.createCollection("students");

    const seed = create_seed_data(10);

    database.collection("students").insertMany(seed);

    client.close();
  });

create_database();
