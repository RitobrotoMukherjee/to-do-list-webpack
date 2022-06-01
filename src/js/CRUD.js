import Task from './task.js';
import TaskList from './taskList.js';

export default class {
    constructor(){
        this.tasks = TaskList.getList();
    }

    addTask(task) {
        const l = this.tasks.length;
        this.tasks.push(new Task((l + 1), false, task));
        return TaskList.setList(this.tasks);
    }

    removeTask() {

    }
}