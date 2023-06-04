import { Admins } from "./utils.js";
import { Current } from "./utils.js"
let admin = new Admins().adminsFromLocalStorage();

if (admin.length === 0) {
  admin = [
    {
      canAdd: true,
      canDelete: true,
      canEdit: true,
      login: 'admin',
      password: 'admin',
      id: 745972
    },
    {
      canAdd: false,
      canDelete: false,
      canEdit: false,
      login: 'Sultanbek',
      password: "Sultanbek",
      id: 908597
    }
  ];
  new Admins().saveAdminsToLocalStorage(admin);
}

export function addAdmin(username, password) {
  admin.push({ canAdd: false,canDelete: false,canEdit: false, login: username, password: password, id: Math.floor(Math.random() * 1000000) });
  new Admins().saveAdminsToLocalStorage(admin);
}

export { admin };



