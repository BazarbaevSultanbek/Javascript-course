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

    // renderTask(tasks) {
    //     listNote.innerHTML = ''
    //     tasks.forEach((item) => {

    //         let status = ""

    //         if (item.important && item.status) {
    //             new Notification().newNotification(listNote, 'Task is done', 'rgba(0, 247, 20, 0.69)')
    //             status = "doneImportant"
    //         }
    //         else if (!item.important && item.status) {
    //             status = "done"
    //             new Notification().newNotification(listNote, 'Task is done', 'rgba(0, 247, 20, 0.69)')
    //         }
    //         else if (item.important && !item.status) {
    //             status = "todoImportant"
    //             new Notification().newNotification(listNote, 'Task is important', 'rgba(245, 39, 39, 0.69)')
    //         }
    //         else if (!item.important && !item.status) {
    //             status = "todo"
    //             new Notification().newNotification(listNote, 'Task is important', 'rgba(245, 39, 39, 0.69)')
    //         }

    //         tasks.forEach((item) => {

    //             const processInner = item.important && item.status
    //                 ? document.querySelector('#done')
    //                 : !item.important && item.status
    //                     ? document.querySelector('#done')
    //                     : item.important && !item.status
    //                         ? document.querySelector('#important')
    //                         : !item.important && !item.status
    //                             ? document.querySelector('#process')
    //                             : null;
    //             processInner.insertAdjacentHTML('beforeend', `<ul class="process-list"></ul>`)
    //             const processList = document.querySelector('.process-list')
    //             processList.insertAdjacentHTML(
    //                 'afterbegin',
    //                 ` <li  id="${item.id}" draggable="true">
    //               <p >${item.text}</p>
    //               <span >${item.date}</span>
    //               <div class='status'>
    //               <i class="fa-solid fa-pen-to-square fa-bounce edit" style="color: #cacd2d;"></i>
    //               <i class="fa-solid fa-trash fa-bounce delete" style="color: #ff1a1a;"></i>
    //               </div>
    //               </li>`
    //             );
    //             console.log(item.id);
    //         });

    //         listNote.insertAdjacentHTML("afterbegin", `
    //         <li class="list-note-new" id="${item.id}">
    //                     <span class='span-dot ${status}'></span>
    //                     <p class="note-new-text">${item.text}</p>
    //                     <span class='note-new-date'>${item.date}</span>
    //                     <i class="fa-solid fa-pen-to-square fa-bounce edit" style="color: #cacd2d;"></i>
    //                     <i class="fa-solid fa-trash fa-bounce delete" style="color: #ff1a1a;"></i>
    //                     </li>
    //                     `)

    //     });

    // }
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
            console.log(status);
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
                <div class="process-status" id="${item.id}" draggable='true' status='${item.status}' important='${item.important}'>
                            <p>${item.text}</p>
                            <span>${item.date}</span>
                            <div class="status-i"></div>
                            <i class="fa-solid fa-pen-to-square fa-bounce edit" style="color: #cacd2d;"></i>
                            <i class="fa-solid fa-trash fa-bounce delete" style="color: #ff1a1a;"></i>
                            </div>
                            </div>
                            `
                );
            } else if (!item.important && item.status) {
                processDone.insertAdjacentHTML(
                    "beforeend",
                    `
                <div class="process-status" id="${item.id}" draggable='true' status='${item.status}' important='${item.important}'>
                            <p>${item.text}</p>
                            <span>${item.date}</span>
                            <div class="status-i">
                            <i class="fa-solid fa-pen-to-square fa-bounce edit" style="color: #cacd2d;"></i>
                            <i class="fa-solid fa-trash fa-bounce delete" style="color: #ff1a1a;"></i>
                            </div>
                            </div>
                            `
                );
            } else if (item.important && !item.status) {
                processImp.insertAdjacentHTML(
                    "beforeend",
                    `
                <div class="process-status" id="${item.id}" draggable='true' status='${item.status}' important='${item.important}'>
                            <p>${item.text}</p>
                            <span>${item.date}</span>
                            <div class="status-i">
                            <i class="fa-solid fa-pen-to-square fa-bounce edit" style="color: #cacd2d;"></i>
                            <i class="fa-solid fa-trash fa-bounce delete" style="color: #ff1a1a;"></i>
                            </div>
                            </div>
                            `
                );
            } else if (!item.important && !item.status) {
                processToDo.insertAdjacentHTML(
                    "beforeend",
                    `
                <div class="process-status" id="${item.id}" draggable='true' status='${item.status}' important='${item.important}'>
                            <p>${item.text}</p>
                            <span>${item.date}</span>
                            <div class="status-i">
                            <i class="fa-solid fa-pen-to-square fa-bounce edit" style="color: #cacd2d;"></i>
                            <i class="fa-solid fa-trash fa-bounce delete" style="color: #ff1a1a;"></i>
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

                if (item.id === 'process') {
                    console.log('1');
                    const tasks = Array.from(document.querySelectorAll('.process-status')).map((el) => ({
                        id: el.id,
                        text: el.querySelector('p').textContent,
                        date: el.querySelector('span').textContent,
                        status: false,
                        important: false
                    }));
                    localStorage.setItem('tasks', JSON.stringify(tasks));

                } else if (item.id === 'important') {
                    console.log('2');
                    draggedItem.setAttribute('important', true);
                    const tasks = Array.from(document.querySelectorAll('.process-status')).map((el) => ({
                        id: el.id,
                        text: el.querySelector('p').textContent,
                        date: el.querySelector('span').textContent,
                        status: el.getAttribute('status') === false,
                        important: el.getAttribute('important') === true
                    }));
                    localStorage.setItem('tasks', JSON.stringify(tasks));

                } else if (item.id === 'done') {
                    console.log('3');
                    draggedItem.setAttribute('status', true);
                    const tasks = Array.from(document.querySelectorAll('.process-status')).map((el) => ({
                        id: el.id,
                        text: el.querySelector('p').textContent,
                        date: el.querySelector('span').textContent,
                        status: el.getAttribute('status') === true,
                        important: el.getAttribute('important') === true
                    }));
                    localStorage.setItem('tasks', JSON.stringify(tasks));
                    
                    setTimeout(() => {
                        draggedItem.classList.remove('dragged');
                    }, 0)
                     this.renderTask(this.tasks)
                }
            });
        })
    }
}

