import Tasks from "./Tasks.js";
import Utils from "./utils.js";


let tasks = new Utils().tasksFromLocalStorage();
let listNote = document.querySelector('.list-note');
let date = document.querySelector('.header-inputs-date');
let text= document.querySelector('.header-inputs-text');
let important = document.querySelector('#header-inputs-important');
let addButton = document.querySelector('#header-inputs-btn');
let lighter = document.querySelector('.span-dot')
new Tasks().renderTask(tasks);

listNote.addEventListener("click", (e) => {
    console.log(e.target.classList.contains('delete'));
    if (e.target.classList.contains('delete')) {
        let id = e.target.closest('.list-note-new').id
        console.log(id);
        new Tasks().deleteTasks(id);

    }
})


addButton.addEventListener("click", ()=>{
    if(date.value !='' && text.value !=''){
        new Tasks().addTask({
            id: Math.floor(Math.random()*1000000), 
            text: text.value, 
            date: date.value, 
            important: important.checked == true ? true : false, 
            status: "todo"
        })
    }else{
        alert('Please add date and text !');
    }
})