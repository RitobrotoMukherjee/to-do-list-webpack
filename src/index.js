import './css/style.css';

import TaskList from './js/taskList.js';

import ui from './js/ui.js';

const renderTasks = () => {
  ui(TaskList.getList());
};
renderTasks();
