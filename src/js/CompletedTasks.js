import TaskList from './taskList.js';

export default class extends TaskList {
  constructor() {
    super();
    this.tasks = super.getList();
  }

  completedTask(listIndex = -1, completed = false) {
    this.tasks[listIndex].completed = completed;
    return super.reOrderTaskIndex(this.tasks);
  }

  //   completedMultipleTasks(tasks) {

//   }
}