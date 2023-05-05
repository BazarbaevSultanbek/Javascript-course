import { List } from "./Tasks.js";
import { Tasks } from "./Tasks.js";
import { admin } from "./admin.js"

const list = document.querySelector('.list')
const listLogin = document.querySelector('.list-login')
const show = document.querySelector('#show')
const logPass = document.querySelector('#login-pass')

function myFunction() {
    if (logPass.type === 'password') {
        logPass.type = 'text'
    } else {
        logPass.type = 'password'
    }
}

let login = document.querySelector('.list-log')
const btn = document.querySelector('.btn')

btn.addEventListener('DOMContentLoaded', () => {
    if (login.value == "" || logPass.value == "") {
        alert("You wrote nothing! Please check")
    } else if (login.value != "" || logPass.value != "") {
        let arr1 = new List({})
        arr1.firstList()
        arr1.secondList()
        arr1.thirdList()
        let arr = new Tasks({})
        arr.renderTask()
        arr.importantTask()
        arr.deleteTask()
    }
})




class Login {
    constructor() { }

}