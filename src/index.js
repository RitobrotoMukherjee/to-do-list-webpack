import './css/style.css';

import TaskList from './js/taskList.js';

const tasks = new TaskList();

const renderTasks = () => {
  const docRange = document.createRange();
  const listContainer = document.getElementById('todo-list-container');
  const taskList = tasks.getList();
  let template = '';
  taskList.forEach((item) => {
    template += `<li class="todo-list-items">
            <div class="list-item-data">
                <input type="checkbox" id="task${item.index}" name="checkbox" value="${item.index}">
                <label for="task${item.index}">Task ${item.index + 1}</label>
            </div>
            <div class="list-item-data">
                <i id="delete${item.index}" class="fas fa-trash-alt"></i>
            </div>
        </li>`;
  });
  listContainer.append(docRange.createContextualFragment(template));
};
renderTasks();
