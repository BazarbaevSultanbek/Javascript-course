import { todo } from "./Tasks.js";

let notes = []
notes.push(todo)

export { notes }



// let root = document.querySelector("#root")

// localStorage.setItem("tasks", JSON.stringify(

//     [
//         {
//             name: "Test",
//             data: "06.02.202"
//         },
//         {
//             name: "Test",
//             data: "06.02.202"
//         },
//         {
//             name: "Test",
//             data: "06.02.202"
//         }

//     ]

// ))


// let tasks = JSON.parse(localStorage.getItem("tasks"));

// tasks.map((task)=>{
//     root.insertAdjacentHTML("afterbegin",
//     `<div>
//         <h2>${task.name}</h2>
//         <span>${task.data}</span>
//     </div>`

//     )
// })