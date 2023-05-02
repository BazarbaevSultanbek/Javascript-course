// 1) С клавиатуры вводится натуральное число. Найти его наибольшую цифру.
// Например, введено число 764580. Наибольшая цифра в нем 8.

// let number = 764580
// let max = 0
// let count = 0
// while (number != 0) {
// count = number % 10
// if (count >= max) max = count
// number = parseInt(number / 10)
// }
// console.log(max);

// 2) Вывести на экран ряд натуральных чисел от минимума до максимума с шагом. Например, если минимум 10,
//  максимум 35, шаг 5, то вывод должен быть таким: 10 15 20 25 30 35. Минимум, максимум и шаг указываются пользователем
// (считываются с клавиатуры).

// let min = +prompt('min')
// let max = +prompt('max')
// let step = +prompt('step')
// for (let i = 0; i < step; i++) {
// min = min + step
// if (min == max) {
//     break
// }
// console.log(min);
// }

// 3) Сформировать из введенного числа обратное по порядку входящих в него цифр и вывести на экран.
//  Например, если введено число 3486, то надо вывести число 6843.

// let number = +prompt()
// let saver = 0
// for (let i = 0; i < number; i++) {
// saver *= 10
// saver += number % 10
// number = parseInt(number / 10)
// }
// console.log(saver);

// 4) Найти сумму и произведение цифр, введенного натурального числа. Например, если введено число 325,
//  то сумма его цифр равна 10 (3+2+5), а произведение 30 (3*2*5).
// deep antonym with superficial

// let number = +prompt()
// let superficial = 0
// let deep = 1
// for (let i = 0; i < number; i++) {
// superficial += number % 10
// deep *= number % 10
// number = parseInt(number / 10)
// }
// console.log(superficial);
// console.log(deep);

// 5) Вычислить факториал введенного числа

// let number = +prompt()
// let factorial = 1
// for (let i = 1; i <= number; i++) {
// factorial*=i
// }console.log(factorial);

// 6) Найти сумму n элементов следующего ряда чисел:
// 1 -0.5 0.25 -0.125 ...
// Количество элементов (n) вводится с клавиатуры

// let number = 1
// let step = +prompt()
// for (let i = 0; i <=step; i++) {
// number *= -0.5
// console.log(number);
// }

// 7) Посчитать четные и нечетные цифры введенного натурального числа. Например, если введено число 34560,  то у него 3
// четные цифры (4, 6 и 0) и 2 нечетные (3 и 5).

// let number = +prompt()
// let even = 0
// let odd = 0
// let dev = 0
// for (let i = 0; i < number; i++) {
// dev = number % 10
// if (dev % 2 == 0) {
//     even++
// } else {
//     odd++
// }
// number = parseInt(number / 10)
// } console.log(even);
// console.log(odd);

// 8) Вывести на экран столько элементов ряда Фибоначчи, сколько указал пользователь. Например, если на ввод поступило число 6,
// то вывод должен содержать шесть первых чисел ряда Фибоначчи: 1 2 3 5 8 13.
// let number = 1
// let saver = 1
// let feb = 0
// for (let i = 0; i < 5; i++) {
// feb  = number + saver
// feb = number
// saver = feb                                                                                                                 !!!!!! it did not work
// number = saver
// number++
// console.log(feb);
// }
// 9) Написать программу, которая будет складывать, вычитать, умножать или делить два числа.
// Числа и знак операции вводятся пользователем. После выполнения вычисления программа не должна завершаться,
//  а должна запрашивать новые данные для вычислений. Завершение программы должно выполняться при вводе символа '0'
// в качестве знака операции. Если пользователь вводит неверный знак (не '0', '+', '-', '*', '/'), то программа должна
// сообщать ему об ошибке и снова запрашивать знак операции. Также сообщать пользователю о невозможности деления на ноль,
// если он ввел 0 в качестве делителя.

// let number1 = +prompt('Enter the first number:')
// let mark = prompt('Enter one this: /;*;+;-')
// let number2 = +prompt('Enter the second number:')
// let result
// if(mark == '/'){
// result = number1/number2
// console.log(result);
// }else if(mark == '*'){
// result = number1*number2
// console.log(result);
// }else if(mark == '+'){
// result = number1 + number2
// console.log(result);
// }else if(mark == '-'){
// result = number1 - number2
// console.log(result);
// }else{
// console.log('error');
// }

// 10) Необходимо суммировать все нечётные целые числа в диапазоне, который введёт пользователь с клавиатуры.

// let sum = 0
// let count = 0
// while (true) {
// let number = +prompt()
// count++
// if (number % 2 == 1){
//     sum+=number
// }
// if(count == 10) {
//     break
// }
// }
// console.log(sum);

// 11) Организовать беспрерывный ввод чисел с клавиатуры, пока пользователь не введёт 0. После ввода нуля,
// показать на экран количество чисел, которые были введены, их общую сумму и среднее арифметическое.
// Подсказка: необходимо объявить переменную-счетчик, которая будет считать количество введенных чисел, и переменную,
//  которая будет накапливать общую сумму чисел.

