const resolvers = {
  Query: {
    // returns an array of Tasks
    getTasks: (_, __, { dataSources }) => {
      return dataSources.taskAPI.getAllTask();
    },

    // get a single task by ID
    getTaskById: (_, { id }, { dataSources }) => {
      return dataSources.taskAPI.getTaskById(id);
    },
  },
};

module.exports = resolvers;
