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
    cr.tasks = localStorage;

    const mockSetList = jest.fn((tasks) => localStorage = tasks);
    TaskList.prototype.setList = mockSetList;

    test('update task description test', () => {
        // Arrange
        const description = "Added new description";

        // ACT
        const updatedTask = cr.updateTask(0, description);

        // Assert
        expect(description).toBe(updatedTask[0].description);
    })
});

describe('Remove task and clear completed tests', () => {
    const ct =  new CompletedTask();
    ct.tasks = localStorage;

    const mockSetList = jest.fn((tasks) => localStorage = tasks);
    TaskList.prototype.setList = mockSetList;

    test('update completed task ', () => {
        // Arrange

        // ACT
       ct.completedTask(1,true)

        // Assert
        expect(ct.tasks[1].completed).toBeTruthy()
       
    })
});