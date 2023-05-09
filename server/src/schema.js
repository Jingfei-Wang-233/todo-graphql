const gql = require('graphql-tag');

const typeDefs = gql`
  type Query {
    "Query to get tasks array"
    getTasks: [Task!]
    "Fetch a specific task, provided a task's ID"
    getTaskById(id: Int!): Task
  }

  "A task is the basic unit of todo-list, consist of id, name, and completed"
  type Task {
    "The id of the task"
    id: Int!
    "The description of the task"
    name: String!
    "The status of the task"
    completed: Boolean!
  }
`;

module.exports = typeDefs;
