let notes = [{
    notes: 'adaddsaadsdsa',
    date:"20/10/22022",
    status:important

}
]
export { notes }

export function addANotes(text, dateNum, cases) {
    admin.push({
        notes: text,
        date: dateNum,
        status: cases
    });
}


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