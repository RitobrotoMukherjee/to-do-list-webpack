import Task from './task.js';
import TaskList from './taskList.js';

export default class extends TaskList {
  constructor() {
    super();
    this.tasks = super.getList();
  }

  addTask(task) {
    const l = this.tasks.length;
    this.tasks.push(new Task((l + 1), false, task));
    super.setList(this.tasks);
    return this.tasks;
  }

  updateTask(id, desc) {
    this.tasks[id].description = desc;
    super.setList(this.tasks);
    return this.tasks;
  }

  removeTask(arrIdx) {
    this.tasks.splice(arrIdx, 1);
    return super.reOrderTaskIndex(this.tasks);
  }
}