// let sum = 0
// let arif = 0
// while (true) {
// let number = +prompt('Enter the number:')
// console.log(number);
// sum += number
// arif = sum / 2
// if (number == 0) {
//     break
// }
// }
// console.log(sum);
// console.log(arif);

// 11) Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора

// let age = +prompt("enter the age:")
// if (age > 14 && age < 90) {
// console.log(false);
// } else {
// console.log(true);
// }

// 12) Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша
// Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

// let admin = prompt("What is your name ?")
// if (admin == 'Admin') {
// true
// let password = prompt("Enter the password:")
// if (password == 'I`m in charge') {
//     console.log('Hello');
// } else if (password == null) {
//     console.log('Cancelled');
// } else {
//     console.log('Invalid password');
// }
// } else if (admin == null || admin !='Admin') {
// false
// console.log("I don`t know you")
// }

// 13) /*
// 4.Пользователь вводит подряд 20 разных чисел(ввод осуществляется всех чисел только в 1 переменную),нужно посчитать
// сколько было инверсий. Пример:
// 5 2 5 3 6 4 8 9 2 4 1 6 8 5 4 7 9 7 1 5 = 9 инверсий, к примеру 5 2 - это инверсия то есть то число которое стоит
// слева больше того числа которое справа.
// */
// let result = 0
// for (let i = 0; i < 5; i++) {
// let number = +prompt("enter 5 number:")
// if (result < number) {
//     result = number
// }
// }
// console.log(result);
// 14) Перепишите код с использованием одной конструкции switch:

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
// case 0:
//     alert('Вы ввели число 0');
//     break;
// case 1:
//     alert('Вы ввели число 1');
//     break;
// case 2:
// case 3:
//     alert('Вы ввели число 2, a может и 3');
//     break;
// default:
//     alert('error');
//     break;
// }

// 15) Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
// alert( "You've got the Edge!" );
// break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
// alert( 'Okay we support these browsers too' );
// break;

//   default:
// alert( 'We hope that this page looks ok!' );
// }

// let browser = prompt('Type your browser`s name:')
// if (browser == 'Edge') {
// alert("You've got the Edge!");
// } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
// alert('Okay we support these browsers too');
// } else {
// alert('We hope that this page looks ok!');
// }

// 16)  С помощью цикла найдите сумму чисел от 1 до 100.

// let number = 0
// let sum = 0
// for (let i = 0; i <= 100; i++) {
// sum += number
// number++
// }console.log(sum);

// 17) Составьте программу, которая принимает с клавиатуры числа, пока не будет введено значение 0.
// Для каждого введенного с клавиатуры положительного числа, программа должна выводить на экран "плюс",
// для каждого отрицательного – "минус".

// let number = +prompt()
// number = (number == -1) ? alert('-') : alert('+')

// 18) Составьте программу, которая принимает с клавиатуры числа, пока не будет введено значение 99.
//     Программа должна подсчитать, сколько чисел было введено с клавиатуры (не считая значения 99)
// и вывести эту информацию на экран.

// let sum = 0
// let count = 0
// while (true) {
// let number = +prompt()
// count++
// console.log(number);
// if (number == 99) {
//     break
// }
// sum = sum + number
// }
// console.log('sum of number ' + sum);
// console.log('count of number ' + count);

// 19) Составьте программу, которая принимает с клавиатуры числа, пока их сумма остается меньше 100.
// По окончании ввода следует вывести на экран информацию о количестве введенных чисел и их сумме.

// let sum = 0
// for (let i = 0; i < 5; i++) {
// let number = +prompt()
// sum += number
// console.log(number);
// if (sum >= 100) {
//     console.log('your sum is more or equal than(with) 100');
//     break;
// }
// }
// console.log(sum);

// 20) Составьте программу, которая принимает с клавиатуры целое число, а затем выводит на экран последующие
// ему целые числа, пока сумма этих чисел не превышает квадрата введённого числа.

// 21) Составьте программу, которая принимает с клавиатуры целые числа, пока не будут введены друг за другом два одинаковых числа.
// Программа должна вывести на экран сообщение о равенстве чисел, а также сумму этих чисел.

// 22) Составьте программу, которая выводит на экран делители каждого числа от 1 до 9.

// let number = +prompt()
// for (let i = 0; i < 9; i++) {
// if(number%i == 0){
//     console.log(i);
// }
// }

// 23) Составьте программу, которая принимает с клавиатуры целое число, а затем проверяет, можно ли представить его
//  в виде суммы квадратов двух целых однозначных чисел.

//  ввод: 98 ⇒ вывод: 98 можно представить в виде суммы квадратов 7 и 7)


// 24) Составьте программу, которая принимает с клавиатуры количество очков, полученых в соревнованиях
// по стрельбе каждым из 10 учеников класса, и выводит на экран лучший результат.

//  ввод: 92, 75, 83, 82, 96, 81, 88, 76, 93, 78 ⇒ вывод: лучший результат - 96 очков)

// let max = 0
// for (let i = 0; i < 5; i++) {
// let results = +prompt('Type results')
// if (max < results) {
//     max = results
// }
// }
// console.log(max);

