/* eslint-disable */

import crud from '../src/js/CRUD';
import TaskList from '../src/js/taskList';

// super class mock initiate
jest.mock('../src/js/taskList');

describe('add and delete 1-1 to-do item', () => {
    const c = new crud();
    const toDoList = [];
    c.tasks = toDoList;

    // mock the localStorage setList function
    const mockSetList = jest.fn((tasks) => toDoList = JSON.stringify(tasks));
    
    TaskList.mockImplementation(() => {
        return{
            setList: mockSetList,
        }
        
    });
    test('To-Do Add 1 task', () => {
        // Arrange
        const previousTasksCount = c.tasks.length;

        // ACT
        const afterAddTasksCount = c.addTask('Go to gym');

        // Assert
        expect(afterAddTasksCount.length).toBe(previousTasksCount + 1);
    });

    test('To-Do Delete 1 task', () => {
        // Arrange
        const previousTasksCount = c.tasks.length;
        
        // Act
        const afterRemoveTasksArray = c.removeTask(0);

        // Assert
        expect(previousTasksCount).toBe(afterRemoveTasksArray.length + 1);
    });
});