// import { resolvers } from "./resolvers.js";
// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/src/standalone";
// import { typeDefs } from './schema.js';
// import { TaskAPI } from "./datasources/task-api";
//
//
// async function startApolloServer() {
//   const server = new ApolloServer({ typeDefs, resolvers });
//
//   const { url } = await startStandaloneServer(server, {
//     context: async () => {
//       const { cache } = server;
//
//       return {
//         dataSources: {
//           taskAPI: new TaskAPI({ cache }),
//         },
//       };
//     },
//   });
//
//   console.log(`
//     🚀  Server is running
//     📭  Query at ${url}
//   `);
// }
//
// startApolloServer().then(r => console.log(r));
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
