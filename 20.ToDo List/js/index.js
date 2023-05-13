import Tasks from "./Tasks.js";
import Utils from "./utils.js";


let tasks = new Utils().tasksFromLocalStorage();
let listNote = document.querySelector('.list-note');
let date = document.querySelector('.header-inputs-date');
let text = document.querySelector('.header-inputs-text');
let important = document.querySelector('#header-inputs-important');
let addButton = document.querySelector('#header-inputs-btn');
let lighter = document.querySelector('.span-dot')
new Tasks().renderTask(tasks);
addButton.addEventListener("click", () => {
    if (date.value != '' && text.value != '') {
        new Tasks().addTask({
            id: Math.floor(Math.random() * 1000000),
            text: text.value,
            date: date.value,
            important: important.checked == true ? true : false,
            status: "todo"
        })
    } else {
        alert('Please add date and text !');
    }
})
listNote.addEventListener("click", (e) => {
    console.log(e.target.classList.contains('edit'));
    if (e.target.classList.contains('edit')) {
        let id = e.target.closest('.list-note-new').id
        let textModule = document.querySelector('.edit-module-text')
        let dateModule = document.querySelector('.edit-module-date')
        let [text, date] = new Tasks().getTasks(id)

        listNote.insertAdjacentHTML('beforeend', `  
        <div class='module'>
        <div class='edit-module'>
        <input type='text' class='edit-module-text' value="${text}" placeholder='Change note'>
        <input type='date' class='edit-module-date' value="${date}">
        <div class='edit-module-button'>
        <button id='btn-exit'>Exit</button>
        <button id='btn-save'>Save</button>
        </div>
        </div>        
        `)
    }
})


listNote.addEventListener("click", (e) => {
    if (e.target.classList.contains('delete')) {
        let id = e.target.closest('.list-note-new').id
        console.log(id);
        new Tasks().deleteTasks(id);
    }
})

