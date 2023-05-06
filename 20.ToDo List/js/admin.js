let admin = [
    {
        login: 'admin',
        password: 'admin'
    },
    {
        login: 'Sultanbek',
        password: "Sultanbek"
    }
]

export { admin }

export function addAdmin(username, password) {
    admin.push({ login: username, password: password });
}