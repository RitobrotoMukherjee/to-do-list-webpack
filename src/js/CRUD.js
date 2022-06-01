import Task from './task.js';
import TaskList from './taskList.js';

export default class {
    addTask(task) {
        const tasks = TaskList.getList();
        const l = tasks.length;
        tasks.push(new Task((l + 1), false, task));
        return TaskList.setList(tasks);
    }

    removeTask(id) {
        const tasks = TaskList.getList();
        tasks.splice(id, 1);
        for(let i = 0; i < tasks.length; i += 1) {
            tasks[i].index = i + 1;
        }
        TaskList.setList(tasks);
        return tasks;
    }
}