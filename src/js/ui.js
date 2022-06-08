import CRUD from './CRUD.js';
import CompletedTasks from './CompletedTasks.js';

const listContainer = document.getElementById('todo-list-container');

export default function createUI() {
  const crud = new CRUD();
  const template = crud.tasks.map(({ index, completed, description }, i) => 
      `<li class="todo-list-items">
          <div class="list-item-data flex-2">
              <input  class="complete-task" type="checkbox" id="task-check-${index}" data-id="${i}" ${completed === true ? 'checked' : ''} value="${index}">
              <input type="text" id="task-edit-${index}" data-id="${i}" class="edit-task" value="${description}">
          </div>
          <div class="list-item-data flex-1">
              <i id="delete-task-${i}" data-id="${i}" class="fas fa-trash-alt delete-task"></i>
          </div>
      </li>`
  );
  listContainer.innerHTML = template.join(' ');

  const deleteButtons = document.querySelectorAll('.delete-task');
  const editFields = document.querySelectorAll('.edit-task');
  const completed = document.querySelectorAll('.complete-task');

  deleteButtons.forEach((item) => {
    item.addEventListener('click', (ev) => {
      crud.removeTask(ev.target.getAttribute('data-id'));
      createUI();
    });
  });

  editFields.forEach((element) => {
    element.addEventListener('change', (ev) => {
      const id = ev.target.getAttribute('data-id');
      const desc = ev.target.value;
      if (desc === '') {
        createUI();
        return alert('Task Description Cannot Be Empty');
      }
      crud.updateTask(id, desc);
      return createUI();
    });
  });

  completed.forEach((el) => {
    const complete = new CompletedTasks();
    el.addEventListener('change', (ev) => {
      const id = ev.target.getAttribute('data-id');
      complete.completedTask(id, ev.target.checked);
      return createUI();
    });
  });
}