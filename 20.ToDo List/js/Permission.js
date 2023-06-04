import { Admins } from "./utils.js";
import { Current } from "../js/utils.js";
const adminsUl = document.querySelector('.list-admins');

export class Permission {
  constructor() {
    this.admins = new Admins().adminsFromLocalStorage(); // Retrieve admins from local storage
  }
  renderAdmins(admins) {
    adminsUl.innerHTML = "";
    admins.forEach((item) => {
      adminsUl.insertAdjacentHTML('beforeend', `
        <li class='list-admins-li' id="${item.id}" canadd='${item.canAdd}',candelete='${item.canDelete}', canedit='${item.canEdit}'> 
          <span class='login-span'> ${item.login}</span>
          <div>
          <i class="fa-solid fa-user-pen edit" style="color: #098af3;"></i>
          <i class="fa-solid fa-user-xmark delete" style="color: rgba(245, 39, 39, 0.69)"></i></div>
        </li>
      `);
    });
  }
  addAdmin(newAdmin) {
    this.admins = JSON.parse(localStorage.getItem('admins') || "[]");
    this.admins.push(newAdmin);
    localStorage.setItem("admins", JSON.stringify(this.admins));
    this.renderAdmins(this.admins)
  }
  getAdmins(id) {
    let findAdmin = this.admins.filter((item) => item.id == id);
    return [findAdmin[0].login, findAdmin[0].password];
  }
  editTasks(id, login, password) {
    let findAdmin = this.admins.filter((item) => item.id == id);
    findAdmin[0].login = login;
    findAdmin[0].password = password;
    this.renderAdmins(this.admins)
    return this.admins;
  }
  deleteAdmin(id) {
    const filteredAdmin = this.admins.filter((admin) => admin.id != id)
    localStorage.setItem('admins', JSON.stringify(filteredAdmin));
    this.renderAdmins(filteredAdmin);
  }
  DragandDrop(id) {
    const active = document.querySelector('#active')
    const available = document.querySelector('#available')
    const InnerDouble = document.querySelectorAll('.inner-double-one')
    const current = new Current().CurrentUser()

    this.admins.forEach((item) => {
      if (item.id == id) {
        if (item.canAdd && item.canDelete && item.canEdit) {
          active.insertAdjacentHTML('beforeend', `
          <div class='double-two-skills'>
            <div class='skill' draggable='true'>Can add</div>
            <div class='skill' draggable='true'>Can delete</div>
            <div class='skill' draggable='true'>Can edit</div>
          </div>`)
        } else
          if (!item.canAdd && !item.canDelete && !item.canEdit) {
            available.insertAdjacentHTML('beforeend', `
          <div class='double-two-skills'>
            <div class='skill' draggable='true'>Can add</div>
            <div class='skill' draggable='true'>Can delete</div>
            <div class='skill' draggable='true'>Can edit</div>
          </div>`)
          } else
            if (!item.canAdd && item.canDelete && item.canEdit) {
              active.insertAdjacentHTML('beforeend', `
          <div class='double-two-skills'>        
            <div class='skill' draggable='true'>Can delete</div>
            <div class='skill' draggable='true'>Can edit</div>
          </div>`)
              available.insertAdjacentHTML('beforeend', `
          <div class='double-two-skills'>
            <div class='skill' draggable='true'>Can add</div>
          </div>`)
            } else
              if (item.canAdd && !item.canDelete && item.canEdit) {
                active.insertAdjacentHTML('beforeend', `
            <div class='double-two-skills'>
              <div class='skill' draggable='true'>Can add</div>
              <div class='skill' draggable='true'>Can edit</div>
            </div>`)
                available.insertAdjacentHTML('beforeend', `
            <div class='double-two-skills'>
              <div class='skill' draggable='true'>Can delete</div>
            </div>`)
              } else
                if (item.canAdd && item.canDelete && !item.canEdit) {
                  active.insertAdjacentHTML('beforeend', `
            <div class='double-two-skills'>
              <div class='skill' draggable='true'>Can add</div>
              <div class='skill' draggable='true'>Can delete</div>
            </div>`)
                  available.insertAdjacentHTML('beforeend', `
            <div class='double-two-skills'>
              <div class='skill' draggable='true'>Can edit</div>
            </div>`)
                } else
                  if (!item.canAdd && !item.canDelete && item.canEdit) {
                    active.insertAdjacentHTML('beforeend', `
                <div class='double-two-skills'>
                  <div class='skill' draggable='true'>Can edit</div>
                </div>`)
                    available.insertAdjacentHTML('beforeend', `
                <div class='double-two-skills'>
                  <div class='skill' draggable='true'>Can add</div>
                  <div class='skill' draggable='true'>Can delete</div>
                </div>`)
                  } else
                    if (item.canAdd && !item.canDelete && !item.canEdit) {
                      active.insertAdjacentHTML('beforeend', `
            <div class='double-two-skills'>
              <div class='skill' draggable='true'>Can add</div>
            </div>`)
                      available.insertAdjacentHTML('beforeend', `
            <div class='double-two-skills'>
              <div class='skill' draggable='true'>Can edit</div>
              <div class='skill' draggable='true'>Can delete</div>
            </div>`)
                    } else
                      if (!item.canAdd && item.canDelete && !item.canEdit) {
                        active.insertAdjacentHTML('beforeend', `
            <div class='double-two-skills'>
              <div class='skill' draggable='true'>Can delete</div>
            </div>`)
                        available.insertAdjacentHTML('beforeend', `
            <div class='double-two-skills'>
              <div class='skill' draggable='true'>Can add</div>
              <div class='skill' draggable='true'>Can edit</div>
            </div>`)
                      }
      }
    })


    InnerDouble.forEach((item) => {
      item.addEventListener('dragstart', (e) => {
        e.target.classList.add('dragged');
      });

      item.addEventListener('dragover', (e) => {
        e.preventDefault();
        item.classList.add('dragged-over');
      });

      item.addEventListener('dragleave', (e) => {
        item.classList.remove('dragged-over');
      });


      item.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedItem = document.querySelector('.dragged');
        e.target.appendChild(draggedItem);
        draggedItem.classList.remove('dragged')

        this.admins.forEach((item) => {
          if (item.id == id) {
            if (e.target.id === 'active') {
              if (draggedItem.textContent === 'Can add') {
                item.canAdd = true;
                current.forEach((item) => {
                  if (item.id == id) {
                    item.canAdd = true;
                  }
                })
                localStorage.setItem('admins', JSON.stringify(this.admins))
                localStorage.setItem('currentUser', JSON.stringify(current))
              }
              else if (draggedItem.textContent === 'Can edit') {
                item.canEdit = true;
                current.forEach((item) => {
                  if (item.id == id) {
                    item.canEdit = true;
                  }
                })
                localStorage.setItem('admins', JSON.stringify(this.admins))
                localStorage.setItem('currentUser', JSON.stringify(current))
              }
              else if (draggedItem.textContent === 'Can delete') {
                item.canDelete = true;
                current.forEach((item) => {
                  if (item.id == id) {
                    item.canDelete = true;
                  }
                })
                localStorage.setItem('admins', JSON.stringify(this.admins))
                localStorage.setItem('currentUser', JSON.stringify(current))
              }
            }
            else if (e.target.id === 'available') {
              if (draggedItem.textContent === 'Can add') {
                item.canAdd = false;
                current.forEach((item) => {
                  if (item.id == id) {
                    item.canAdd = false;
                  }
                })
                localStorage.setItem('admins', JSON.stringify(this.admins))
                localStorage.setItem('currentUser', JSON.stringify(current))
              }
              else if (draggedItem.textContent === 'Can edit') {
                item.canEdit = false;
                current.forEach((item) => {
                  if (item.id == id) {
                    item.canEdit = false;
                  }
                })
                localStorage.setItem('admins', JSON.stringify(this.admins))
                localStorage.setItem('currentUser', JSON.stringify(current))
              }
              else if (draggedItem.textContent === 'Can delete') {
                item.canDelete = false;
                current.forEach((item) => {
                  if (item.id == id) {
                    item.canDelete = false;
                  }
                })
                localStorage.setItem('admins', JSON.stringify(this.admins))
                localStorage.setItem('currentUser', JSON.stringify(current))
              }
            }
          }
        })

      });
    })
  }
}
