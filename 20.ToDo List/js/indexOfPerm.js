import { admin } from "./admin.js";
import { Admins } from "../js/utils.js";
import { Current } from "../js/utils.js";
import { Notification } from "../js/Notification.js";
import { Permission } from "../js/Permission.js"


const current = new Current().CurrentUser()
// const permission = document.querySelector('.box')box
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
            else if (addLogin.value != '' && admin.find(adminLogin => adminLogin.login != addLogin.value) && addPassword.value.length >= 8 && makeAdmin.checked == false) {
                new Permission().addAdmin({
                    canAdd: false,
                    canDelete: false,
                    canEdit: false,
                    login: addLogin.value,
                    password: addPassword.value,
                    id: Math.floor(Math.random() * 1000000)
                })
                new Notification().newNotification(box, 'New User is added', 'rgba(9, 138, 243, 0.852)')

            } else if (addLogin.value != '' && admin.find(adminLogin => adminLogin.login != addLogin.value) && addPassword.value.length >= 8 && makeAdmin.checked == true) {
                new Permission().addAdmin({
                    canAdd: true,
                    canDelete: true,
                    canEdit: true,
                    login: addLogin.value,
                    password: addPassword.value,
                    id: Math.floor(Math.random() * 1000000)
                })
                new Notification().newNotification(box, 'New User is added', 'rgba(9, 138, 243, 0.852)')
            }

    addLogin.value = ''
    addPassword.value = ''
    generator.checked = false
    ShowPassword.checked = false
    makeAdmin.checked = false
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
        const ModuleMakeAdmin = document.querySelector('#Moduleadmin')
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
            ModuleMakeAdmin.addEventListener('click', () => {
                current.forEach((item) => {
                    console.log(item.id,id);
                    if (item.id === id) {
                        item.canAdd = true,
                            item.canDelete = true,
                            item.canEdit = true
                    }
                })
                localStorage.setItem("admins", JSON.stringify(current));
            })

            let edit = new Permission().editTasks(id, moduleLogin.value, modulePassword.value)
            localStorage.setItem("admins", JSON.stringify(edit));
            let modal = document.querySelector('.module')
            modal.style.display = 'none'
            generator.checked = false
            ShowPassword.checked = false
            makeAdmin.checked = false
            // window.location.reload();
            new Notification().newNotification(box, 'User is changed', 'rgba(9, 138, 243, 0.852)')


        })
        cancel.addEventListener('click', () => {
            let modal = document.querySelector('.module')
            modal.style.display = 'none'
        })
    }

});
adminsUl.addEventListener('click', (element) => {
    if (element.target.classList.contains('delete')) {
        let id = element.target.closest('.list-admins-li').id
        new Permission().deleteAdmin(id)
        window.location.reload();
    }
})









