import Tasks from "../js/Tasks.js";
import Utils from "../js/utils.js";
import { Current } from "../js/utils.js";
import { Notification } from "../js/Notification.js";

let tasks = new Utils().tasksFromLocalStorage();
let list = document.querySelector(".list");
let listNote = document.querySelector(".list-note");
let date = document.querySelector(".header-inputs-date");
let text = document.querySelector(".header-inputs-text");
let important = document.querySelector("#header-inputs-important");
let addButton = document.querySelector("#header-inputs-btn");
const current = new Current().CurrentUser()
const notice = document.querySelector('.notice')

let logOut = document.querySelector(".list-logOut");
logOut.addEventListener("click", () => {
  window.location.href = "../login.html";
});
let MyProfile = document.querySelector(".list-profile");
MyProfile.addEventListener("click", () => {
  window.location.href = "./my-Profile.html";
});
let MyPermission = document.querySelector('.list-permission')
current.forEach((item)=>{
  if(item.isAdmin === true){
    console.log(item.isAdmin);
    MyPermission.style.display = 'block'
  }
})
MyPermission.addEventListener('click', () => {
  window.location.href = './Permission.html'
})


new Tasks().renderTask(tasks);
new Tasks().DragandDrop();


current.forEach((item) => {
  if (item.canAdd === true) {
    addButton.addEventListener("click", () => {
      if (date.value != "" && text.value != "") {
        new Tasks().addTask({
          id: Math.floor(Math.random() * 1000000),
          text: text.value,
          date: date.value,
          important: important.checked == true ? true : false,
          status: false,

        });
        window.location.reload()

      } else {
        alert("Please add date and text !");
      }
    });
  } else
    if (item.canAdd === false) {
      addButton.addEventListener("click", () => {
        if (date.value != "" && text.value != "") {
          alert('you cannot add tasks!')
          window.location.reload()
        } else {
          alert("Please add date and text !");
        }
      });

    }
})
current.forEach(item => {
  if (item.canEdit === true) {
    listNote.addEventListener("click", (e) => {
      if (e.target.classList.contains("edit")) {
        let id = e.target.closest(".list-note-new").id;
        let [text, date] = new Tasks().getTasks(id);
        listNote.insertAdjacentHTML(
          "beforeend",
          `  
        <div class='module'>
        <div class='edit-module'>
        <input type='text' class='edit-module-text' value="${text}" placeholder='Change note'>
        <input type='date' class='edit-module-date' value="${date}">
        <div class='edit-module-button'>
        <button class='btn-exit'>Exit</button>
        <button class='btn-save'>Save</button>
        </div>
        </div>        
        `
        );

        let moduleText = document.querySelector(".edit-module-text");
        let moduleDate = document.querySelector(".edit-module-date");
        let saver = document.querySelector(".btn-save");

        saver.addEventListener("click", () => {
          let edit = new Tasks().editTasks(id, moduleText.value, moduleDate.value);
          localStorage.setItem("tasks", JSON.stringify(edit));
          new Notification().newNotification(listNote, "Task is changed");
        });
      }

      if (e.target.classList.contains("btn-exit")) {
        e.target.closest(".module").style.display = "none";
      }
    });
  } else
    if (item.canEdit === false) {
      listNote.addEventListener("click", (e) => {
        if (e.target.classList.contains("edit")) {
          let id = e.target.closest(".list-note-new").id;
          let [text, date] = new Tasks().getTasks(id);
          listNote.insertAdjacentHTML(
            "beforeend",
            `  
            <div class='module'>
            <div class='edit-module'>
            <h2>You cannot change anything !</h2>
            <div class='edit-module-button'>
            <button class='btn-exit-none'>Exit</button>
            </div>
            </div>        
            `
          );
        }

        if (e.target.classList.contains("btn-exit-none")) {
          e.target.closest(".module").style.display = "none";
        }
      });
    }
})
current.map((item) => {
  if (item.canDelete === true) {
    listNote.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete")) {
        let id = e.target.closest(".list-note-new").id;
        new Tasks().deleteTasks(id);
        new Notification().newNotification(
          listNote,
          "Task is deleted",
          "rgb(29, 105, 171)"
        );
      }
    });
  } else
    if (item.canDelete === false) {
      listNote.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
          let id = e.target.closest(".list-note-new").id;
          notice.insertAdjacentHTML('afterbegin', `
            <div class="module">
              <div class="edit-module">
                <h2>You cannot delete anything !</h2>
              <div class="edit-module-button">
                <button class="btn-exit-none">Exit</button>
              </div>
              </div>
            </div>
`)
          notice.addEventListener('click', (e) => {
            if (e.target.classList.contains("btn-exit-none")) {
              e.target.closest(".module").style.display = "none";
            }
          })
        }
      })
    }
})
listNote.addEventListener("click", (e) => {
  if (e.target.classList.contains("note-new-text")) {
    let id = e.target.closest(".list-note-new").id;
    new Tasks().updateStatus(id);
  }
});
let search = document.querySelector(".list-search");
search.addEventListener("input", () => {
  new Tasks().searchNote(search.value.toLowerCase());
});
let menu = document.querySelector(".menu");
let all = document.querySelector("#All");
let processInput = document.querySelector("#Process");
let process = document.querySelector(".process");
menu.addEventListener("click", () => {
  if (processInput.checked === true) {
    list.style.display = "none";
    process.style.display = "block";
  } else if (all.checked === true) {
    process.style.display = "none";
    list.style.display = "block";
  }
});

