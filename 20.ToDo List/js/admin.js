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

export default class Guides {
    takeAdmin() {
        let guides = JSON.parse(localStorage.getItem('guides') || [])
        return guides
    }
}

export function addGuide(guide) {
    let guides = JSON.parse(localStorage.getItem('guides') || [])
    guides.push(guide)
    localStorage.setItem('guides', JSON.stringify(guides))
}

// addGuide(admin)

