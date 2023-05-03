const list = document.querySelector('.list')
list.insertAdjacentHTML('beforebegin',
    `<div class='header'>
<p>Tasks</p>
<div class='header-add'>
<input type='date' class='list-add-date'> 
<input type='text' class='list-add-text' placeholder='Add note'>
<button id='btn-note'>Add Note</button>
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
<input type='radio' name='radio-in' id='Process'>

    <label for="All" class='lab-all'>
    <i class="fa-regular fa-rectangle-list"></i>
    All
    </label>
    <label for="Process" class='lab-pro'>
    <i class="fa-regular fa-calendar-check"></i>
    Process
    </label>
    </div>`
)
list.innerHTML = `   
<div class="list-radio">
<input type='text' class='list-search' placeholder='Search'>
<div class='list-note'>
</div>
</div>
`


const btn = document.querySelector('#btn-note')
const date = document.querySelector('.list-add-date')
const note = document.querySelector('.list-add-text')
btn.addEventListener('click', () => {
    const listNote = document.querySelector('.list-note')

    if (date.value != "" && note.value != "") {
        const newNote = `
            <ul class="note-list">
                <li>${date.value}</li>
                <li>${note.value}</li>
                <div>
                <input type="checkbox" id='edit'>
                <label for="edit">
                <i class="fa-solid fa-pen-to-square" style="color: #ffd43b;"></i>
                </label>
                <input type="checkbox" id='delete'>
                <label for='delete'>
                <i class="fa-solid fa-trash" style="color:rgb(29,105,171)"></i>
                </label>
                </div>
            </ul>
        `
        listNote.insertAdjacentHTML('afterbegin', newNote)
    } else if (date.value == "" && note.value != "") {
        alert('Select date')
    } else if (date.value != "" && note.value == "") {
        alert('write a note')
    } else {
        alert('select date and write note!')
    }
})

