class Game {
    constructor() {
      this.cardBackAll = document.querySelectorAll('.card-back');
      this.openedCards = [];
      this.run;
      this.counter = 0;
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
        this.run = icons.sort(() => Math.random() - 0.5);
      }
      this.cardBackAll.forEach((element, index) => {
        element.innerHTML = `
          <i class='fa-brands ${this.run[index]}'></i>
        `;
      });
    }
  
    RotateCardsandChecker() {
      let card = document.querySelectorAll('.card');
  
      card.forEach((item) => {
        const cardFront = item.querySelector('.card-front');
        const cardBack = item.querySelector('.card-back');
        item.addEventListener('click', () => {
          if (item.classList.contains('matched')) {
            return; // Ignore clicks on already matched cards
          }
  
          if (this.openedCards.length < 2 && !item.classList.contains('show')) {
            // Open the card if less than 2 cards are opened
            item.classList.add('show');
            item.style.transform = 'rotateY(180deg)';
            cardFront.style.opacity = '0';
            cardBack.style.display = 'block';
            cardBack.style.transform = 'rotateY(-180deg)';
            this.openedCards.push(item);
  
            if (this.openedCards.length === 2) {
              const iconFirst = this.openedCards[0].querySelector('i').classList[1];
              const iconSecond = this.openedCards[1].querySelector('i').classList[1];
  
              if (iconFirst === iconSecond) {
                this.openedCards.forEach((openedCard) => {
                  openedCard.classList.remove('show');
                  openedCard.classList.add('matched');
                });
                this.counter++;
                if (this.counter === 8) {
                  setTimeout(() => {
                    alert('Congratulations! You win!');
                    window.location.reload();
                  }, 2000);
                }
                this.openedCards = [];
              } else {
                setTimeout(() => {
                  this.openedCards.forEach((openedCard) => {
                    openedCard.classList.remove('show');
                    openedCard.style.transform = 'rotateY(0deg)';
                    openedCard.querySelector('.card-front').style.opacity = '1';
                    openedCard.querySelector('.card-back').style.display = 'none';
                  });
                  this.openedCards = [];
                }, 1000);
              }
            }
          }
        });
      });
    }
  
    allProcess() {
      this.InstallIcons();
      this.RotateCardsandChecker();
    }
  }
  
  new Game().allProcess();
  