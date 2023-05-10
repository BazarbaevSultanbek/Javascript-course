import Tasks from "./Tasks.js";
import Utils from "./utils.js";


let tasks = new Utils().tasksFromLocalStorage();
let listNote = document.querySelector('.list-note');

new Tasks().renderTask(tasks);

listNote.addEventListener("click", (e) => {
    console.log(e.target.classList.contains('delete'));
    if (e.target.classList.contains('delete')) {
        let id = e.target.closest('.list-note-new').id
        console.log(id);
        new Tasks().deleteTasks(id)

    }
})


