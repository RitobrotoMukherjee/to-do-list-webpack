/* eslint-disable */
/* Main Class to set local storage */

export default class {
  setList(tasks) {
    return localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getList() {
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  }

  reOrderTaskIndex(tasks) {
    tasks.forEach((task, i) => task.index = i + 1 );
    return this.setList(tasks);
  }
}