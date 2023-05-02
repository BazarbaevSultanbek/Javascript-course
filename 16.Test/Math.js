const list = document.querySelector('.list');

import { Javascript } from "../16.Test/question.js";
let correct = 0;
let mistake = 0
let answer = "";
export const Mathtest = () => {
    let i = 0
    const returnQuestion = () => {
        list.innerHTML = `
            <div class='list-test'>
            <p class='list-query'>${Javascript[i].question}</p>
            <ul class="list-res">    
            <li><input type='radio' name='input-test' class="answer" id='a'>${Javascript[i].answers.a}</input></li>  
            <li><input type='radio' name='input-test' class="answer" id='b'>${Javascript[i].answers.b}</input></li>  
            <li><input type='radio' name='input-test' class="answer" id='c'>${Javascript[i].answers.c}</input></li>  
            <li><input type='radio' name='input-test' class="answer" id='d'>${Javascript[i].answers.d}</input></li>  
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
            if (Javascript[i].correctAnswer == answer) {
                correct++
            }
            else { mistake++ }
            i++;
            if (i < Javascript.length) {
                returnQuestion();
            }
            else if (i == Javascript.length) {
                list.innerHTML = `
                <div class='list-test'>
                    <p class='cong'>Congratulations !</p>
                    <p class = 'correct-answer'>Your correct answer:${correct}</p>
                    <p class = 'mistake'>Your mistake:${mistake}</p>
                </div>`
            }
        });
    }
    returnQuestion()
}