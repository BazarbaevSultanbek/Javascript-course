import { admin } from "./admin.js"
import { addAdmin } from "./admin.js"



let login = document.querySelector('#login')
let pass = document.querySelector('#password')
let confirm = document.querySelector('#confirm')
let checker = document.querySelector('#shower')
let saver = document.querySelector('.box-save')
let exit = document.querySelector('.box-exit')


checker.addEventListener('change', () => {
    if (pass.type === 'password' && confirm.type === 'password') {
        pass.type = 'text'
        confirm.type = 'text'
    } else {
        pass.type = 'password'
        confirm.type = 'password'
    }
})

saver.addEventListener('click', () => {
    if (login.value != "" && pass.value === confirm.value) {
        admin[0].login = login.value
        admin[0].password = pass.value
    }else{
        alert('fill in the blanks!')
    }
})
exit.addEventListener('click', () => {
    window.location.href = "../20.ToDo List/index.html";
})






