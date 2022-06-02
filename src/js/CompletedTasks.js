import TaskList from './taskList.js';

export default class extends TaskList {
  constructor() {
    super();
    this.tasks = super.getList();
  }

  completedTask(listIndex = -1, completed = false) {
    this.tasks[listIndex].completed = completed;
    return super.setList(this.tasks);
  }

  completedMultipleTasks(tasks = []) {
    tasks.forEach((id) => {
      const delIdx = this.tasks.findIndex(({ index }) => index === id + 1);
      this.tasks.splice(delIdx, 1);
    });
    return super.reOrderTaskIndex(this.tasks);
  }
}