// tasks.forEach((item) => {
//     if (item.important && item.status) {
//         processDone.insertAdjacentHTML("beforeend", `
//         <li class="process-status" id="${item.id}" draggable='true'>
//                     <p>${item.text}</p>
//                     <span>${item.date}</span>
//                     <div class="status-i"></div>
//                     <i class="fa-solid fa-pen-to-square fa-bounce edit" style="color: #cacd2d;"></i>
//                     <i class="fa-solid fa-trash fa-bounce delete" style="color: #ff1a1a;"></i>
//                     </div>
//                     </li>
//                     `)
//     } else if (!item.important && item.status) {
//         processDone.insertAdjacentHTML("beforeend", `
//         <li class="process-status" id="${item.id}" draggable='true'>
//                     <p>${item.text}</p>
//                     <span>${item.date}</span>
//                     <div class="status-i">
//                     <i class="fa-solid fa-pen-to-square fa-bounce edit" style="color: #cacd2d;"></i>
//                     <i class="fa-solid fa-trash fa-bounce delete" style="color: #ff1a1a;"></i>
//                     </div>
//                     </li>
//                     `)

//     } else if (item.important && !item.status) {
//         processImp.insertAdjacentHTML("beforeend", `
//         <li class="process-status" id="${item.id}" draggable='true'>
//                     <p>${item.text}</p>
//                     <span>${item.date}</span>
//                     <div class="status-i">
//                     <i class="fa-solid fa-pen-to-square fa-bounce edit" style="color: #cacd2d;"></i>
//                     <i class="fa-solid fa-trash fa-bounce delete" style="color: #ff1a1a;"></i>
//                     </div>
//                     </li>
//                     `)
//     } else if (!item.important && !item.status) {
//         processToDo.insertAdjacentHTML("beforeend", `
//         <li class="process-status" id="${item.id}" draggable='true'>
//                     <p>${item.text}</p>
//                     <span>${item.date}</span>
//                     <div class="status-i">
//                     <i class="fa-solid fa-pen-to-square fa-bounce edit" style="color: #cacd2d;"></i>
//                     <i class="fa-solid fa-trash fa-bounce delete" style="color: #ff1a1a;"></i>
//                     </div>
//                     </li>
//                     `)
//     }
// });

// processInner.forEach((item) => {
//     item.addEventListener('dragover', (e) => {
//         e.preventDefault()
//     })
//     item.addEventListener('drop', (e) => {
//         e.preventDefault()
//         const id = e.target.id
//         console.log(id);
//         const item = e.dataTransfer.getData('text/html')
//         console.log(item);
//         if (id === "process") {
//             processToDo.insertAdjacentHTML("beforeend", processStatus)
//         } else if (id === "important") {
//             processImp.insertAdjacentHTML("beforeend", processStatus)
//         } else if (id === "done") {
//             processDone.insertAdjacentHTML("beforeend", processStatus)
//         }

//     })

// })
