import createUI from "../ui.js";
import CRUD from "../CRUD.js";

const crud = new CRUD();

export default (inputs) => {
    inputs.forEach(element => {
        element.addEventListener('change', (ev) => {
            const id = ev.target.getAttribute('data-id');
            const desc = ev.target.value;
            if(desc === ""){
                createUI();
                return alert("Task Description Cannot Be Empty");
            }
            crud.updateTask(id, desc);
            createUI();
        })
    });
}