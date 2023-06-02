import { Admins } from "./utils.js";
const adminsUl = document.querySelector('.list-admins');
let i = 1;
export  class Permission {
  constructor() {
    this.admins = new Admins().adminsFromLocalStorage(); // Retrieve admins from local storage
  }

  renderAdmins() {
    console.log(this.admins);
    adminsUl.innerHTML = "";
    this.admins.map((item) => {
      adminsUl.insertAdjacentHTML('beforeend', `
        <li class='list-admins-li'>
          <span>${i}.${item.login}</span>
          <div>
          <i class="fa-solid fa-user-pen" style="color: #098af3;"></i>
          <i class="fa-solid fa-user-xmark" style="color: rgba(245, 39, 39, 0.69)"></i></div>
        </li>
      `);
      i++;
    });
  }
}

addEventListener('DOMContentLoaded',()=>{
    const permission = new Permission();
    permission.renderAdmins();
})

