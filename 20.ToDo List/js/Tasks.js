const form = document.querySelector('.form-add')
let noteNew = document.querySelector('.list-note-new')
const btn = document.querySelector('#header-inputs-btn')
const important = document.querySelector('#header-inputs-important')
const date = document.querySelector('.header-inputs-date')
const note = document.querySelector('.header-inputs-text')
const listNote = document.querySelector('.list-note')
const time = new Date()
const current = time.getHours() + ":" + time.getMinutes()

let todo = JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : []

function setTodo() {
    localStorage.setItem('tasks', JSON.stringify(todo))
}





class Tasks {
    renderTask() {
        form.addEventListener('submit', (element) => {
            element.preventDefault()
            const title = note.value.trim()
            if (date.value != '' && title.length) {
                todo.push({ text: title, date: date.value, current, status: status })
                console.log(status);
                setTodo()
                appearDisplay()
            } else {
                alert('Select your date and write note!')
                form.reset()
            }
        })

        function appearDisplay() {
            const todo = JSON.parse(localStorage.getItem('tasks'))
            listNote.innerHTML = ''
            todo.forEach((item) => {
                listNote.innerHTML += `
                <ul class="list-note-new">
                <li class="note-new-text">${item.text}</li>
                <li class='note-new-date'>${item.date}</li>
                <li>${item.current}</li>
                <div>
                <input type="checkbox" id='edit'>
                <label for="edit"><i class="fa-solid fa-pen-to-square" style="color: #ffd43b;"></i></label>
                <input type="checkbox" id='delete' class='delete'>
                <label for='delete'><i class="fa-solid fa-trash" style="color:rgb(29,105,171)"></i></label>
                </div>
                </ul>
                `
                let noteNew = document.querySelector('.list-note-new')
                let status
                if (important.checked == true) {
                    noteNew.insertAdjacentHTML('afterbegin', `<span style='background:red' class='span-dot'></span>`)
                    status = 'important'
                } else {
                    noteNew.insertAdjacentHTML('afterbegin', `<span style='background:orange' class='span-dot'></span>`)
                    status = 'usually'
                }
                const noteText = document.querySelectorAll(".note-new-text")
                noteText.forEach(color => {
                    color.addEventListener('click', (element) => {
                        if (element.target.classList.contains('note-new-text')) {
                            let listSpan = element.target.parentElement.querySelector(".span-dot")
                            listSpan.style.background = 'green'
                            status = 'done'
                        }
                    })
                });
            });
        }

    }

}
let instance = new Tasks()
instance.renderTask()



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
