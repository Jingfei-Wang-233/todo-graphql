const { RESTDataSource } = require('@apollo/datasource-rest');

class TaskAPI extends RESTDataSource {
  baseURL = 'http://localhost:8080/';

  getAllTask() {
    return this.get('tasks');
  }

  getTaskById(id) {
    return this.get(`tasks/${id}`);
  }

  addTask(name) {
    return this.post('tasks', { name: name });
  }
  updateTaskById(id, name, completed) {
    return this.put(`tasks/${id}`, { name: name, completed: completed });
  }

  // 或许可以增加 deleted 字段实现软删除
  deleteTaskById(id) {
    return this.delete(`tasks/${id}`)
  }
}

module.exports = TaskAPI;
