const docRange = document.createRange();
const listContainer = document.getElementById('todo-list-container');

export default (items) => {
  let template = '';
  items.forEach((item) => {
    template += `<li class="todo-list-items">
                <div class="list-item-data flex-2">
                    <input type="checkbox" id="task-check-${item.index}" name="checkbox" value="${item.index}">
                    <input type="text" id="task-edit-${item.index}" class="edit-task" value="${item.description}">
                </div>
                <div class="list-item-data flex-1">
                    <i id="delete${item.index}" class="fas fa-trash-alt"></i>
                </div>
            </li>`;
  });
  const docFragment = docRange.createContextualFragment(template);
  return listContainer.append(docFragment);;
};