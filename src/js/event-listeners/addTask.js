import CRUD from '../CRUD.js';

import createUI from '../ui.js';

const crud = new CRUD();

const addTaskInput = document.getElementById('add-task-input');
const addTaskIcon = document.getElementById('add-task-icon');

const errorContainer = document.getElementById('error-container');

const addTaskEventListner = (e) => {
  const task = addTaskInput.value;
  if(task === ''){
    return errorContainer.style = 'display: none;';
  }
  if(e.keyCode === 13 || e.target.id === 'add-task-icon'){
    crud.addTask(task);
    addTaskInput.value = '';
    createUI();
  }
  return errorContainer.style = '';
}

addTaskIcon.addEventListener('click', addTaskEventListner);
addTaskInput.addEventListener('keyup', addTaskEventListner)