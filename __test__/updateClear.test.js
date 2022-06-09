/* eslint-disable */

import crud from '../src/js/CRUD';
import TaskList from '../src/js/taskList';
import CompletedTask from '../src/js/CompletedTasks';

// super class mock initiate
jest.mock('../src/js/taskList');

let localStorage = [
    {
        index: 1,
        completed: false,
        description: 'task1',
    },
    {
        index: 2,
        completed: false,
        description: 'task2',
    },
    {
        index: 3,
        completed: false,
        description: 'task3',
    }
];

describe('Update task test', () => {
    const cr =  new crud();
    
    const mockSetList = jest.fn((tasks) => localStorage = tasks);
    TaskList.prototype.setList = mockSetList;

    test('update task description test', () => {
        // Arrange
        cr.tasks = localStorage;
        const description = "Added new description";

        // ACT
        const updatedTask = cr.updateTask(0, description);

        // Assert
        expect(description).toBe(updatedTask[0].description);
    })
});

describe('Remove task and clear completed tests', () => {
    const ct =  new CompletedTask();

    // mock set local storage
    const mockSetList = jest.fn((tasks) => localStorage = tasks);

    // mock reorder index function
    const mockReOrderTaskIndex = jest.fn((tasks) => {
        tasks.forEach((task, i) => task.index = i + 1 );
        return localStorage = tasks;
    });

    TaskList.prototype.setList = mockSetList;
    TaskList.prototype.reOrderTaskIndex = mockReOrderTaskIndex;

    test('Update 1 completed task', () => {
        // Arrange
        ct.tasks = localStorage;

        // ACT
        ct.completedTask(2,true);

        // Assert
        expect(ct.tasks[2].completed).toBeTruthy();
       
    });

    test('Clear all completed tasks test', () => {
        // Arrange
        const checkTaskTwo = { index: 1, completed: false, description: 'task2' };

        ct.tasks = localStorage.map((task) => {
            if(task.index % 2 !== 0) {
                task.completed = true;
            }
            return task;
        });

        // Act
        const nonCompletedTask = ct.completedMultipleTasks();

        // Assert
        expect(ct.tasks).toHaveLength(3);
        expect(nonCompletedTask).toHaveLength(1);
        expect(nonCompletedTask[0].index).toEqual(1);
        expect(nonCompletedTask[0]).toEqual(checkTaskTwo);
    });
});