import Task from './task.js';
import TaskList from './taskList.js';
import { reOrderTasks } from './helpers/ReorderTaskIndex.js';

export default class {
  static addTask(task) {
    const tasks = TaskList.getList();
    const l = tasks.length;
    tasks.push(new Task((l + 1), false, task));
    return TaskList.setList(tasks);
  }

  static updateTask(id, desc) {
    const tasks = TaskList.getList();
    tasks[id].description = desc;
    return TaskList.setList(tasks);
  }

  static removeTask(id) {
    let tasks = TaskList.getList();
    tasks.splice(id, 1);
    tasks = reOrderTasks(tasks);
    TaskList.setList(tasks);
    return tasks;
  }
}