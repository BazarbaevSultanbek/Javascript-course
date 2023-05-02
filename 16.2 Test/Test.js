const list = document.querySelector('.list');
import { English } from "../16.2 Test/question.js";
import { Javascript } from "../16.2 Test/question.js";

let correct = 0;
let mistake = 0
let answer = "";
let i = 0

export class Test {
    constructor(subject,name) {
        this.subject = subject
        this.name = name
    }

    returnQuestion() {
        list.innerHTML = `
        <div class='list-test'>
        <p class='list-query'>${this.subject[i].question}</p>
        <ul class="list-res">    
          <li><input type='radio' name='input-test' class="answer" id='a'>${this.subject[i].answers.a}</input></li>  
          <li><input type='radio' name='input-test' class="answer" id='b'>${this.subject[i].answers.b}</input></li>  
          <li><input type='radio' name='input-test' class="answer" id='c'>${this.subject[i].answers.c}</input></li>  
          <li><input type='radio' name='input-test' class="answer" id='d'>${this.subject[i].answers.d}</input></li>  
        </ul>
      </div>
      <button id='btn'>Next</button>
        `
        const answers = document.querySelector(`.list-res`);

        answers.addEventListener('click', (event) => {
            answer = event.target.closest(".answer").id
        })


        const btn = document.querySelector('#btn');
        btn.addEventListener('click', () => {
            if (this.subject[i].correctAnswer === answer) correct++
            else mistake++
            if(answer === ''){
                alert('choose your answer')                
            }else if(answer != "")i++;  
            
            
            if (i < this.subject.length) {
                this.returnQuestion()
            } else if (i === this.subject.length) {
                list.innerHTML = `
                    <div class='list-test'>
                        <p class='cong'>Congratulations !</p>
                        <p class='name'>Candidate name:${this.name}</p>
                        <p class='correct-answer'>Your correct answer:${correct}</p>
                        <p class='mistake'>Your mistake:${mistake}</p>
                    </div>`
            }
        });
    }

}


// EnglishTest.returnQuestion()


// const list = document.querySelector('.list');
// import { English } from "../16.2 Test/question.js";
// import { Javascript } from "../16.2 Test/question.js";

// let correct = 0;
// let mistake = 0
// let answer = "";

// export class Test {
//     constructor(subject) {
//         this.subject = subject
//     }

    // returnQuestion() {
    //     let i = 0
    //     list.innerHTML = `
    //     <div class='list-test'>
    //     <p class='list-query'>${this.subject[i].question}</p>
    //     <ul class="list-res">    
    //       <li><input type='radio' name='input-test' class="answer" id='a'>${this.subject[i].answers.a}</input></li>  
    //       <li><input type='radio' name='input-test' class="answer" id='b'>${this.subject[i].answers.b}</input></li>  
    //       <li><input type='radio' name='input-test' class="answer" id='c'>${this.subject[i].answers.c}</input></li>  
    //       <li><input type='radio' name='input-test' class="answer" id='d'>${this.subject[i].answers.d}</input></li>  
    //     </ul>
    //   </div>
    //   <button id='btn'>Next</button>
    //     `
    //     const answers = document.querySelector(`.list-res`);

    //     answers.addEventListener('click', (event) => {
    //         answer = event.target.closest(".answer").id
    //     })
//         const btn = document.querySelector('#btn');
//         btn.addEventListener('click', () => {
//             if (this.subject[i].correctAnswer == answer) correct++
//             else mistake++
//             i++;
            
//             if (i < this.subject.length) this.returnQuestion();
//             else if (i == this.subject.length) {
//                 list.innerHTML = `
//             <div class='list-test'>
//                 <p class='cong'>Congratulations !</p>
//                 <p class='correct-answer'>Your correct answer:${correct}</p>
//                 <p class = 'mistake'>Your mistake:${mistake}</p>
//             </div>`
//             }
//         });
//     }

// }


// EnglishTest.returnQuestion()
