import {Engtest} from "../16.Test/English.js";
import {Mathtest} from "../16.Test/Math.js";

let name
function getIn() {
  name = prompt('What is your name ?')
    function getres() {
        let test = prompt(`Select your test: \n   English \n   Maths`)
        if (test === 'English' || test === 'english') {
            Engtest()
        } 
        else if (test === 'Maths' || test === 'maths') {
            Mathtest()
        } else if (test == null) {
            alert('you wrote nothing. Please enter information again')
        }
        else {
            alert('Something went wrong or you entered wrong option. \n Please enter information again')
            return getres()
        }
    } getres()

} getIn()