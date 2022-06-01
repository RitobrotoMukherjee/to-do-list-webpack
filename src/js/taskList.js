export default class {
  static setList(tasks) {
    return localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static getList() {
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  }
}