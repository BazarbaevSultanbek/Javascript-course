class Tasks {
    constructor(date, note, time, important) {
        this.date = date
        this.note = note
        this.time = time
        this.important = important
    }
    renderTask(button) {
        this.button = button
        let i = 0
        this.button.addEvenListener('click', () => {
            if (this.date != '' && this.note != '') {
                const newNote = `
                <ul class="list-note-new" id=${i}>
                                <li class="note-new-text">${this.note.value}</li>
                                <li>${this.date.value}</li>
                                <li>${this.time.getHours()}:${this.time.getMinutes()}</li>    
                <div>
                    <input type="checkbox" id='edit'>
                    <label for="edit"><i class="fa-solid fa-pen-to-square" style="color: #ffd43b;"></i></label>

                    <input type="checkbox" id='delete' class='delete'>
                    <label for='delete'><i class="fa-solid fa-trash" style="color:rgb(29,105,171)"></i></label>
                </div>

                </ul>`
                listNote.insertAdjacentHTML('afterbegin', newNote)

            } else if (this.date == "" && this.note != "") {
                alert('Select your date!')
            } else if (this.date != "" && this.note == "") {
                alert('Please write note!')
            } else {
                alert('Select your date and write note!')
            }
        })
    }
    importantTask() {
        if (this.important.checked == true) {
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
    deleteTask(del) {
        this.del = del
        let listNoteNew = document.querySelectorAll('.list-note-new')
        this.del.addEventListener('click', () => {
            listNoteNew.forEach(() => {
                listNoteNew.addEventListener('click', element => {
                    if(element.target.contains('.delete')){
                        element.target.closest('.list-note-new').remove()
                        // listNote.removeChild(element.target.closest('.list-note-new'))
                    }
                })
            })
        })
    }
}

// let arr = new Tasks({
//     date: document.querySelector('.header-inputs-date')`,
//     note: '',
//     important: false,
// })