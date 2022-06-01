import TaskList from './taskList.js';
import CRUD from './CRUD.js';

const crud = new CRUD();

const docRange = document.createRange();
const listContainer = document.getElementById('todo-list-container');

export default function createUI() {
    const items = TaskList.getList();
    let template = '';
    listContainer.innerHTML = ``;
    items.forEach((item, i) => {
      template += `<li class="todo-list-items">
                  <div class="list-item-data flex-2">
                      <input type="checkbox" id="task-check-${item.index}" name="checkbox" value="${item.index}">
                      <input type="text" id="task-edit-${item.index}" class="edit-task" value="${item.description}">
                  </div>
                  <div class="list-item-data flex-1">
                      <i id="delete-task-${i}" data-id="${i}" class="fas fa-trash-alt delete-task"></i>
                  </div>
              </li>`;
    });
    listContainer.append(docRange.createContextualFragment(template));

    const deleteButtons = document.querySelectorAll('.delete-task');
    deleteButtons.forEach(item => {
       item.addEventListener('click', () => {
        crud.removeTask(item.getAttribute('data-id'));
        createUI();
       });
    });
    return;
  };;