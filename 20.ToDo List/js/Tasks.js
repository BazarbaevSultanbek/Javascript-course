import Utils from "./utils.js";


let listNote = document.querySelector('.list-note')


export default class Tasks {

    constructor() {
        this.tasks = new Utils().tasksFromLocalStorage()
    }

    renderTask(tasks) {
        listNote.innerHTML = ''
        tasks.forEach((item) => {
            listNote.insertAdjacentHTML("afterbegin", `
                    <li class="list-note-new" id="${item.id}">
                        <span class='span-dot' style="background: ${item.status === "important" ? "red" : "orange"}"></span>
                        <p class="note-new-text" ${item.status === "done" ? "done" : ""}">${item.text}</p>
                        <span class='note-new-date'>${item.date}</span>
                        <span><i class="fa-solid fa-pen-to-square edit" style="color: #ffd43b;"></i></span>

                        <span><i class="fa-solid fa-trash fa-beat-fade delete" style="color: #1d69ab;"></i></span> 
                    </li>
                `)
        });
    }

    deleteTasks(id) {
        let filteredTasks = this.tasks.filter((item) => item.id !== id);
        listNote.innerHTML = '';
        this.renderTask(this.tasks);
    }
}












// class Tasks {
//     renderTask() {
//         let i = 0
//         btn.addEventListener('click', (event) => {
//             event.preventDefault()
//             if (date.value != '' && note.value != '') {
//                 const newNote = `
//                 <ul class="list-note-new" id="${i}">
//                                 <li class="note-new-text">${note.value}</li>
//                                 <li class='note-new-date'>${date.value}</li>
//                                 <li>${time.getHours()}:${time.getMinutes()}</li>
//                 <div>
//                     <input type="checkbox" id='edit'>
//                     <label for="edit"><i class="fa-solid fa-pen-to-square" style="color: #ffd43b;"></i></label>
//                     <input type="checkbox" id='delete' class='delete'>
//                     <label for='delete'><i class="fa-solid fa-trash" style="color:rgb(29,105,171)"></i></label>
//                 </div>

//                 </ul>`
//                 listNote.insertAdjacentHTML('afterbegin', newNote)

//                 //delete event
//                 let noteNew = document.querySelectorAll('.list-note-new')
//                 listNote.addEventListener("click", (event) => {
//                     if (event.target.className == "delete") {
//                         let notes = Array.prototype.slice.call(noteNew);

//                         let id = event.target.closest(".list-note-new").id
//                         let filteredNotes = notes.filter((item) => item.id != id)

//                         listNote.innerHTML = ""

//                         filteredNotes.forEach(element => {
//                             listNote.appendChild(element)
//                         });


//                     }
//                 })

//                 //event values
//                 noteNew = document.querySelector('.list-note-new')
//                 let status
//                 if (important.checked == true) {
//                     noteNew.insertAdjacentHTML('afterbegin', `<span style='background:red' class='span-dot'></span>`)
//                     status = 'important'
//                 } else {
//                     noteNew.insertAdjacentHTML('afterbegin', `<span style='background:orange' class='span-dot'></span>`)
//                     status = 'usually'
//                 }
//                 const noteText = document.querySelectorAll(".note-new-text")
//                 noteText.forEach(color => {
//                     color.addEventListener('click', (element) => {
//                         if (element.target.classList.contains('note-new-text')) {
//                             let listSpan = element.target.parentElement.querySelector(".span-dot")
//                             listSpan.style.background = 'green'
//                             status = 'done'
//                         }
//                     })
//                 });
//                 let noteArr = Array.prototype.slice.call(note)
//                 let dateArr = Array.prototype.slice.call(date)
//                 addNotes(note.value, date.value, status)
//                 setTodo()
//                 i++
//             }

//             else {
//                 alert('Select your date and write note!')
//             }
//         })
//     }

// }

// let ins = new Tasks()
// ins.renderTask()
// export { Tasks }
