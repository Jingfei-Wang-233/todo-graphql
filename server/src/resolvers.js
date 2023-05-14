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
      try {
        return await dataSources.taskAPI.updateTaskById(id, name, completed);
      } catch (err) {
        if (err.message.valueOf() === '404: Not Found') {
          throw new Error(`Task ${id} not found`);
        }
      }
    },
    deleteTaskById: async (_, { id }, { dataSources }) => {
      try {
        await dataSources.taskAPI.deleteTaskById(id)
        return `Task ${id} has been deleted successfully!`;
      } catch (err) {
        console.log(err);
      }
    },
  }
};
