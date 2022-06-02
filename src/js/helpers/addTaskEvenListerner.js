import CRUD from '../CRUD.js';

import createUI from '../ui.js';

const addTaskInput = document.getElementById('add-task-input');
const addTaskIcon = document.getElementById('add-task-icon');

const errorContainer = document.getElementById('error-container');

const addTaskEventListner = (e) => {
  const task = addTaskInput.value;
  const crud = new CRUD();
  if (task === '') {
    errorContainer.style = 'display: block;';
    return;
  }
  if (e.keyCode === 13 || e.target.id === 'add-task-icon') {
    crud.addTask(task);
    addTaskInput.value = '';
    createUI();
  }
  errorContainer.style = 'display: none;';
};

addTaskIcon.addEventListener('click', addTaskEventListner);
addTaskInput.addEventListener('keyup', addTaskEventListner);