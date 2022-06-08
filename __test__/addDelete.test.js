
import crud from '../src/js/CRUD';
import TaskList from '../src/js/taskList';

// super class mock initiate
jest.mock('../src/js/taskList');

describe("add and delete 1-1 to-do item", () => {

    test("To-Do Add 1 task", () => {
        // Arrange
        const c = new crud();
        const toDoList = [];
        c.tasks = toDoList;

        // mock the super setList function
        const mockSetList = jest.fn((tasks) => toDoList = tasks);
        TaskList.mockImplementation(() => {
            return {
                setList: mockSetList
            }
        })

        // ACT
        const previousTasks = c.tasks.length;
        const afterAddTasks = c.addTask('Go to gym');

        //Assert
        expect(afterAddTasks.length).toBe(previousTasks + 1);
    });

    test("To-Do Delete 1 task", () => {
        // Arrange


        // console.log(TaskList.mock.instances[0]);

        //Assert
        // expect(afterDeleteTasks).toBe(previousTasks - 1);
    });
});