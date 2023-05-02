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
</div>
`


const btn = document.querySelector('#btn-note')
const date = document.querySelector('.list-add-date')
const note = document.querySelector('.list-add-text')
btn.addEventListener('click', () => {
    if (date.value != "" && note.value != "") {
        list.innerHTML = `
        <div class="list-radio">
    <input type='text' class='list-search' placeholder='Search'>
    </div>  
   <div class='list-note'>
   <p>${date.value}</p>
   <p>${note.value}</p>
   <button id='foot'>dasdsadsa</button>
   </div>
        `
    } else if (date.value == "" && note.value != "") {
        alert('Select date')
    } else if (date.value != "" && note.value == "") {
        alert('write a note')
    } else {
        alert('select date and write note!')
    }
})
