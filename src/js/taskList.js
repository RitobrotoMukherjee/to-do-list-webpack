import Task from './task.js';

export default class {
  static getList() {
    const tasks = localStorage.getItem('tasks') ? localStorage.getItem('tasks') : [];
    for (let i = 0; i < 3; i += 1) {
      tasks.push(new Task(i, false, `This Is Task: ${i}`));
    }
    return tasks;
  }
}