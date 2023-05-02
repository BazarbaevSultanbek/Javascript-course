// let block = document.querySelector(".block")


// block.style.height = "400px"
// block.style.background = "red"




// let button = document.querySelector("#change")

// button.addEventListener("click", ()=>{
//     block.style.background = "green"
// })


let block = document.querySelector('.block')

block.insertAdjacentHTML('afterbegin', "<p class='block-p'>Hello World</p>")
let text = document.querySelector('.block-p')

block.style.height = "400px",
block.style.width = "400px",
block.style.margin = '0 auto'
block.style.background = "red"
block.style.transition = '0.5s all linear'
text.style.textAlign = 'center'
text.style.fontSize = '25px'
text.style.color = 'white'

block.insertAdjacentHTML("afterend", "<button id='change'>Hello!</button>")
let button = document.querySelector('#change')


function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

button.addEventListener("click", () => {
  block.style.background = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  // if (block.style.background === 'red') {
  //   block.style.background = 'green';
  //   text.innerHTML = 'You change background color'
  // } else {
  //   block.style.background = 'red';
  // }
});



let charge = document.querySelector('.charge')
charge.style.marginTop = '50px'
charge.style.background = '#ddd'
charge.style.width = '350px'


charge.insertAdjacentHTML("afterbegin", '<div class="battery"></div>')

let battery = document.querySelector(".battery")
battery.style.marginTopop = '50px'
battery.style.width = '35px'
battery.style.height = '50px'
battery.style.background = 'green'
battery .style.transition = '0.5s all linear'

charge.insertAdjacentHTML('afterend', '<button id="imp">Improve charge</button>')
let imp = document.querySelector('#imp')
imp.addEventListener('click', () => {
  for (let i= 0; i < 350; i++){
    if (i == 350) {
      break
    } else {
      i++ 
      battery.style.width = i + 'px'  
    }
  }
})
