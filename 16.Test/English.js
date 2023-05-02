const list = document.querySelector('.list');


let correct = 0;
let mistake = 0
let answer = "";

import { English } from "../16.Test/question.js";
export const Engtest = () => {
  let i = 0;

  const returnQuestion = () => {
    list.innerHTML = `
      <div class='list-test'>
        <p class='list-query'>${English[i].question}</p>
        <ul class="list-res">    
          <li><input type='radio' name='input-test' class="answer" id='a'>${English[i].answers.a}</input></li>  
          <li><input type='radio' name='input-test' class="answer" id='b'>${English[i].answers.b}</input></li>  
          <li><input type='radio' name='input-test' class="answer" id='c'>${English[i].answers.c}</input></li>  
          <li><input type='radio' name='input-test' class="answer" id='d'>${English[i].answers.d}</input></li>  
        </ul>
      </div>
      <button id='btn'>Next</button>
    `
    const answers = document.querySelector(".list-res");

    answers.addEventListener('click', (event) => {
      answer = event.target.closest(".answer").id
    });


    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
      if (English[i].correctAnswer == answer)correct++
      else mistake++
      i++;
      if (i < English.length) returnQuestion();
      else if (i == English.length) {
        list.innerHTML = `
        <div class='list-test'>
            <p class='cong'>Congratulations !</p>
            <p class='correct-answer'>Your correct answer:${correct}</p>
            <p class = 'mistake'>Your mistake:${mistake}</p>
        </div>`
      }
    });
  };

  returnQuestion();
};
