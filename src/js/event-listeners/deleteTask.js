import createUI from "../ui.js";
import CRUD from "../CRUD.js";

const crud = new CRUD();

export default (inputs) => {
    inputs.forEach(item => {
        item.addEventListener('click', (ev) => {
         crud.removeTask(ev.target.getAttribute('data-id'));
         createUI();
        });
     });
}