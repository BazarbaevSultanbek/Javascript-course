import Utils from "./utils.js";


const form = document.querySelector('.form-add')
let listNote = document.querySelector('.list-note')
let important = document.querySelector('#header-inputs-important');
let lighter = document.querySelector('.span-dot')
export default class Tasks {

    constructor() {
        this.tasks = new Utils().tasksFromLocalStorage()
    }

    renderTask(tasks) {
        listNote.innerHTML = ''
        tasks.forEach((item) => {
            listNote.insertAdjacentHTML("afterbegin", `
                    <li class="list-note-new" id="${item.id}">
                        <span class='span-dot' style="background:${
                             item.important == true ? 'red' : item.status == true ? "green" : item.status  == false ? "orange" : 'null'
                    }" ></span>
                        <p class="note-new-text">${item.text}</p>
                        <span class='note-new-date'>${item.date}</span>
                        <span><i class="fa-solid fa-pen-to-square edit" style="color: #ffd43b;"></i></span>
                        <span><i class="fa-solid fa-trash fa-beat-fade delete" style="color: #1d69ab;"></i></span> 
                    </li>
                `)
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
        let findTasks = this.tasks.map((item) => {
            if (item.id == id) {
                item.status = "completed"
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
}




















// const noteNew = document.querySelectorAll('.list-note-new')
// const important = document.querySelector('#header-inputs-important')
// const date = document.querySelector('.header-inputs-date')
// const note = document.querySelector('.header-inputs-text')
// let listNote = document.querySelector('.list-note')
// const time = new Date()
// const current = time.getHours() + ":" + time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
// export let todo = JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : []
// function setTodo() {
//     localStorage.setItem('tasks', JSON.stringify(todo))
// }
// class Tasks {
//     renderTask() {
//         let i = 0
//         let status = ''
//         function appearDisplay() {
//             const todo = JSON.parse(localStorage.getItem('tasks')) || []
//             listNote.innerHTML = ''
//             todo.forEach((item) => {
//                 listNote.innerHTML += `
//                 <ul class="list-note-new" id="${i}">
//                 <span class='span-dot' style="background: ${item.status === "important" ? "red" : "orange"}"></span>
//                 <li class="note-new-text" ${item.status === "done" ? "done" : ""}">${item.text}</li>
//                 <li class='note-new-date'>${item.date}</li>
//                 <li>${item.current}</li>
//                 <div>
//                 <input type="checkbox" id='edit'>
//                 <label for="edit"><i class="fa-solid fa-pen-to-square" style="color: #ffd43b;"></i></label>
//                 <input type="checkbox" id='delete' class='delete'>
//                 <label for='delete'><i class="fa-solid fa-trash" style="color:rgb(29,105,171)"></i></label>
//                 </div>
//                 </ul>
//                 `
//             });
//         }
//         appearDisplay()
//         form.addEventListener('submit', (element) => {
//             element.preventDefault()
//             let title = note.value.trim()
//             if (date.value != '' && title.length) {
//                 if (important.checked) {
//                     status = "important";
//                     listNote.addEventListener('click', (el) => {
//                         if (el.target.closest('.note-new-text')) {
//                             let listSpan = el.target.parentElement.querySelector('.span-dot')
//                             listSpan.style.background = 'green'
//                             el.target.closest('.note-new-text').style.textDecoration = 'line-through'
//                             status = 'done'
//                         }
//                     })
//                 } else {
//                     status = "common";
//                     listNote.addEventListener('click', (el) => {
//                         if (el.target.closest('.note-new-text')) {
//                             let listSpan = el.target.parentElement.querySelector('.span-dot')
//                             listSpan.style.background = 'green'
//                             el.target.closest('.note-new-text').style.textDecoration = 'line-through'
//                             status = 'done'
//                         }
//                     })
//                 }
//                 setTodo()
//                 appearDisplay()
//                 todo.push({ text: note.value, date: date.value, current, status: status })
//             }
//             else {
//                 alert('Select your date and write note!')
//                 form.reset()
//             }
//         })
//         function deleteTodo() {
//             const deleted = todo.filter((index) => { return index !== i })
//             console.log(deleted);
//             todo = deleted
//             setTodo()
//             appearDisplay()
//         };
//         let dels = document.querySelectorAll('.delete');
//         dels.forEach((del) => {
//             del.addEventListener('click', deleteTodo)
//             console.log('1');
//         });

//         i++
//     }
// }
// let instance = new Tasks()
// instance.renderTask()