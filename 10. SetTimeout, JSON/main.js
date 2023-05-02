// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     spouse: null
//   };

// let json = JSON.stringify(student);

// console.log((typeof json))
// console.log(json);

// let obj = {
//     name:'Sultan',
//     surname:'Bazarbaev',
//     age:17,
//     counrty:'Uzbekistan'
// }
// let object = JSON.stringify(obj)
// console.log(object);

// let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// let user = JSON.parse(userData);
// console.log(user);


// setInterval(function(){console.log("Hello");}, 3000)

// let time
// setTimeout(function timer (now){
//     now = new Date()
//     time = setTimeout(timer, 1000)
//     document.write(now);
//     document.close();
// }, 1000)


// setTimeout(()=>{
//     clearInterval(time)
// }, 10000)

// let data =new Date()
// let options = {
//     era : 'long',
//     year:'numeric',
//     month:'long', //short
//     day:'numeric',
//     weekday:'long', //short
//     timezone:'UTC',
//     hour:'numeric',
//     minute:'numeric',
//     second:'numeric'
// }
// console.log(data.toLocaleString('ru-RU',options));

// let d = new Date()
// function formatTime(d) {
//     const day = d.getDay()
//     const month = (d.getMonth()+1).toString().padStart(2, "0")  //1 , 01
//     const year = d.getFullYear()
//     const hour = d.getHours()
//     const minute = d.getMinutes()
//     return (`${day}.${month}.${year}, ${hour}:${minute}`)
// }
// console.log(formatTime(d));

// 1) Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout.

// function printNumbers(from,to) {
//     let timerId = setInterval(function() {
//         console.log(from);
//         if(from == to){
//             clearInterval(timerId)
//         }from++
//     }, 1000);
// }printNumbers(1,5)


// function printNumbers(from, to) {
//     console.log(from);
//     if (from < to) {
//       setTimeout(printNumbers, 1000, from + 1, to);
//     }
//   }printNumbers(1,5)

// 2) В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

// Когда будет выполнена запланированная функция?

// После цикла.
// Перед циклом.
// В начале цикла.
// Что покажет alert? (Почему?)

// 3) Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };
// let obj = JSON.stringify(user)
// console.log(obj);

// 4) В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.

// Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.

// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//   place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert( JSON.stringify(meetup, function replacer(key, value) {
//   /* ваш код */
// }));

// /* в результате должно быть:
// {
//   "title":"Совещание",
//   "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
//   "place":{"number":23}
// }
// */

// 5) В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

// Когда будет выполнена запланированная функция?

// После цикла.
// Перед циклом.
// В начале цикла.
// Что покажет alert?

// let i = 0;

// setTimeout(() => alert(i), 100); // ?

// // предположим, что время выполнения этой функции >100 мс
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }

// 6) Дана JSON строка '["Коля", "Вася", "Петя"]'. Преобразуйте ее в массив JavaScript и выведите на экран элемент "Петя"

// let str = '["Коля", "Вася", "Петя"]'
// let rep  = JSON.parse(str)
// console.log(rep[2]);

// 7) Дан объект {a: 'aaa', b: 'bbb'}. Преобразуйте его в JSON.

// let str = {a: 'aaa', b: 'bbb'}
// let rep = JSON.stringify(str)
// console.log(rep);

// 8) 
//  Преобразуйте его в JSON и выведите productName и categoryName  в document отсортированном виде 
// var products = [
//     { productId: 1, productName: 'Bbb', categoryId: 1 },
//     { productId: 2, productName: 'Aaa', categoryId: 2 },
//     { productId: 3, productName: 'Zzz', categoryId: 3 },
//     { productId: 4, productName: 'Uuu', categoryId: 4 },
//     { productId: 5, productName: 'Xxx', categoryId: 5 },
//     { productId: 6, productName: 'Yyy', categoryId: 1 },
//     { productId: 7, productName: 'Rrr', categoryId: 2 },
//     { productId: 8, productName: 'Sss', categoryId: 3 },
//     { productId: 9, productName: 'Eee', categoryId: 4 },
//     { productId: 10, productName: 'Ggg', categoryId: 5 },
//     { productId: 11, productName: 'Www', categoryId: 1 },
//     { productId: 12, productName: 'Fff', categoryId: 2 },
//     { productId: 13, productName: 'Hhh', categoryId: 3 },
//     { productId: 14, productName: 'Jjj', categoryId: 4 },
//     { productId: 15, productName: 'Kkk', categoryId: 5 },
//     { productId: 16, productName: 'Iii', categoryId: 1 },
//     { productId: 17, productName: 'Mmm', categoryId: 2 },
//     { productId: 18, productName: 'Ooo', categoryId: 3 },
//     { productId: 19, productName: 'Nnn', categoryId: 4 },
//     { productId: 20, productName: 'Ttt', categoryId: 5 },
//     { productId: 21, productName: 'Vvv', categoryId: 1 },
//     { productId: 22, productName: 'Qqq', categoryId: 2 },
//     { productId: 23, productName: 'Ppp', categoryId: 3 },
//     { productId: 24, productName: 'Lll', categoryId: 4 },
//     { productId: 25, productName: 'Ddd', categoryId: 5 }
// ];

// var categories = [
//     { categoryId: 1, categoryName: 'Футболки' },
//     { categoryId: 2, categoryName: 'Майки' },
//     { categoryId: 3, categoryName: 'Носки' },
//     { categoryId: 4, categoryName: 'Джинсы' },
//     { categoryId: 5, categoryName: 'Брюки' },
// ];

// let rep = JSON.stringify(products)
// let rep2 = JSON.stringify(categories)

// function byField(fieldName) {
//     return function (a, b) {
//         if (a[fieldName] > b[fieldName]) {
//             return 1
//         } else if (a[fieldName] < b[fieldName]) {
//             return -1
//         } else {
//             return 0
//         }
//     }
// }

// console.log(products.sort(byField('productName')));
// console.log(categories.sort(byField('categoryName')));
