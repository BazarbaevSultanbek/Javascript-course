import { admin } from "./admin.js";
import { addAdmin } from "./admin.js";


const newDiv = document.querySelector('.list')
const logEm = document.querySelector('.list-log')
const form = document.querySelector('form')
const logPass = document.querySelector('#login-pass')
const ShowIn = document.querySelector('.show-in')
const listCookie = document.querySelector('.list-cookie')
ShowIn.addEventListener('change', () => {
    if (logPass.type === 'password') {
        logPass.type = 'text'
    } else {
        logPass.type = 'password'
    }
})

const btn = document.querySelector('.btn')
export default btn.addEventListener('click', () => {
    if (logPass.value == '' || logEm.value == '' || listCookie.checked != true) {
        alert(`You did not write password or email or you don't accept cookies ! Please check`)
        form.reset()
    } else if (logPass.value == admin[0].login && logEm.value == admin[0].password) {
        alert('You have already registered!')
    }
    else {
        addAdmin(logEm.value, logPass.value)
        
        window.location.href = "../20.ToDo List/index.html";
    }
})