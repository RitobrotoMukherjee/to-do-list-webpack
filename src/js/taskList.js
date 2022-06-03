/* eslint-disable */
/* Main Class to set local storage */

// import Task from "./task";

export default class {
  setList(tasks) {
    return localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getList() {
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  }

  reOrderTaskIndex(tasks) {
    // using destructuring and map
    // const reorderedTasks = tasks.map(({ completed, description }, i) => new Task(i + 1, completed, description) );
    // return this.setList(reorderedTasks);

    //using forEach
    tasks.forEach((task, i) => task.index = i + 1 );
    return this.setList(tasks);
  }
}