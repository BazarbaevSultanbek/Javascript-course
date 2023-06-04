import { admin } from "./admin.js";
import { Admins } from "../js/utils.js";
import { Current } from "../js/utils.js";
import { Notification } from "../js/Notification.js";
import { Permission } from "../js/Permission.js"


const current = new Current().CurrentUser()
//User list selectors
const adminsUl = document.querySelector('.list-admins');
const box = document.querySelector('.box')

//add new user selectors
const addLogin = document.querySelector('#login');
const addPassword = document.querySelector('#password')
const addButton = document.querySelector('.add-user')
const ShowPassword = document.querySelector('#show')
const generator = document.querySelector('#generator')
const makeAdmin = document.querySelector('#admin')

// back from site selector
const back = document.querySelector('.back')
let admins = new Admins().adminsFromLocalStorage()


addEventListener('DOMContentLoaded', () => {
    new Permission().renderAdmins(admins);
})

current.forEach((item) => {
    if (item.canAdd === true) {
        addButton.addEventListener('click', () => {

            if (addLogin.value == '' || addPassword.value == '') {
                alert('Fill in the blanks!')
            } else
                if (addLogin.value != '' && addPassword.value.length < 8) {
                    alert('You have to write at least 8 characters')
                } else
                    if (admin.find(adminData => adminData.login === addLogin.value)) {
                        alert('You have already registered!')
                    }
                    else if (addLogin.value != '' && admin.find(adminLogin => adminLogin.login != addLogin.value) && addPassword.value.length >= 8) {
                        new Permission().addAdmin({
                            login: addLogin.value,
                            password: addPassword.value,
                            id: Math.floor(Math.random() * 1000000)
                        })
                        makeAdmin.addEventListener('click', () => {
                            new Current().saveUserToLocalStorage('[]')
                            new Current().saveUserToLocalStorage(
                                ({
                                    login: addLogin.value,
                                    password: addPassword.value,
                                    id: Math.floor(Math.random() * 1000000)
                                })
                            )
                        })
                    }

            addLogin.value = ''
            addPassword.value = ''
            generator.checked = false
            ShowPassword.checked = false
            makeAdmin.checked = false
        })
    } else
        if (item.canAdd === false) {
            addButton.addEventListener('click', () => {

                if (addLogin.value == '' || addPassword.value == '') {
                    alert('Fill in the blanks!')
                } else
                    if (addLogin.value != '' && addPassword.value.length < 8) {
                        alert('You have to write at least 8 characters')
                    } else
                        if (admin.find(adminData => adminData.login === addLogin.value)) {
                            alert('You have already registered!')
                        }
                        else if (addLogin.value != '' && admin.find(adminLogin => adminLogin.login != addLogin.value) && addPassword.value.length >= 8) {
                            alert('you cannot add user!')
                        }

                addLogin.value = ''
                addPassword.value = ''
                generator.checked = false
                ShowPassword.checked = false
                makeAdmin.checked = false
            })

        }
})
back.addEventListener('click', () => {
    window.location.href = `../pages/index.html`
})
ShowPassword.addEventListener('change', () => {
    if (addPassword.type === 'password') {
        addPassword.type = 'text';
    } else {
        addPassword.type = 'password';
    }
});
generator.addEventListener('click', () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';

    for (let i = 0; i <= 8; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
    }
    addPassword.value = password
}
)
current.forEach(item => {
    if (item.canEdit === true) {
        adminsUl.addEventListener('click', (element) => {
            if (element.target.classList.contains("edit")) {
                let id = element.target.closest(".list-admins-li").id;
                let [login, password] = new Permission().getAdmins(id);
                let li = element.target.closest('.list-admins-li')
                box.insertAdjacentHTML('afterend', `
<div class="module">
    <div class="module-inner">

        <p class='module-inner-logo'>Settings</p>

    <div class="module-inner-complete">
        <label for="login">Login</label>
        <input type="text" id="login" class="module-login" value='${login}'>
    </div>

    <div class="module-inner-complete">
        <label for="password">Password</label>
        <input type="password" id="password" class="module-password" value='${password}'>
    </div>
            
    <div class="module-inner-checkbox">
                    <div>
                        <input type="checkbox" id="Modulegenerator">
                        <label for="generator">Generator</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Moduleshow">
                        <label for="show">Show Password</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Moduleadmin">
                        <label for="admin">Make admin</label>
                    </div>
    </div>
    <div class='module-inner-double'>
        <div class='inner-double-one' id='active'>
            <p>Active</p>
           
        </div>
        <div class='inner-double-one' id='available'>
            <p>Available</p>
             
        </div>
    </div>

    <div class="module-inner-button">
    <button class="module-inner-cancel">Cancel</button>
        <button class="module-inner-save">Save</button>
    </div>

    </div>
</div>
        `)
                new Permission().DragandDrop(id)

                // new Permission().addSkills() 
                const moduleLogin = document.querySelector('.module-login')
                const modulePassword = document.querySelector('.module-password')
                const ModuleShow = document.querySelector('#Moduleshow')
                const ModuleGenerator = document.querySelector('#Modulegenerator')
                const save = document.querySelector('.module-inner-save')
                const cancel = document.querySelector('.module-inner-cancel')
                ModuleShow.addEventListener('change', () => {
                    if (modulePassword.type === 'password') {
                        modulePassword.type = 'text';
                    } else {
                        modulePassword.type = 'password';
                    }
                });
                ModuleGenerator.addEventListener('click', () => {
                    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    let password = '';

                    for (let i = 0; i <= 8; i++) {
                        const randomIndex = Math.floor(Math.random() * chars.length);
                        password += chars.charAt(randomIndex);
                    }
                    modulePassword.value = password
                }
                )
                save.addEventListener('click', () => {
                    let edit = new Permission().editTasks(id, moduleLogin.value, modulePassword.value)
                    localStorage.setItem("admins", JSON.stringify(edit));
                    let modal = document.querySelector('.module')
                    modal.style.display = 'none'
                    generator.checked = false
                    ShowPassword.checked = false
                    makeAdmin.checked = false
                    window.location.reload();
                })
                cancel.addEventListener('click', () => {
                    let modal = document.querySelector('.module')
                    modal.style.display = 'none'
                })
            }

        });
    }
    else if (item.canEdit === false) {
        adminsUl.addEventListener('click', (element) => {
            if (element.target.classList.contains("edit")) {
                let id = element.target.closest(".list-admins-li").id;
                let [login, password] = new Permission().getAdmins(id);
                let li = element.target.closest('.list-admins-li')
                box.insertAdjacentHTML('afterend', `
            <div class="module">
                <div class="module-inner">
            
                    <p class='module-inner-logo'>Settings</p>
            
                <div class="module-inner-complete">
                    <label for="login">Login</label>
                    <input type="text" id="login" class="module-login" value='${login}'>
                </div>
            
                <div class="module-inner-complete">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="module-password" value='${password}'>
                </div>
                        
                <div class="module-inner-checkbox">
                                <div>
                                    <input type="checkbox" id="Modulegenerator">
                                    <label for="generator">Generator</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="Moduleshow">
                                    <label for="show">Show Password</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="Moduleadmin">
                                    <label for="admin">Make admin</label>
                                </div>
                </div>
                <div class='module-inner-double'>
                    <div class='inner-double-one' id='active'>
                        <p>Active</p>
                       
                    </div>
                    <div class='inner-double-one' id='available'>
                        <p>Available</p>
                         
                    </div>
                </div>
            
                <div class="module-inner-button">
                <button class="module-inner-cancel">Cancel</button>
                    <button class="module-inner-save">Save</button>
                </div>
            
                </div>
            </div>
                    `)
                new Permission().DragandDrop(id)


                const moduleLogin = document.querySelector('.module-login')
                const modulePassword = document.querySelector('.module-password')
                const ModuleShow = document.querySelector('#Moduleshow')
                const ModuleGenerator = document.querySelector('#Modulegenerator')
                const save = document.querySelector('.module-inner-save')
                const cancel = document.querySelector('.module-inner-cancel')


                ModuleShow.addEventListener('change', () => {
                    if (modulePassword.type === 'password') {
                        modulePassword.type = 'text';
                    } else {
                        modulePassword.type = 'password';
                    }
                });
                ModuleGenerator.addEventListener('click', () => {
                    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    let password = '';

                    for (let i = 0; i <= 8; i++) {
                        const randomIndex = Math.floor(Math.random() * chars.length);
                        password += chars.charAt(randomIndex);
                    }
                    modulePassword.value = password
                    generator.checked = false
                }
                )
                save.addEventListener('click', () => {
                    let modal = document.querySelector('.module')
                    modal.style.display = 'none'
                    generator.checked = false
                    ShowPassword.checked = false
                    makeAdmin.checked = false
                    alert('You cannot change anything!')
                })
                cancel.addEventListener('click', () => {
                    let modal = document.querySelector('.module')
                    modal.style.display = 'none'
                })
            }

        });


    }
})
current.map((item) => {
    if (item.canDelete === true) {
        adminsUl.addEventListener('click', (element) => {
            if (element.target.classList.contains('delete')) {
                let id = element.target.closest('.list-admins-li').id
                new Permission().deleteAdmin(id)
                window.location.reload();
            }
        })
    } else if (item.canDelete === false) {
        alert('You cannot delete anything')
    }
})









