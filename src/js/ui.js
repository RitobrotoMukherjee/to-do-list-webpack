import TaskList from './taskList.js';

const docRange = document.createRange();
const listContainer = document.getElementById('todo-list-container');


export default function createUI() {
    const items = TaskList.getList();
    console.log(items);
    let template = '';
    items.forEach((item) => {
      template += `<li class="todo-list-items">
                  <div class="list-item-data flex-2">
                      <input type="checkbox" id="task-check-${item.index}" name="checkbox" value="${item.index}">
                      <input type="text" id="task-edit-${item.index}" class="edit-task" value="${item.description}">
                  </div>
                  <div class="list-item-data flex-1">
                      <i id="delete-task-${item.index}" class="fas fa-trash-alt"></i>
                  </div>
              </li>`;
    });
    const docFragment = docRange.createContextualFragment(template);

    listContainer.innerHTML = ``;
    return listContainer.append(docFragment);
  };;