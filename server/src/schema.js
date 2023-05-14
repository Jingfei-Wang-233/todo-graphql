import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    "Query to get tasks array"
    getTasks: [Task!]
    "Fetch a specific task, provided a task's ID"
    getTaskById(id: Int!): Task
  }

  type Mutation {
    "add a new task with taskName and default completed status as false"
    addTask(name: String): Task!
    "update a task by taskId"
    updateTaskById(id: Int!, name: String!, completed: Boolean!): Task!
    "delete task by taskId"
    deleteTaskById(id: Int!): String!
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
