export class Notification {
    newNotification(location, text, color) {
        location.insertAdjacentHTML('beforeend',
            `<div class="notification" style="background:${color}">
            <p>${text}</p>
            </div>
            `
        )
        setTimeout(function () {
            document.querySelector('.notification').remove()
        }, 3000)
    }
}