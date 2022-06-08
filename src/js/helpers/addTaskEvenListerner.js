import CRUD from '../CRUD.js';
import CompletedTasks from '../CompletedTasks.js';

import createUI from '../ui.js';

const addTaskInput = document.getElementById('add-task-input');
const addTaskIcon = document.getElementById('add-task-icon');

const clearCompletedBtn = document.getElementById('clear-completed-btn');

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

const clearAllCompleted = () => {
  const completedTsk = new CompletedTasks();
  completedTsk.completedMultipleTasks();
  createUI();
};

addTaskIcon.addEventListener('click', addTaskEventListner);
addTaskInput.addEventListener('keyup', addTaskEventListner);

clearCompletedBtn.addEventListener('click', clearAllCompleted);