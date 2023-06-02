export class Admins {
    saveAdminsToLocalStorage(admins) {
        localStorage.setItem('admins', JSON.stringify(admins));
    }

    adminsFromLocalStorage() {
        let admins = JSON.parse(localStorage.getItem('admins') || '[]');
        return admins;
    }
}


export default class Utils {
    tasksFromLocalStorage() {
        let todos = JSON.parse(localStorage.getItem('tasks') || '[]');
        return todos
    }
}