// require("dotenv").config();
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

// Temos de fazer o require para imports de projetos que não fornecem módulos
const faker = require("faker/locale/pt_BR");
const cpf = require("node-cpf");

// Carrega variáveis de ambiente
dotenv.config();

// Define constantes que serão utilizadas no seed
const DB_URL = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`;
const DB_NAME = process.env.DB_NAME;
const DB_COLLECTION = process.env.DB_COLLECTION;
const AMOUNT_REGISTERS = process.env.AMOUNT_REGISTERS;

/**
 *
 * @param {number} totalRegisters
 * @returns array de Estudantes
 */
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

/**
 *
 * @param {collection: string, amountRegisters: number} param0
 *
 */
const create_database = ({ collection, amountRegisters }) =>
  MongoClient.connect(DB_URL)
    .then((client) => {
      // Cria uma nova base
      const database = client.db(DB_NAME);

      database.dropCollection(collection);

      // Cria uma nova collection
      database.createCollection(collection);

      const seed = create_seed_data(amountRegisters);

      database.collection(collection).insertMany(seed);

      client.close();
    })
    .catch((error) => console.log(error));

create_database({
  collection: DB_COLLECTION,
  amountRegisters: AMOUNT_REGISTERS,
});
