import Utils from "./utils.js";
import { Notification } from "./Notification.js";



const form = document.querySelector('.form-add')
let listNote = document.querySelector('.list-note')
let important = document.querySelector('#header-inputs-important');
let pro = document.querySelectorAll('.process-status-div')
export default class Tasks {

    constructor() {
        this.tasks = new Utils().tasksFromLocalStorage()
    }

    renderTask(tasks) {
        listNote.innerHTML = ''
        tasks.forEach((item) => {
            listNote.insertAdjacentHTML("afterbegin", `
            <li class="list-note-new" id="${item.id}">
                        <span class='span-dot'></span>
                        <p class="note-new-text">${item.text}</p>
                        <span class='note-new-date'>${item.date}</span>
                        <i class="fa-solid fa-pen-to-square fa-bounce edit" style="color: #cacd2d;"></i>
                        <i class="fa-solid fa-trash fa-bounce delete" style="color: #ff1a1a;"></i>
                        </li>
                        `)
            let lighter = document.querySelector('.span-dot')


            if (item.important && item.status == true) {
                lighter.style.background = 'green'
                new Notification().newNotification(listNote, 'Task is done','green')
            }
            else if (item.status == true && item.important == false) {
                lighter.style.background = 'green'
                new Notification().newNotification(listNote, 'Task is done','green')
            }
            else if (item.important == true && item.status == false) {
                lighter.style.background = 'red'
                new Notification().newNotification(listNote, 'Task is important','red')
            }
            else if (item.status == false) {
                lighter.style.background = 'orange'
            }
        });
    }

    addTask(data) {
        this.tasks = JSON.parse(localStorage.getItem("tasks") || '[]');
        this.tasks.push(data)
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        this.renderTask(this.tasks);
    }
    getTasks(id) {
        let findTask = this.tasks.filter((item) => item.id == id)
        console.log(findTask);
        return [findTask[0].text, findTask[0].date]
    }

    editTasks(id, text, date) {
        let findTask = this.tasks.filter((item) => item.id == id);
        findTask[0].text = text;
        findTask[0].date = date;
        this.renderTask(this.tasks);
        return this.tasks;
    }
    deleteTasks(id) {
        let filteredTasks = this.tasks.filter((item) => item.id != id);
        listNote.innerHTML = ''
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));
        this.renderTask(filteredTasks);
    }
    updateStatus(id) {
        this.tasks.map((item) => {
            if (item.id == id) {
                item.status = true
            }
        })
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
        this.renderTask(this.tasks);
    }

    searchNote(text) {
        let filterNotes = this.tasks.filter((item) => {
            return item.text.toLowerCase().startsWith(text);
        })
        this.renderTask(filterNotes)
    }

    DragandDrop(id){
        pro.forEach((item) => {
                item.addEventListener('dragover', (element) => {
                    element.preventDefault()
                    item.classList.add("dragged")
                })
                item.addEventListener('dragleave', (element) => {
                    element.preventDefault()
                    item.classList.remove("dragged")
                })
                item.addEventListener('drop', (element) => {
                    element.preventDefault()
                    item.appendChild(text)
                    console.log(item.id);
                })
            
            })
    }
}
// leaves.forEach((item) => {
//     item.addEventListener('dragover', (element) => {
//         element.preventDefault()
//         item.classList.add("dragged")
//         let arr = localStorage.status = 'moving'
//         localStorage.setItem('status', arr)
//     })
//     item.addEventListener('dragleave', (element) => {
//         element.preventDefault()
//         item.classList.remove("dragged")
//         let arr = localStorage.status = 'unaviable'
//         localStorage.setItem('status', arr)

//     })
//     item.addEventListener('drop', (element) => {
//         element.preventDefault()
//         item.appendChild(text)
//         let arr = localStorage.status = 'aviable'
//         localStorage.setItem('status', arr)
//         console.log(item.id);
//     })

// })