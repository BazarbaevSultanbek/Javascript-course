// 1)  Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

let number = +prompt()
if(number == 10){
console.log('correct');
}else{
console.log('error');
}

// 2) В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или
// четвертую).

// let number = +prompt()
// if(number>0 && number<=15){
// console.log('first part');
// }else if(number>15 && number<=30){
// console.log('second part');
// }else if(number>30 && number<=45){
// console.log('third part');
// }else if (number>45 && number<=59){
// console.log('fourth part');
// }else{
// console.log('error');
// }

// 3) выводить в модальное окно «а больше 1», если запрошенная переменная a действительно больше единицы, иначе выводить сообщение
// «а не больше 1»

// let a = +prompt()
// if (a > 1) {
// console.log(a + ' greater than 1');
// } else {
// console.log(a + ' not greater than 1');
// }

// 4)  Запрашивать у пользователя возраст (метод prompt()).
// В зависимости от введенного возраста выдавать сообщение «Вы слишком молоды» (в случае введенного значения менее 20 лет)
// или «Вы нам подходите» (в случае введенного значения более или равного 20 годам).

// let Yourage = +prompt()
// if(Yourage < 20){
// console.log('You are too young');
// }else{
// console.log('You suit us');
// }

// 5)  Запрашивать у пользователя имя (метод javascript prompt). Если имя введено, то выводить "Привет, имя!". Если пользователь
//  не ввел имя или щелкнул cancel (значение null) выводить "Привет, незнакомец!"

// let name = prompt()
// if (name != null ){
// console.log('Hello ' + name + '!');
// }else{
// console.log('Hello stranger');
// }

// 6) Написать программу, которая по паролю определяет уровень доступа сотрудника к секретной информации в базе данных.
// Доступ к базе данных имеют сотрудники, разбитые на три группы по уровням доступа. Они имеют следующие пароли:
// 9583, 1747 – выдавать сообщение "доступны модули баз А, В и С";
// 3331, 7922 - выдавать сообщение "доступны модули баз В и С";
// 9455, 8997 – выдавать сообщение "доступен модуль базы С"

// let password = +prompt("You can enter to input: 9583,1747; 3331,7922; 9455, 8997")
// if (password == 9583 || password == 1747) {
// console.log('modules of bases A, B and C are available');
// } else if (password == 3331 || password == 7922) {
// console.log('modules of bases B and C are available');
// } else if (password == 9455 || password == 8997) {
// console.log('base C module available');
// } else {
// console.log('error');
// }

// ЗАДАЧИ НА ТЕМУ ТЕРНАРНЫЙ ОПЕРАТОР:
// =====================================
// 7) В переменную str1 будет записано значение "нечетное", в случае, когда y имеет нечетное значение, и "четное" - в обратном случае.

// let str1 = +prompt()
// if (str1 % 2 == 0) {
// console.log('This number is even');
// } else {
// console.log('This number is odd');
// }

// 7.2) Дополнить код: объявлено 3 локальные переменные с использованием ключевого слова var. Необходимо в переменную max присвоить
// значение следующего тернарного оператора: если a больше b, то возвращаем a, иначе возвращаем b.

// let a = +prompt('enter the "a"')
// let b = +prompt('enter the "b"')
// if (a > b) {
// console.log(a + ' is greater than ' + b);
// } else {
// console.log(b + ' is greater than ' + a);
// }

// 7.3) Исправьте код с оператором IF на тернарный оператор:
// =====================================
// 8) Необходимо написать сценарий, определяющий площадь прямоугольного треугольника по заданным катетам (S = ab/2).
// С помощью скрипта вывести в окно браузера инкремент площади.

// let angle1 = +prompt()
// let angle2 = +prompt()
// let S = (angle1 * angle2) / 2
// console.log(S);

// 9) Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

// let number = +prompt()
// if (number > 0) {
// console.log(number + ' is greater than 0');
// } else if (number < 0) {
// console.log(number + ' is less than 0');
// } else {
// console.log(number + ' value is  0');
// }

// let age  = 17
// let accessAllowed = (age > 18) ? console.log(true) : console.log(false);