class Game {
    constructor() {
        this.cardBackAll = document.querySelectorAll('.card-back')
        this.previousShowncard = undefined
        this.run 
        this.counter = 0
    }
    InstallIcons() {
        const icons = [
            'fa-tiktok',
            'fa-discord',
            'fa-linkedin',
            'fa-github',
            'fa-discord',
            'fa-instagram',
            'fa-github',
            'fa-internet-explorer',
            'fa-firefox-browser',
            'fa-tiktok',
            'fa-google',
            'fa-firefox-browser',
            'fa-instagram',
            'fa-google',
            'fa-internet-explorer',
            'fa-linkedin',
        ];
        for (let i = 0; i < 100000; i++) {
            this.run = icons.sort(() => Math.random() - 0.5)
        }
        this.cardBackAll.forEach((element, index) => {
            element.innerHTML = `
            <i class='fa-brands ${this.run[index]}'></i>
            `
        });
    }
    RotateCardsandChecker() {
        let card = document.querySelectorAll('.card')

        card.forEach((item) => {
            const cardFront = item.querySelector('.card-front');
            const cardBack = item.querySelector('.card-back');
            item.addEventListener('click', () => {
                item.style.transform = 'rotateY(180deg)';
                cardFront.style.opacity = '0';
                cardBack.style.display = 'block';
                cardBack.style.transform = 'rotateY(-180deg)'


                if (!item.classList.contains('show')) {
                    item.classList.add('show');
                }

                if (!this.previousShowncard) {
                    this.previousShowncard = item;
                }

                else {
                    const iconFirst = this.previousShowncard.querySelector('i').classList[1];
                    const iconSecond = item.querySelector('i').classList[1];

                    if (iconFirst != iconSecond) {
                        const temp = this.previousShowncard;
                        const showCardFront = temp.querySelector('.card-front');
                        const showCardBack = temp.querySelector('.card-back');

                        setTimeout(() => {
                            temp.classList.remove('show');
                            item.classList.remove('show');
                            item.style.transform = 'rotateY(0deg)';
                            temp.style.transform = 'rotateY(0deg)'
                            showCardFront.style.opacity = '1';
                            showCardBack.style.display = 'none';
                            cardFront.style.opacity = '1';
                            cardBack.style.display = 'none';
                        }, 1000)

                    }

                    if (iconFirst === iconSecond) {
                        this.counter++
                        if (this.counter == 8) {
                            setTimeout(() => {
                                alert('Congratulations! You win!')
                                window.location.reload()
                            }, 2000);
                        }
                    }
                    this.previousShowncard = undefined
                }
            })
        })
    }
    allProcess() {
        this.InstallIcons()
        this.RotateCardsandChecker()
    }
}
new Game().allProcess()