// 25) Составьте программу, которая принимает с клавиатуры целое число и, если оно соответствует оценке ученика, выводит
//  на экран соответствующую «текстовую форму оценки»
// (1 или 2 – «неудовлетворительно», 3 – «удовлетворительно», 4 – «хорошо», 5 – «отлично»). В случае,
// если число не является оценкой, следует вывести на экран соответствующее текстовое сообщение.
//  ввод: 5 ⇒ вывод: отлично; ввод: 6 ⇒ вывод: это не оценка)

// let gride = +prompt()
// switch (gride) {
// case 1:
// case 2:
//     alert('unsatisfactory');
//     break;
// case 3:
//     alert('satisfactory');
//     break;
// case 4:
//     alert('good');
//     break;
// case 5:
//     alert('excellent');
//     break;
// default:
//     alert('error');
//     break;
// }

// 26) Составьте программу, которая принимает с клавиатуры целое число, соответствующее порядковому номеру месяца.
// В случае, если полученное значение равно порядковому номеру одного из месяцев, следует вывести сезон (лето, осень, зима, весна),
//  к которому относится месяц.
// В случае, если введенное значение не является порядковым номером месяца, следует вывести на экран сообщение об ошибке.

// 27)  ввод: 10 ⇒ вывод: это осень; ввод: 15 ⇒ вывод: ошибка)

// let numberOfSeasons = +prompt()
// switch (numberOfSeasons) {
// case 12:
// case 1:
// case 2:
//     alert('Winter')
//     break;
// case 3:
// case 4:
// case 5:
//     alert('Spring')
//     break;
// case 6:
// case 7:
// case 8:
//     alert('Summer')
//     break;
// case 9:
// case 10:
// case 11:
//     alert('Autumn')
//     break;
// default:
//     alert('error');
//     break;
// }

// 28) Составьте программу, которая принимает с клавиатуры целое число, соответствующее определенному часу суток,
//  и выводит на экран сообщение о его принадлежности к определённому периоду суток
// (утро: 6-9 часов, день: 10-17 часов, вечер: 18-22 часов, ночь: 23-5 часов). В случае, если введенное значение
// ошибочно, следует вывести на экран соответствующее текстовое сообщение.
//  ввод: 7 ⇒ вывод: утро; ввод: 33 ⇒ вывод: ошибка)

// let dayOfHours = +prompt()
// switch (dayOfHours) {
// case 6:
// case 7:
// case 8:
// case 9:
//     alert('morning');
//     break;
// case 10:
// case 11:
// case 12:
// case 13:
// case 14:
// case 15:
// case 16:
// case 17:
//     alert('afternoon');
//     break;
// case 18:
// case 19:
// case 20:
// case 21:
// case 22:
//     alert('evening');
//     break;
// case 23:
// case 24:
// case 00:
// case 01:
// case 02:
// case 03:
// case 04:
// case 05:
//     alert('night');
//     break;
// default:
//     alert('error')
//     break;
// }

// 29) Составьте программу, которая принимает с клавиатуры три числа и проверяет, являются ли эти числа углами одного и того же треугольника.
// По результатам проверки следует вывести на экран соответствующее текстовое сообщение.
//  ввод: 90, 30, 60 ⇒ вывод: это треугольник; ввод: 90, 0, 90 ⇒ вывод: это не треугольник)
// let numbersOfTriangle1 = +prompt('first')
// let numbersOfTriangle2 = +prompt('second')
// let numbersOfTriangle3 = +prompt('third')

// if (numbersOfTriangle1 == 90 && numbersOfTriangle2 == 30 && numbersOfTriangle3 == 60) {
// alert('it`s traingle');
// } else if (numbersOfTriangle1 == 90 && numbersOfTriangle2 == 60 && numbersOfTriangle3 == 30) {
// alert('it`s traingle');
// } else if (numbersOfTriangle1 == 30 && numbersOfTriangle2 == 90 && numbersOfTriangle3 == 60) {
// alert('it`s traingle');
// } else if (numbersOfTriangle1 == 30 && numbersOfTriangle2 == 60 && numbersOfTriangle3 == 90) {
// alert('it`s traingle');
// } else if (numbersOfTriangle1 == 60 && numbersOfTriangle2 == 30 && numbersOfTriangle3 == 90) {
// alert('it`s traingle');
// } else if (numbersOfTriangle1 == 60 && numbersOfTriangle2 == 90 && numbersOfTriangle3 == 30) {
// alert('it`s traingle');
// }else{
// alert('it is not traingle')
// }

// 30) Составьте программу, которая вводит с клавиатуры целые положительные двузначные числа до тех пор,
// пока не будет введено число, сумма цифр которого равна 7 (в этом случае выводится сообщение - "завершено").
//  ввод: 32, 54, 26, 83, 52) ⇒ вывод: завершено
// let sum = 0
// let result = 0
// let number = +prompt()
// for (let i = 0; i <= 2; i++) {
// sum = number % 10
// result += sum
// number = parseInt(number / 10)
// if (result == 7) {
//     console.log(result);
// }
// }



//THE END OF FILE 3 OF 1










