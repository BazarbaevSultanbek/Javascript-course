import { admin } from "./admin.js"
import { Current } from "./utils.js"



const ShowIn = document.querySelector('#show-in')
ShowIn.addEventListener('change', event=>{
    if (logPass.type === 'password') {
        logPass.type = 'text'
    } else {
        logPass.type = 'password'
    }
})


const login = document.querySelector('.list-log')
const logPass = document.querySelector('#login-pass')
const btn = document.querySelector('.btn')

let i = 0
btn.addEventListener('click', () => {
    if (login.value == "" || logPass.value == "") {
        alert(`You did not write password or email! Please check`)
    } else if (login.value != "" || logPass.value != "") {
        if (login.value == admin[i].login && logPass.value == admin[i].password) {
            let user = [{
                login: admin[i].login,
                password: admin[i].password,
                id: admin[i].id,
                canAdd:admin[i].canAdd,
                canDelete:admin[i].canDelete,
                canEdit:admin[i].canEdit
            }]
            new Current().saveUserToLocalStorage(user)
            alert(`Welcome, ${admin[i].login}!`)
            window.location.href = "../20.ToDo List/pages/index.html";

        }else if(login.value != admin.login || logPass.value != admin.password){
            alert("Wrong login or password")
        }
    }
})  