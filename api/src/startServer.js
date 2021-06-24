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

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
    cacheControl: {
      defaultMaxAge: 60 * 60,
    },
  });
  server
    .listen()
    .then(({ url }) => console.log(`Server started at ${url}`))
    .catch((error) => console.log(error));
}

export default startServer;
