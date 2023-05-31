import Utils from "./utils.js";
import { Notification } from "./Notification.js";

const form = document.querySelector(".form-add");
let listNote = document.querySelector(".list-note");
let important = document.querySelector("#header-inputs-important");
let statusProcess = document.querySelector("#process");
let statusImportant = document.querySelector("#important");
let statusDone = document.querySelector("#done");

export default class Tasks {
    constructor() {
        this.tasks = new Utils().tasksFromLocalStorage();
    }
    renderTask(tasks) {
        listNote.innerHTML = "";
        tasks.forEach((item) => {
            let status = "";

            if (item.important && item.status) {
                new Notification().newNotification(listNote, "Task is done", "rgba(0, 247, 20, 0.69)");
                status = "done";
            } else if (!item.important && item.status) {
                status = "done";
                new Notification().newNotification(listNote, "Task is done", "rgba(0, 247, 20, 0.69)");
            } else if (item.important && !item.status) {
                status = "todoImportant";
                new Notification().newNotification(listNote, "Task is important", "rgba(245, 39, 39, 0.69)");
            } else if (!item.important && !item.status) {
                status = "todo";
                new Notification().newNotification(listNote, "Task is important", "rgba(245, 39, 39, 0.69)");
            }

            listNote.insertAdjacentHTML(
                "afterbegin",
                `
            <li class="list-note-new" id="${item.id}">
                        <span class='span-dot ${status}'></span>
                        <p class="note-new-text">${item.text}</p>
                        <span class='note-new-date'>${item.date}</span>
                        <i class="fa-solid fa-pen-to-square fa-bounce edit" style="color: #cacd2d;"></i>
                        <i class="fa-solid fa-trash fa-bounce delete" style="color: #ff1a1a;"></i>
                        </li>
                        `
            );
        });
    }

    addTask(data) {
        this.tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        this.tasks.push(data);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        this.renderTask(this.tasks);
    }
    getTasks(id) {
        let findTask = this.tasks.filter((item) => item.id == id);
        console.log(findTask);
        return [findTask[0].text, findTask[0].date];
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
        listNote.innerHTML = "";
        localStorage.setItem("tasks", JSON.stringify(filteredTasks));
        this.renderTask(filteredTasks);
    }
    updateStatus(id) {
        this.tasks.map((item) => {
            if (item.id == id) {
                item.status = !item.status;
            }
        });
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        this.renderTask(this.tasks)
    }

    updateStatusInCategories(id, status) {
        console.log(id);
        console.log(status);
    
        this.tasks.map((item) => {
            console.log(item);
            if (item.id == id) {
                if (!item.status && !item.important && status == 'done') {
                    item.status = true;
                } else if (!item.status && item.important && status == 'done') {
                    item.status = true;
                } else if (item.status && item.important && status == 'process') {
                    item.status = false;
                    item.important = false;
                } else if (!item.status && item.important && status == 'process') {
                    item.important = false;
                } else if (item.status && !item.important && status == 'important') {
                    item.status = false;
                    item.important = true;
                } else if (!item.status && !item.important && status == 'important') {
                    item.important = true;
                }
            }
        });
    
        console.log(this.tasks);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        this.renderTask(this.tasks);
    }
    

    searchNote(text) {
        let filterNotes = this.tasks.filter((item) => {
            return item.text.toLowerCase().startsWith(text);
        });
        this.renderTask(filterNotes);
    }

    DragandDrop() {
        let processInner = document.querySelectorAll(".process-inner");
        let processToDo = document.querySelector("#process");
        let processImp = document.querySelector("#important");
        let processDone = document.querySelector("#done");



        this.tasks.forEach((item) => {
            if (item.important && item.status) {
                processDone.insertAdjacentHTML(
                    "beforeend",
                    `
                <div class="process-status" id="${item.id}" important='${item.important}' status='${item.status}' draggable='true'>
                            <p>${item.text}</p>
                            <span>${item.date}</span>
                            <div class="status-i"></div>
                            </div>
                            </div>
                            `
                );
            } else if (!item.important && item.status) {
                processDone.insertAdjacentHTML(
                    "beforeend",
                    `
                <div class="process-status" id="${item.id}" important='${item.important}' status='${item.status}' draggable='true'>
                            <p>${item.text}</p>
                            <span>${item.date}</span>
                            <div class="status-i">
                            </div>
                            </div>
                            `
                );
            } else if (item.important && !item.status) {
                processImp.insertAdjacentHTML(
                    "beforeend",
                    `
                <div class="process-status" id="${item.id}" important='${item.important}' status='${item.status}' draggable='true'>
                            <p>${item.text}</p>
                            <span>${item.date}</span>
                            <div class="status-i">
                            </div>
                            </div>
                            `
                );
            } else if (!item.important && !item.status) {
                processToDo.insertAdjacentHTML(
                    "beforeend",
                    `
                <div class="process-status" id="${item.id}" important='${item.important}' status='${item.status}'  draggable='true'>
                            <p>${item.text}</p>
                            <span>${item.date}</span>
                            <div class="status-i">
                            </div>
                            </div>
                            `
                );
            }
        });

        processInner.forEach((item) => {
            item.addEventListener('dragstart', (e) => {
                e.target.classList.add('dragged');
            });

            item.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.target.classList.add('dragged-over');
            });

            item.addEventListener('dragleave', (e) => {
                e.target.classList.remove('dragged-over');
            });



            item.addEventListener('drop', (e) => {
                e.preventDefault();
                const draggedItem = document.querySelector('.dragged');
                e.target.appendChild(draggedItem);
                item.classList.remove('dragged-over');

                draggedItem.classList.remove('dragged')
                this.updateStatusInCategories(draggedItem.id, e.target.id);
            });
        })
    }
}
