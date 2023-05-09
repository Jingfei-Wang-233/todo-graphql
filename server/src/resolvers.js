export const resolvers = {
  Query: {
    // returns an array of Tasks
    getTasks: async (_, __, { dataSources }) => {
      return dataSources.taskAPI.getAllTasks();
    },

    // get a single task by ID
    getTaskById: async (_, { id }, { dataSources }) => {
      return dataSources.taskAPI.getTaskById(id);
    },
  },
  Mutation: {

    addTask: async (_, { name }, { dataSources }) => {

      const res = await dataSources.taskAPI.addTask(name);
      console.log(res);
      return res;
    },
    updateTaskById: async (_, { id, name, completed }, { dataSources }) => {
      const res = dataSources.taskAPI.updateTaskById(id, name, completed);
      console.log(res);
      return res;
    },
    deleteTaskById: async (_, { id }, { dataSources }) => {
      const response = await dataSources.taskAPI.deleteTaskById(id);
      console.log(response);
      return `Task ${id} has been deleted successfully!`
    },
  }
};
