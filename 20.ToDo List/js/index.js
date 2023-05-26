import Tasks from "./Tasks.js";
import Utils from "./utils.js";
import { Notification } from "./Notification.js";

let tasks = new Utils().tasksFromLocalStorage();
let list = document.querySelector('.list')
let listNote = document.querySelector('.list-note');
let date = document.querySelector('.header-inputs-date');
let text = document.querySelector('.header-inputs-text');
let important = document.querySelector('#header-inputs-important');
let addButton = document.querySelector('#header-inputs-btn');
let pr = document.querySelectorAll('.box')
let lighter = document.querySelector('.span-dot')

new Tasks().renderTask(tasks);

addButton.addEventListener("click", () => {
    if (date.value != '' && text.value != '') {
        new Tasks().addTask({
            id: Math.floor(Math.random() * 1000000),
            text: text.value,
            date: date.value,
            important: important.checked == true ? true : false,
            status: false
        })


    }
    else {
        alert('Please add date and text !');
    }
})

listNote.addEventListener("click", (e) => {
    if (e.target.classList.contains('edit')) {
        let id = e.target.closest('.list-note-new').id
        let [text, date] = new Tasks().getTasks(id)
        listNote.insertAdjacentHTML('beforeend', `  
        <div class='module'>
        <div class='edit-module'>
        <input type='text' class='edit-module-text' value="${text}" placeholder='Change note'>
        <input type='date' class='edit-module-date' value="${date}">
        <div class='edit-module-button'>
        <button class='btn-exit'>Exit</button>
        <button class='btn-save'>Save</button>
        </div>
        </div>        
        `)

        let moduleText = document.querySelector('.edit-module-text')
        let moduleDate = document.querySelector('.edit-module-date')
        let saver = document.querySelector('.btn-save')

        saver.addEventListener('click', () => {
            let edit = new Tasks().editTasks(id, moduleText.value, moduleDate.value)
            localStorage.setItem('tasks', JSON.stringify(edit));
            new Notification().newNotification(listNote, 'Task is changed')
        })
    }

    if (e.target.classList.contains('btn-exit')) {
        e.target.closest('.module').style.display = 'none'
    }
})

listNote.addEventListener("click", (e) => {
    if (e.target.classList.contains('delete')) {
        let id = e.target.closest('.list-note-new').id
        new Tasks().deleteTasks(id);
        new Notification().newNotification(listNote, 'Task is deleted', 'rgb(29, 105, 171)')
    }
})

listNote.addEventListener('click', (e) => {
    if (e.target.classList.contains('note-new-text')) {
        let id = e.target.closest('.list-note-new').id
        new Tasks().updateStatus(id)
    }
})


let search = document.querySelector('.list-search')
search.addEventListener('input', () => {

    new Tasks().searchNote(search.value.toLowerCase())
})


let logOut = document.querySelector('.list-logOut')
logOut.addEventListener('click', () => {
    window.location.href = "../20.ToDo List/login.html";
})
let MyProfile = document.querySelector('.list-profile')
MyProfile.addEventListener('click', () => {
    window.location.href = "../20.ToDo List/my-Profile.html"
})
let menu = document.querySelector('.menu')
let all = document.querySelector('#All')
let processInput = document.querySelector('#Process')
let process = document.querySelector('.process')
menu.addEventListener('click', () => {
    if (processInput.checked === true) {
        list.style.display = 'none'
        process.style.display = 'block'
    } else if (all.checked === true) {
        process.style.display = 'none'
        list.style.display = 'block'
    }
})
new Tasks().DragandDrop(tasks)
