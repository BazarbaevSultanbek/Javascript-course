import { Admins } from "./utils.js";

let admin = new Admins().adminsFromLocalStorage(); 

if (admin.length === 0) {
  admin = [
    {
      login: 'admin',
      password: 'admin'
    },
    {
      login: 'Sultanbek',
      password: "Sultanbek"
    }
  ];
  new Admins().saveAdminsToLocalStorage(admin);
}

export function addAdmin(username, password) {
  admin.push({ login: username, password: password });
  new Admins().saveAdminsToLocalStorage(admin); 
}

export { admin };



