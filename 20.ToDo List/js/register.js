import { admin, addAdmin } from "./admin.js";
import { Admins } from "./utils.js";
import { Current } from "./utils.js"

const newDiv = document.querySelector('.list');
const logEm = document.querySelector('.list-log');
const form = document.querySelector('form');
const logPass = document.querySelector('#login-pass');
const ShowIn = document.querySelector('.show-in');
const listCookie = document.querySelector('.list-cookie');
ShowIn.addEventListener('change', () => {
  if (logPass.type === 'password') {
    logPass.type = 'text';
  } else {
    logPass.type = 'password';
  }
});

const btn = document.querySelector('.btn');
export default btn.addEventListener('click', () => {
  if (logPass.value === '' || logEm.value === '' || listCookie.checked !== true) {
    alert(`You did not write password or email or you don't accept cookies! Please check`);
    form.reset();
  } else if (admin.find(adminData => adminData.login === logEm.value)) {
    alert('You have already registered!');
  } else {
    addAdmin(logEm.value, logPass.value);
    new Admins().saveAdminsToLocalStorage(admin);
    new Admins().adminsFromLocalStorage();
    let user = [{
      canAdd: false,
      canDelete: false,
      canEdit: false,
      login: logEm.value,
      password: logPass.value,
      id:id
    }]
    new Current().saveUserToLocalStorage(user)
    window.location.href = `/20.ToDo List/pages/index.html`;
  }
});
