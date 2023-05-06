function  List(){
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
    <input type='text' class='list-search' placeholder='Search'>
    <div class='list-note'>
    </div>
    </div>
    `
}
export {List }


const important = document.querySelector('#header-inputs-important')
const btn = document.querySelector('#header-inputs-btn')
const date = document.querySelector('.header-inputs-date')
const note = document.querySelector('.header-inputs-text')
const listNote = document.querySelector('.list-note')
const time = new Date()
let noteNew



class Tasks {
    renderTask() {
        let i = 0
        btn.addEvenListener('click', () => {
            if (this.date != '' && this.note != '') {
                const newNote = `
                <ul class="list-note-new" id=${i}>
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

            } else if (date == "" && note != "") {
                alert('Select your date!')
            } else if (date != "" && note == "") {
                alert('Please write note!')
            } else {
                alert('Select your date and write note!')
            }
        })
    }
    importantTask() {
        if (important.checked == true) {
            noteNew.insertAdjacentHTML('afterbegin', `<span style='background:red' class='span-dot'></span>`)
        } else {
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

export { Tasks }