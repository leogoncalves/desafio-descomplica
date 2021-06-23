import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

function startServer({ typeDefs, resolvers }) {
  mongoose.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const server = new ApolloServer({ typeDefs, resolvers });
  server
    .listen()
    .then(({ url }) => console.log(`Server started at ${url}`))
    .catch((error) => console.log(error));
}

export default startServer;
