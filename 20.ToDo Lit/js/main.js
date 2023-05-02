const list = document.querySelector('.list')
list.insertAdjacentHTML('beforebegin',
`<div class='header'>
<p>Tasks</p>
<div class='header-add'>
<input type='date' class='list-add-date'> 
<input type='text' class='list-add-text'>
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
<i class="fa-regular fa-rectangle-list fa-beat"></i>
    <label for="All" class='lab-all'>All</label>
    <label for="Process" class='lab-pro'>Process</label>
    </div>`
)
list.innerHTML = `   
<div class="list-radio">
<input type='text' class='list-search' placeholder='Search'>
</div>



`