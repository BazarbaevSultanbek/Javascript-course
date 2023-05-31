export class Notification {
    newNotification(location, text, color) {
        location.insertAdjacentHTML('beforeBegin',
            `<div class="notification" style="background:${color}">
            <p>${text}</p>
            </div>
            `
        )
        setTimeout(function () {
            document.querySelector('.notification').remove('.notification')
        }, 3000)
    }
}