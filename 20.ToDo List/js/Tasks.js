import Utils from "./utils.js";
import { Notification } from "./Notification.js";



const form = document.querySelector('.form-add')
let listNote = document.querySelector('.list-note')
let important = document.querySelector('#header-inputs-important');
let statusProcess = document.querySelector('#process')
let statusImportant = document.querySelector('#important')
let statusDone = document.querySelector('#done')






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
                new Notification().newNotification(listNote, 'Task is done', 'green')
            }
            else if (item.status == true && item.important == false) {
                lighter.style.background = 'green'
                new Notification().newNotification(listNote, 'Task is done', 'green')
            }
            else if (item.important == true && item.status == false) {
                lighter.style.background = 'red'
                new Notification().newNotification(listNote, 'Task is important', 'red')
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

    DragandDrop(tasks) {

        let eachTask = tasks.forEach((item) => {
            if (item.important && item.status == true) {
                statusDone.insertAdjacentHTML('beforeend', `
                <div class="process-status" draggable="true" id=${item.id} status='true' important='true'>
                <p>${item.text}</p>
                <span>${item.date}</span>
                </div>
                `)

            }else if(item.status == true && item.important == false){
                statusDone.insertAdjacentHTML('beforeend', `
                <div class="process-status" draggable="true" id=${item.id} status='true' important='false'>
                <p>${item.text}</p>
                <span>${item.date}</span>
                </div>
                `)
            }
             else if (item.important == false && item.status == false) {
                statusProcess.insertAdjacentHTML('beforeend', `
                <div class="process-status" draggable="true" id=${item.id} status='false' important='false'>
                <p>${item.text}</p>
                <span>${item.date}</span>
                </div>
                `)
            } else if (item.important == true && item.status == false) {
                statusImportant.insertAdjacentHTML('beforeend', `
                <div class="process-status" draggable="true" id=${item.id} status='false' important='true'>
                <p>${item.text}</p>
                <span>${item.date}</span>
                </div>

                `)
                
            }
        })

        let processInner = document.querySelectorAll('.process-inner')
        let processStatus = document.querySelector('.process-status')
        let processToDo = document.querySelector('#process')
        let processImp = document.querySelector('#important')
        let processDone = document.querySelector('#done')
        processInner.forEach((item) => {
            item.addEventListener('dragover', (e) => {
                e.preventDefault()
            })
            item.addEventListener('drop', (e) => {
                e.preventDefault()
                item.appendChild(processStatus)
                console.log(processStatus.parentElement);
                if(processStatus.parentElement == processImp){
                    processStatus.style.background = '#E54A4A'
                    processStatus.important = true
                }else if(processStatus.parentElement == processDone){
                    processStatus.style.background = '#66EE85'                    
                    processStatus.status = true
                }else{
                    processStatus.style.background = 'white'
                    processStatus.status = false
                    processStatus.important = false
                }

            })

        })
        
        
    }
}
// processStatus.forEach((item)=>{
//         console.log(item);
//         item.addEventListener('dragover',(element)=>{
//             element.preventDefault()
//             item.classList.add('over')
//         })
//         item.addEventListener('dragleave',(element)=>{
//             element.preventDefault()
//             item.classList.remove('over')                    
//         })
//         item.addEventListener('drop',(element)=>{
//             element.preventDefault()
//             item.classList.remove('over')
//             // if(item.parentElement == processToDo){
//                 processToDo.appendChild(item)
//             // }
//         })
// })