const processStatus = document.querySelector('.process-status')
const processInfo  = document.querySelector('.process-info')
current.forEach(item => {
  if (item.canEdit === true) {
    processStatus.addEventListener('click', (e) => {
      if (e.target.classList.contains("edit")) {
        let id = e.target.closest(".process-status").id;
        let [text, date] = new Tasks().getTasks(id);
        processStatus.draggable = false
        processStatus.insertAdjacentHTML(
          "beforeend",
          `  
        <div class='module'>
        <div class='edit-module'>
        <input type='text' class='edit-module-text' value="${text}" placeholder='Change note'>
        <input type='date' class='edit-module-date' value="${date}">
        <div class='edit-module-button'>
        <button class='btn-exit'>Exit</button>
        <button class='btn-save'>Save</button>
        </div>
        </div>        
        `
        );

        let moduleText = document.querySelector(".edit-module-text");
        let moduleDate = document.querySelector(".edit-module-date");
        let saver = document.querySelector(".btn-save");

        saver.addEventListener("click", () => {
          let edit = new Tasks().editTasks(id, moduleText.value, moduleDate.value);
          localStorage.setItem("tasks", JSON.stringify(edit));
          new Notification().newNotification(processInfo, "Task is changed");
          const module = document.querySelector('.module')
          module.style.display = "none";      
          window.location.href = window.location.href
        });
      }

      if (e.target.classList.contains("btn-exit")) {
        e.target.closest(".module").style.display = "none";
      }
    });
  } else
    if (item.canEdit == false) {
      processStatus.addEventListener("click", (e) => {
        if (e.target.classList.contains("edit")) {
          processStatus.insertAdjacentHTML(
            "beforeend",
            `  
            <div class='module'>
            <div class='edit-module'>
            <h2>You cannot change anything !</h2>
            <div class='edit-module-button'>
            <button class='btn-exit-none'>Exit</button>
            </div>
            </div>        
            `
          );
        }

        if (e.target.classList.contains("btn-exit-none")) {
          e.target.closest(".module").style.display = "none";
        }
      });
    }
})
current.map((item) => {
  if (item.canDelete === true) {
    processStatus.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete")) {
        let id = e.target.closest(".process-status").id;
        new Tasks().deleteTasks(id);
        new Notification().newNotification(
          processInfo,
          "Task is deleted",
          "rgb(29, 105, 171)"
        );
        window.location.reload()
      }
    });
  } else
    if (item.canDelete === false) {
      processStatus.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
          let id = e.target.closest(".process-status").id;
          notice.insertAdjacentHTML('afterbegin', `
            <div class="module">
              <div class="edit-module">
                <h2>You cannot delete anything !</h2>
              <div class="edit-module-button">
                <button class="btn-exit-none">Exit</button>
              </div>
              </div>
            </div>
`)
          notice.addEventListener('click', (e) => {
            if (e.target.classList.contains("btn-exit-none")) {
              e.target.closest(".module").style.display = "none";
            }
          })
        }
      })
    }
})