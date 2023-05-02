// 1)  Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'.

// let now = new Date()
// console.log(now.toLocaleDateString());

// 2) Выведите на экран текущий месяц словом, по-русски.

// let months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December'
// ]
// let date = new Date()
// let month = date.getMonth()
// console.log(months[month]);

// 3)  Выведите на экран текущий день.
//  Выведите на экран текущий месяц.
//  Выведите на экран текущий год
// Выведите на экран номер текущего дня недели

// let date  = new Date
// let month = date.getMonth()
// let year = date.getFullYear()
// let day = date.getUTCDay()
// console.log(month);
// console.log(year);
// console.log(day);

// 4)  Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014)

// let date = new Date('December 31, 2014 12:59:59') 
// console.log(date.toLocaleTimeString() + " " + date.toLocaleDateString());

// 5) В анкете заполняется информация о 5 сотрудниках:фамилия, дата заключения контракта и срок(в годах), на какой заключён контракт.Напишите сценарий,определяюший сотрудников, контракт с которыми заканчивается в выходной день.

// let arr = [
//     ['Snow', "30-12-2022", 6],
//     ['Wick', '28-11-2022', 6]
// ]
// let date  
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//         date = Date.parse(arr[i][j]) + Date.parse(arr[i][j])
//     }
// }
// console.log(Date(date))

// 6) Выведите на экран текущий день недели (словом, по-русски). Создайте для этого вспомогательную функцию showDay, которая параметром принимает число, а возвращает день недели по-русски

// let week = [
//     '',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday',
// ]
// let data = new Date()
// let run= data.getDay()
// console.log(week[run]);

// 7) Узнайте, какой был 7-го января 2015 года

// let date = new Date(2015, 0, 7)
// let week = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
// ]
// date = date.getDay()
// console.log(week[date]);

// 8) Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse

// let data = new Date()
// data = data.getTime()
// let last = Date.parse(1988-03-01)
// let run = data - last
// console.log(data);
// console.log(last);
// console.log(((run/1000)/60)/24);

// 9)  Выведите на экран количество секунд с начала дня до настоящего момента времени

// let date = new Date()
// let today = new Date('January 04, 2023 00:00:00')
// let run = date.getTime() - today.getTime()
// console.log(run/1000);

// 10) Выведите на экран количество секунд, которое осталось до конца дня.

// let date = new Date()
// let last = new Date('January 05, 2023 00:00:00')
// let run = last.getTime() - date.getTime()
// console.log(run/1000);

// 11)  Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг

// function formatDate(date) {
//     date = new Date()   
//     console.log(date.toLocaleDateString());
// }
// formatDate()

// 12) Создайте функцию в котором проверяться находиться ли дата в периоде или нет? 

// function period(time) {
//     time = new Date('2022-12-17')
//     let date1 = new Date('2022-03-01')
//     let date2 = new Date('2022-09-01')
//     if(time<date2 && time>date1){
//         console.log('Yes');
//     }else{
//         console.log('Forget about it');
//     }
// }period()

// 13) Есть дата например 31.12.2013. Реализуйте средствами языка JavaScript скрипт, который будет вычислять сколько осталось дней, месяцев, лет до этой даты.

// let future = new Date('2025-01-04T16:30:00')
// let now = new Date()
// let run = future.getTime() - now.getTime()
// console.log(((run/1000)/3600)/24);

// 14) Написать скрипт: Определение количества времени, которое прошло между двумя датами

// let date1 = new Date('February 1,2022 00:00:00')
// let date2 = new Date('April 1,2022  23:59:59')
// let run = date2.getTime() - date1.getTime()
// console.log((run/1000)/3600);

 


