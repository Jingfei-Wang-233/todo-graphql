import { ApolloServer } from 'apollo-server';
import { resolvers } from "./resolvers.js";
import { typeDefs } from './schema.js';
import { TaskAPI } from "./datasources/task-api.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      taskAPI: new TaskAPI(),
    };
  },
});
server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
`);
});
