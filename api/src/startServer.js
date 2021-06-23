import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

function startServer({ typeDefs, resolvers }) {
  mongoose.connect("mongodb://mongoose:27017/graphql", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const server = new ApolloServer({ typeDefs, resolvers });
  server
    .listen()
    .then(({ url }) => console.log(`Server started at ${url}`))
    .catch((error) => console.log(error));
}

export default startServer;
