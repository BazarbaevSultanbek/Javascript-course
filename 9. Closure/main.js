//Start of FIle 9
// 1) Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Например: 
// sum(1)(2) = 3
// sum(5)(-1) = 4

// function sum(a) {
//     return function(b) {
//       return a + b;
//     }
//   }
//   console.log(sum(1)(2)); 

// 2) У нас есть встроенный метод arr.filter(f) для массивов. 
// Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

// function inBetween(s, e) {
//     let arr = [1, 2, 3, 4, 5, 6];
//     console.log(arr.filter((item, index, arr)=>{
//         return item >= s && item <= e
//     }));
// }
// inBetween(3, 5)
// let arr = [1, 2, 3, 4, 5, 6];
// function inArray(arr)  {
//   return function (item) {
//     return arr.indexOf(item) != -1;
//   };
// };
// console.log(arr.filter(inArray([4, 6])));



//CHATGPT
// 1. inBetween(a, b) function:

// function inBetween(a, b) {
//   return function(x) {
//     return x >= a && x <= b;
//   };
// }

// // Example usage:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr.filter(inBetween(3, 6))); // [3, 4, 5, 6]

// // 2. inArray([...]) function:

// function inArray(arr) {
//   return function(x) {
//     return arr.includes(x);
//   };
// }

// // Example usage:
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr2.filter(inArray([1, 2, 10]))); // [1, 2]


// 3) У нас есть массив объектов, который нужно отсортировать:
// users.sort(byField('name'));
// users.sort(byField('age'));

// То есть, чтобы вместо функции, мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.

// let users = [
// {name:'Banana',age:48},
// {name:'Apple',age:46},
// {name:'Orange',age:40},
// {name:'Mango',age:72}
// ]
// function byField(a,b) {
//   return a-b
// }
// users.sort(byField('age'))

// function byField(fieldName) {
//   return function(a, b) {
//     if (a[fieldName] > b[fieldName]) {
//       return 1;
//     } else if (a[fieldName] < b[fieldName]) {
//       return -1;
//     } else {
//       return 0;
//     }
//   }
// }
//  console.log(users.sort(byField('name')));


// function byField(i) {
//   return function (a,b) {
//       if(a[i]>b[i]){
//         return 1; 
//       }else if(a[i]<b[i]){
//         return - 1
//       }else{
//         return 0
//       }
//   }
// }
// console.log(users.sort(byField('age')));

// 4) Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true, если введенная строка совпадает с паролем и faulse – если не слвпадает.

// let Password = makePassword(8768)
// function makePassword(checker) {
//   return function(arg){
//     return checker == arg
//   }
// }
// console.log(Password(41654));
// console.log(Password(8768));

// 5) Создайте замыкание: функция addition получает число n и возвращает внутреннюю функцию. Эта функция также получает число, прибавляет его к n и возвращает результат.

// function addition() {
//   let n = 0
//   return function () {
//     n++
//     console.log(n);
//   }
// }
// const fuck = addition()
// fuck()

// 6) Каков будет результат выполнения приведенного кода и почему? 

// var num = 7;

// function getNum() {
//     var num = 8;
//     function getValue() {
//         return num;
//     }
//     return getValue;
// }
// var res = getNum();
// alert( res() );

// 7) Какой результат будет выведен при очередном вызове generation и generation2? Почему?
 

// function numberGenerator() {
//   var currentNum = 2;
//   return function multNumber() {      
//     return currentNum *= currentNum;
//   };
// }

// var generation = numberGenerator();   
// var generation2 = numberGenerator();  

// alert( generation() );             
// alert( generation() );             

// alert( generation2() );            
// alert( generation2() ); 


// 8) создайте счетчик. В счетчике должно быть: 1) Метод обнуление счетчика. 2) Возможность изменять начало отчета счетчика.  











