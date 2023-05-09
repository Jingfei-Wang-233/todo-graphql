import {RESTDataSource} from 'apollo-datasource-rest';

export class TaskAPI extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = 'http://localhost:8080/';
  }

  getAllTasks() {
    return this.get('tasks');
  }

  getTaskById(id) {
    return this.get(`tasks/${id}`);
  }

  async addTask(name) {
    return await this.post('tasks', {name: name, completed: false});
  }
  async updateTaskById(id, name, completed) {
    return await this.put(`tasks/${id}`, { name: name, completed: completed });
  }

  // 或许可以增加 deleted 字段实现软删除
  deleteTaskById(id) {
    return this.delete(`tasks/${id}`)
  }
}
