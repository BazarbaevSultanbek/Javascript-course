const form = document.querySelector('.form-add')
const noteNew = document.querySelectorAll('.list-note-new')
const important = document.querySelector('#header-inputs-important')
const date = document.querySelector('.header-inputs-date')
const note = document.querySelector('.header-inputs-text')
let listNote = document.querySelector('.list-note')
const time = new Date()
const current = time.getHours() + ":" + time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()



export let todo = JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : []
function setTodo() {
    localStorage.setItem('tasks', JSON.stringify(todo))
}


class Tasks {
    renderTask() {
        let i = 0
        let status = ''

        function appearDisplay() {
            const todo = JSON.parse(localStorage.getItem('tasks')) || []
            listNote.innerHTML = ''
            todo.forEach((item) => {
                listNote.innerHTML += `
                <ul class="list-note-new" id="${i}">
                <span class='span-dot' style="background: ${item.status === "important" ? "red" : "orange"}"></span>
                <li class="note-new-text" ${item.status === "done" ? "done" : ""}">${item.text}</li>
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
            });


        }
        appearDisplay()






        form.addEventListener('submit', (element) => {
            element.preventDefault()
            let title = note.value.trim()
            if (date.value != '' && title.length) {
                if (important.checked) {
                    status = "important";
                    listNote.addEventListener('click', (el) => {
                        if (el.target.closest('.note-new-text')) {
                            let listSpan = el.target.parentElement.querySelector('.span-dot')
                            listSpan.style.background = 'green'
                            el.target.closest('.note-new-text').style.textDecoration = 'line-through'
                            status = 'done'
                        }
                    })
                } else {
                    status = "common";
                    listNote.addEventListener('click', (el) => {
                        if (el.target.closest('.note-new-text')) {
                            let listSpan = el.target.parentElement.querySelector('.span-dot')
                            listSpan.style.background = 'green'
                            el.target.closest('.note-new-text').style.textDecoration = 'line-through'
                            status = 'done'
                        }
                    })
                }
                setTodo()
                appearDisplay()

                todo.push({ text: note.value, date: date.value, current, status: status })
            }

            else {
                alert('Select your date and write note!')
                form.reset()
            }

        })
        function deleteTodo() {
            const deleted = todo.filter((index) => { return index !== i })
            console.log(deleted);
            todo = deleted
            setTodo()
            appearDisplay()
        };
        let dels = document.querySelectorAll('.delete');
        dels.forEach((del) => {
            del.addEventListener('click', deleteTodo)
            console.log('1');
        });

        i++
    }
}
let instance = new Tasks()
instance.renderTask()
// instance.searchTask()


    // searchTask(text) {
    //     this.text = text
    //     const search = document.querySelector('.list-search')
    //     const searchBTN = document.querySelector(".search-btn")
    //     searchBTN.addEventListener('click', () => {
    //         if (search.value != '') {
    //             let lowertext = search.value.toLowerCase()
    //             let noteNewArr = Array.prototype.slice.call(noteNew)
    //             console.log(noteNewArr.value);
    //             for (let i = 0; i < listNote.length; i++) {
    //                 let textValue = note.textContent || note.innerText
    //                 if (textValue.toLowerCase().indexOF(filter) < -1) {
    //                     note[i].style.display = ""
    //                 } else {
    //                     note[i].style.display = 'none'
    //                 }
    //             }
    //         } else {
    //             alert('write something!')
    //         }
    //     })
    // }
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
