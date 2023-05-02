"use strict"

import {
    messages
} from './main.js';

messages.splice(0, 3, { text: 'Hello', from: 'Eida:' }, { text: 'Damn', from: 'Allie:' }, { text: 'Holy', from: 'Scar:' })
const messagesCopy = [...messages];

const list = document.querySelector('.list')

for (let i = 0; i < 3; i++) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.id = `item-${i}`;
    listItem.style.listStyle = 'none'

    const message = messagesCopy.shift();
    const messageText = `${message.from} <p id='doc'>${message.text}</p>`;
    const deleteButton = '<button class="btn-del">X</button>';
    const Time = `<p id='date'></p>`

    listItem.innerHTML = `<span class='span'>${messageText}${deleteButton}${Time}</span>`;

    list.appendChild(listItem);
}

list.addEventListener('click', event => {
    if (event.target.classList.contains('btn-del')) {
        const item = event.target.closest('.list-item');
        item.remove();
    }
});




//style
let tit = document.querySelector('h1')
tit.style.marginBottom = '35px'
tit.style.margin = '15px auto 35px 50px'
tit.style.fontFamily = 'cursive'
let span = document.querySelectorAll('.span')
let arr = Array.prototype.slice.call(span)
arr.map((item) => {
    item.style.fontSize = '18px'
    item.style.fontFamily = 'cursive'
    item.style.display = 'flex'
    item.style.width = '350px'

})
let btn = document.querySelectorAll('.btn-del')
let del = Array.prototype.slice.call(btn)
del.map((item) => {
    item.style.marginLeft = '80px'
    item.style.width = '25px'
    item.style.height = '25px'
    item.style.border = 'none'
    item.style.background = 'inherit'
})

let doc = document.querySelectorAll('#doc')
let text = Array.prototype.slice.call(doc)
text.map((item)=>{
    item.style.background = 'rgb(111, 255, 196)'
    item.style.padding = '5px 55px 5px 15px'
    item.style.marginTop = '10%'
    item.style.borderRadius = '5px'
})
list.style.paddingTop= '50px'
list.style.background = '#ddd'
list.style.width = ' 350px'
list.style.height = '350px'
list.style.margin = '50px auto'


let date = new Date()
let hour = date.getHours()
let minute = date.getMinutes()
let time = hour + ':' + minute
let data = document.querySelectorAll('#date')
let put = Array.prototype.slice.call(data)
put.map((item)=>{
    item.innerHTML = time
    item.style.fontSize = '10px'
    item.style.marginTop = '55px'
    item.style.marginLeft = '-40%'
})

// const listFitem = document.querySelector('#first')
// listFitem.style.color = 'white'
// messages.map((element) => {
//     listFitem.insertAdjacentHTML('afterbegin', `<span>${element.from} <p>${element.text}</p></span> <button class='btn-del'>X</button>`)
// });

// const listSitem = document.querySelector('#second')
// listSitem.style.color = 'white'
// messages.splice(0,1,{text: 'Damn', from: 'Allie'})
// messages.map((element) => {
//     listSitem.insertAdjacentHTML('afterbegin', `<span>${element.from} <p>${element.text}</p></span> <button class='btn-del'>X</button>`)
// });

// const listTitem = document.querySelector('#third')
// listTitem.style.color = 'white'
// messages.splice(0,1,{ text: 'Holy Moly', from: 'Scar' })
// messages.map((element) => {
//     listTitem.insertAdjacentHTML('afterbegin', `<span>${element.from} <p>${element.text}</p></span> <button class='btn-del'>X</button>`)
// });




// let hp = document.querySelector('.hp')
// hp.style.textAlign = 'center'

// let image = document.querySelector('img')
// image.setAttribute('src', 'unnamed.png')
// image.style.maxWidth = '19%'
// image.style.height = 'auto'

// let block = document.querySelector(".block")
// block.style.margin = '15px auto 50px auto'
// block.style.padding = '30px 10px'
// block.style.background = '#ddd'

// let blockUser = document.querySelector('.block-user')

// blockUser.addEventListener('click', (event)=>{
//     if(event.target.className === 'btn-delete'){
//         let listItems = document.querySelectorAll(".block-user-item")
//         let listArr = Array.prototype.slice.call(listItems);

//         let id = event.target.closest(".block-user-items").id
//         let filteredArr = listArr.filter((item) => item.id != id)

//         listArr.remove()

//         // filteredArr.forEach(element => {
//         //     blockUser.appendChild(element)
//         // });
//     }

// })

// messages.splice(0, 3, { text: 'Hello', from: 'Eida' }, { text: 'Damn', from: 'Allie' }, { text: 'Holy Moly', from: 'Scar' })
// listItems.forEach((item,index) => {
//     const message = messages[index];
//     let listText = ("afterbegin", `<span id='span'>${message.from}</span> <button class='btn-delete'>x</button> <p class='text'>${message.text}</p>`);
//     item.insertAdjacentHTML('beforeend', listText);
// }

// )
// let text = document.querySelectorAll('.text')
// let arr = Array.prototype.slice.call(text)
// arr.map((element) => {
//     element.style.width = '150px'
//     element.style.padding = '3px 0px 3px 10px'
//     element.style.borderRadius = '8%'
//     element.style.background = 'rgb(135, 193, 135)'
//     element.style.fontFamily = 'sans-serif'
//     element.style.marginLeft = '15px'
//     element.style.fontSize = '18px'

// });


// let span = document.querySelectorAll('#span')
// let res = Array.prototype.slice.call(span)
// res.map((item) => {
//     item.style.color = 'blue'
//     item.style.fontSize = '25px'
//     item.style.fontFamily = 'sans-serif'
// })

// let btn = document.querySelectorAll(".btn-delete")
// let del = Array.prototype.slice.call(btn)
// del.map((item) => {
//     item.style.marginLeft = '255px'
//     item.style.fontSize = '21px'
//     item.style.border = 'none'
//     item.style.background = 'inherit'
// })







