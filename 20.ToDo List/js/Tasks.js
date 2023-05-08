import { notes } from "./notes.js"
import { impNotes } from "./notes.js"
import { doneNotes } from "./notes.js"
// import { addNotes } from "./notes.js"

function List() {
    const list = document.querySelector('.list')
    list.insertAdjacentHTML('beforebegin',
        `<div class='header'>
                <p class="header-logo">Tasks</p>
                <div class='header-inputs'>
                <input type='date' class='header-inputs-date'> 
                <input type='text' class='header-inputs-text' placeholder='Add note'>
                <button id='header-inputs-btn'>Add Note</button>
                
                <label for="header-inputs-important" class="header-inputs-label">Important</label>
                <input type='checkbox' id='header-inputs-important'>
                </div>  
                <div class='header-buttons'>
                <button class='list-logOut'>LogOut</button>
                <button class='list-profile'>My profile</button>
                </div>
                </div>`
    )


    list.insertAdjacentHTML('afterend',
        `<div class='menu'>
    <input type='radio' name='radio-in' id='All'>
    <label for="All" class='menu-lab-all'><i class="fa-regular fa-rectangle-list"></i>All</label>
    
    <input type='radio' name='radio-in' id='Process'>
    <label for="Process" class='menu-lab-pro'><i class="fa-regular fa-calendar-check"></i>Process</label>
    </div>`
    )
    list.innerHTML = `   
    <div class="list-radio">
    <input type='text' class='list-search' placeholder='Search' id='search'>
    <div class='list-note'>
    </div>
    </div>
    `
}
List()
export { List }


const btn = document.querySelector('#header-inputs-btn')
const important = document.querySelector('#header-inputs-important')
const date = document.querySelector('.header-inputs-date')
const note = document.querySelector('.header-inputs-text')
const listNote = document.querySelector('.list-note')
const time = new Date()



class Tasks {
    renderTask(){
        btn.addEventListener('click', () => {
            if (date.value != '' && note.value != '') {
                const newNote = `
                <ul class="list-note-new">
                                <li class="note-new-text">${note.value}</li>
                                <li>${date.value}</li>
                                <li>${time.getHours()}:${time.getMinutes()}</li>    
                <div>
                    <input type="checkbox" id='edit'>
                    <label for="edit"><i class="fa-solid fa-pen-to-square" style="color: #ffd43b;"></i></label>

                    <input type="checkbox" id='delete' class='delete'>
                    <label for='delete'><i class="fa-solid fa-trash" style="color:rgb(29,105,171)"></i></label>
                </div>

                </ul>`
                listNote.insertAdjacentHTML('afterbegin', newNote)
                
            }
             else {
                alert('Select your date and write note!')
            }
        })
    }
    importantTask() {
        btn.addEventListener('click', () => {
            if (important.checked == true) {
                let noteNew = document.querySelector('.list-note-new')
                noteNew.insertAdjacentHTML('afterbegin', `<span style='background:red' class='span-dot'></span>`)
                
            } else if (important.checked == false) {
                let noteNew = document.querySelector('.list-note-new')
                noteNew.insertAdjacentHTML('afterbegin', `<span style='background:orange' class='span-dot'></span>`)
            
            }
            const noteText = document.querySelectorAll(".note-new-text")
            noteText.forEach(color => {
                color.addEventListener('click', (element) => {
                    if (element.target.classList.contains('note-new-text')) {
                        const listSpan = element.target.parentElement.querySelector(".span-dot")
                        listSpan.style.background = 'green'
                       
                    }
                })
            });
        })
    }
    deleteTask() {
        let listNoteNew = document.querySelectorAll('.list-note-new')
        this.del.addEventListener('click', () => {
            listNoteNew.forEach(() => {
                listNoteNew.addEventListener('click', element => {
                    if (element.target.contains('.delete')) {
                        element.target.closest('.list-note-new').remove()
                    }
                })
            })
        })
    }
}

let ins = new Tasks({})
ins.renderTask()
ins.importantTask()
// ins.deleteTask()
export { Tasks }