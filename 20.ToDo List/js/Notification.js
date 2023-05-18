export class Notification {
    newNotification(location, text) {
        location.insertAdjacentHTML('beforeend',
            `<div class="notification">
            <p>${text}</p>
            </div>
            `
        )
        setTimeout(function () {
            document.querySelector('.notification').remove()
        }, 3000)

    }
}