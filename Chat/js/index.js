class Chat {
    constructor() {
        this.container = document.querySelector('.container');
        this.hour = new Date().getHours();
        this.minute = new Date().getMinutes();
        this.messageText = document.querySelector('#text-input');
        this.sendClick = null;
        
    }

    renderChat() {
        this.container.innerHTML = `
            <div class='container-messages' id='messages'>
            <ul class='all-messages'></ul>
            </div>
      
            <input type='text' id='text-input' placeholder='Message'>
            <input type='checkbox' id="send-input">
            <label for="send-input">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="h-4 w-4 m-1 md:m-0" stroke-width="2"><path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor"></path></svg>
            </label>
            <h2>CopyRight ®2023. All rights reserved.</h2>
          `;

        this.messageUl = document.querySelector('.all-messages')
        this.sendClick = document.querySelector('#send-input');
        this.messageText = document.querySelector('#text-input');

        this.sendMessage();

    }

    allClasses() {
        this.renderChat();
        this.createSocket();
    }

    createSocket() {
        this.socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");
        this.socket.addEventListener('message', (element) => {
            this.showMessage(element.data);
        });
    }
    showMessage(data) {
        const receiveText = document.createElement('li')
        receiveText.innerText = data;
        receiveText.className = 'receive'
        this.messageUl.appendChild(receiveText)
    }
    sendMessage() {
        this.sendClick.addEventListener('click', () => {
            const message = this.messageText.value.trim();
            if (message !== '') {
                if (this.socket.readyState === WebSocket.OPEN) {
                    this.socket.send(message);
                    this.showMessage(message);
                    this.messageText.value = '';
                }
            }
        });
    }
}

new Chat().allClasses()
  