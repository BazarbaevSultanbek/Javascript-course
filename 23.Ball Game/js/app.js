class TableGame {
  constructor() {
    this.table = document.querySelector('#table');
    this.RightSide = document.querySelector('#right-side');
    this.LeftSide = document.querySelector('#left-side');
    this.Ball = document.querySelector('#ball');
    this.counterRight = document.querySelector('.counter-right')
    this.counterLeft = document.querySelector('.counter-left')
    this.currentHeight = 410;
    this.step = 205;
    this.stepSecond = 205;
    this.top = 250;
    this.left = 555;
  }

  pressCommandsforRight() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowUp') {
        if (this.step > 10) {
          this.step -= 10;
          this.RightSide.style.top = this.step + 'px';
        }
      }
    })

    document.addEventListener('keydown', (event) => {
      if (this.step < this.currentHeight) {
        if (event.key === 'ArrowDown') {
          this.step += 10;
          this.RightSide.style.top = this.step + 'px';
        }
      }
    })
  }

  pressCommandsforLeft() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'w') {
        if (this.stepSecond > 10) {
          this.stepSecond -= 10;
          this.LeftSide.style.top = this.stepSecond + 'px';
        }
      }
    })
    document.addEventListener('keydown', (event) => {
      if (event.key === 's') {
        if (this.stepSecond < this.currentHeight) {
          this.stepSecond += 10;
          this.LeftSide.style.top = this.stepSecond + 'px';
        }
      }
    })
  }
  actOfBall() {
    let count = 0
    let countSecond = 0
    let sides = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
    let randomSide = Math.floor(Math.random() * 3);
    let value = sides[randomSide];

    document.addEventListener('keydown', (event) => {
      if (event.code === 'Space') {
        let interval = setInterval(() => {
          switch (value) {
            case 'topLeft':
              this.left -= 1;
              this.top -= 1;
              this.Ball.style.top = this.top + 'px';
              this.Ball.style.left = this.left + 'px';
              if (this.top === 10) {
                value = 'bottomLeft';
              } else if (this.left === 0) {
                value = 'topRight';
              }
              break;
            case 'bottomLeft':
              this.left -= 1;
              this.top += 1;
              this.Ball.style.top = this.top + 'px';
              this.Ball.style.left = this.left + 'px';
              if (this.top === 480) {
                value = 'topLeft';
              } else if (this.left === 0) {
                value = 'bottomRight';
              }
              break;
            case 'topRight':
              this.left += 1;
              this.top -= 1;
              this.Ball.style.top = this.top + 'px';
              this.Ball.style.left = this.left + 'px';
              if (this.top === 10) {
                value = 'bottomRight';
              } else if (this.left === 1130) {
                value = 'topLeft';
              }
              break;
            case 'bottomRight':
              this.left += 1;
              this.top += 1;
              this.Ball.style.top = this.top + 'px';
              this.Ball.style.left = this.left + 'px';
              if (this.top === 480) {
                value = 'topRight';
              } else if (this.left === 1130) {
                value = 'bottomLeft';
              }
              break;
          }

          if (this.left === 30 && this.stepSecond + 100 > this.top && this.top > this.stepSecond) {
            if (value === 'bottomLeft') {
              value = 'bottomRight';
            } else if (value === 'topLeft') {
              value = 'topRight';
            }
          }

          if (this.left === 1085 && this.step + 100 > this.top && this.top > this.step) {
            if (value === 'bottomRight') {
              value = 'bottomLeft';
            } else if (value === 'topRight') {
              value = 'topLeft';
            }
          }
          if (this.left === 0) {
            this.counterRight.innerHTML = `${++count}`
            console.log(count);
            clearInterval(interval)            
            setTimeout(()=>{
              this.top = 250
              this.left = 555
            },100)
          }
          if (this.left === 1130) {
            this.counterLeft.innerHTML = `${++countSecond}`
            console.log(count);
            clearInterval(interval)            
            setTimeout(()=>{
              this.top = 250
              this.left = 555
            },100)
          }
        }, 5);
      }
    });
  }

  allCaller() {
    this.pressCommandsforRight();
    this.pressCommandsforLeft()
    this.actOfBall()
  }

}
new TableGame().allCaller()


