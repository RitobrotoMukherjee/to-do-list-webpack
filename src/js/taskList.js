import Task from './task.js';

export default class {
  constructor() {
    this.tasks = [];
  }

  getList() {
    for (let i = 0; i < 3; i += 1) {
      this.tasks.push(new Task(i, false, `This Is Task: ${i}`));
    }
    return this.tasks;
  }
}