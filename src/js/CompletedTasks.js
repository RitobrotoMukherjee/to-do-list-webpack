import { reOrderTasks } from "./helpers/ReorderTaskIndex.js";
import TaskList from "./taskList.js";

export default class {
    constructor() {
        this.tasks;
    }

    getTaskList() {
        this.tasks = TaskList.getList();
        return;
    }

    completedTask (listIndex = -1, completed = false) {
        this.tasks[listIndex].completed = completed;
        this.tasks = reOrderTasks(this.tasks);
        TaskList.setList(this.tasks);
        return this.tasks;
    }

    completedMultipleTasks(tasks){

    }
}