import { English } from "../16.2 Test/question.js"
import { Test } from "../16.2 Test/Test.js";
import { Javascript } from "../16.2 Test/question.js";

function getIn() {
    let name = prompt('What is your name ?')
    function getres() {
        let test = prompt(`Select your test: \n   English \n   Maths`)
        if (test === 'English' || test === 'english' || test == '1') {
            let EnglishTest = new Test(English,name)
            EnglishTest.returnQuestion()
        }
        else if (test === 'Maths' || test === 'maths' || test == '2') {
            let MathTest = new Test(Javascript,name)
            MathTest.returnQuestion()
        } else if (test == null) {
            alert('you wrote nothing. Please enter information again')
        }
        else {
            alert('Something went wrong or you entered wrong option. \n Please enter information again')
            return getres()
        }
    } getres()

} getIn()