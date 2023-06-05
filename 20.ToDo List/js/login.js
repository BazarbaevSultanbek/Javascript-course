import { admin } from "./admin.js";
import { Current } from "./utils.js";

console.log(admin);

const ShowIn = document.querySelector('#show-in');
ShowIn.addEventListener('change', () => {
    if (logPass.type === 'password') {
        logPass.type = 'text';
    } else {
        logPass.type = 'password';
    }
});

const login = document.querySelector('.list-log');
const logPass = document.querySelector('#login-pass');
const btn = document.querySelector('.btn');

let i = 0;
btn.addEventListener('click', () => {
    if (login.value === "" || logPass.value === "") {
        alert(`You did not write a password or email! Please check.`);
    } else if (login.value !== "" || logPass.value !== "") {
        let found = false;
        for (let j = 0; j < admin.length; j++) {
            if (login.value === admin[j].login && logPass.value === admin[j].password) {
                let user = [{
                    login: admin[j].login,
                    password: admin[j].password,
                    id: admin[j].id,
                    canAdd: admin[j].canAdd,
                    canDelete: admin[j].canDelete,
                    canEdit: admin[j].canEdit,
                    isAdmin:admin[j].isAdmin
                }];
                new Current().saveUserToLocalStorage(user);
                alert(`Welcome, ${admin[j].login}!`);
                window.location.href = "../20.ToDo List/pages/index.html";
                found = true;
                break;
            }
        }
        if (!found) {
            alert("Wrong login or password");
        }
    }
    i++;
});
