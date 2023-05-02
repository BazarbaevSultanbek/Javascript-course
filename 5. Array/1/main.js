//SHIFT  -  get an element from the beginning
//UNSHIFT  -  Add the element to the beginning of the array
// PUSH   -   adds an element to the end.
// POP  -  takes an element from the end.
// SPLICE(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
// SLICE(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
// CONCAT(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
// forEach(func) – calls func for every element, does not return anything.
// sort(func) – sorts the array in-place, then returns it.
// reverse() – reverses the array in-place, then returns it.
// map(func) – creates a new array from results of calling func for every element.
//UNSHIFT and SHIFT are very slow than pop and push like tortois and rabbit


// let arr = ["Apple", "Orange", "Pear"];

// for (let key in arr) {
//   alert( arr[key] ); // Apple, Orange, Pear
// }
//  STEP BY STEP WAY  BUT  NEVER USE

// for (let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
///    for (let item of arr) – the modern syntax for items only,
// for (let i in arr) – never use.
// start file 5
// 1) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// let array = ['a', 'b', 'c']
// array.push(1, 2, 3)
// console.log(array);

// 2) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// let array1 = ['a', 'b', 'c']
// let array2 = [1, 2, 3]
// let getter = []
// getter.push(array1,array2)
// console.log(getter);

// 3) Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

// let array = [1,2,3]
// array.splice(0,3,3,2,1)
// console.log(array);

// 4)  Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// let array = [1, 2, 3]
// array.push(4,5,6)
// console.log(array);

// 5) Дана квадратная матрица. Проверить, является ли она симметричной относительно главной диагонали.
// let arr = [
// [1,2,3],
// [2,2,1],
// [3,1,1]
// ]
// for (let i = 0; i < arr.length; i++) {
// for (let j = 0; j < arr.length; j++) {
//     if(arr[i][j]==arr[j][i]){
//         console.log('malkdma');
//     }else{
//         console.log('lmcp');
//     }
// }
// }
// 6)Дана квадратная матрица размером nxn. Найти минимальный элемент среди элементов, расположенных ниже главной диагонали, найти максимальный элемент, среди элементов расположенных выше побочной диагонали. Найденные минимальный и максимальный элементы поменять местами и вывести их индексы.

// let arr = [
// [25, 29, 19],
// [66, 46, 48],
// [99, 18, 26]
// ]
// let max = arr[0][0]
// let min = arr[0][0]
// for (let i = 0; i < arr.length; i++) {
// for (let j = 0; j < arr.length; j++) {
//     if (arr[i][j] > max) {
//         max = arr[i][j]
//     }
//     if (arr[i][j] < min) {
//         min = arr[i][j]
//     }
// }
// }console.log(max,min);

// 7) Найти максимальный элемент массива и его индекс (max_num   и   max_index).

// let arr = [25, 29, 19, 66, 46, 48, 99, 18, 26, 51]
// let max_num = arr[0]
// let max_index
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] > max_num) {
//     max_num = arr[i]
//     max_index = i
// }
// }
// console.log(max_index);
// console.log(max_num);

// 8) Требуется заполнить массив числами, которые вводит пользователь, и вычислить их сумму. Если пользователь вводит ноль или превышен размер массива, то запросы на ввод должны прекратиться.

// let arr = []
// let b = 0
// for (let i = 0; i <= 9; i++) {
// let a = +prompt()
// arr.push(a)

// b += a
// }
// console.log(arr);
// console.log(b);

// 9) Дан массив из 50 элементов и лежат в диапазоне от -50 до 49 включительно.  Требуется из одного массива скопировать в другой массив значения в диапазоне от -5 до 5 включительно и подсчитать их количество.

// let arr = []
// let random
// let dif = []
// for (let i = 0; i < 50; i++) {
// random = Math.floor(Math.random() * (49 + 50)) - 50;
// arr.push(random)
// } console.log(arr);
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] > -5 && arr[i] < 5) {
//     dif.push(arr[i])
// }
// } console.log(dif);

// 10) В одномерном массиве (заполнение массива случайными числами от -50 до 49) найти сумму отрицательных элементов. Если эта сумма меньше -100, то необходимо прибавить к ней минимальный положительный элемент.
// let arr = []
// let sumMin = 0
// for (let i = 0; i < 50; i++) {
// random = Math.floor(Math.random() * (49 + 50)) - 50;
// arr.push(random)
// } console.log(arr);
// let minPlus = arr[0]
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] < 0) {
//     sumMin += arr[i]
// }
// if (arr[i] >= 0) {
//     if (arr[i] < minPlus) {
//         minPlus = arr[i]
//     }
// }
// }
// console.log(sumMin);
// console.log(minPlus);
// if (sumMin < -100) {
// sumMin += minPlus
// }
// console.log(sumMin);

// 11) Дан массив из N элементов в диапазоне [100;300]. Сжать массив, оставив в нем только те элементы, сумма цифр которых четная.
// let N = 10
// let sum = 0
// let arr = []
// let tempSum = 0
// for (let i = 0; i < N; i++) {
// let a = Math.floor(Math.random() * (300 - 100 + 1)) + 100
// arr.push(a)

// for (let j = 0; j <= 2; j++) {
//     tempSum += parseInt(String(arr[i])[j])
// }

// if (tempSum % 2 == 0) {
//     sum += arr[i]
// }

// tempSum = 0

// }
// console.log(sum);
// console.log('arr ' + arr);
// let arr = []
// let random
// for (let i = 0; i < 10; i++) {
// random = Math.floor(Math.random() * (300 - 100)) + 100
// arr.push(random)
// }
// console.log(arr);
// let sum = 0
// let allSum = []
// for (let i = 0; i < arr.length; i++) {
// sum += arr[i] % 10
// arr[i] = parseInt(arr[i] / 10)
// }
// if (sum % 2 == 0) {
// console.log(arr[i] + ' sum');
// }
// 12) Заполнить массив из 10 элементов случайными числами в интервале [0..4] и определить, есть ли в нем одинаковые соседние элементы.

// let arr = []
// let random
// for (let i = 0; i < 10; i++) {
// random = Math.floor(Math.random() * (4 - 0)) + 0
// arr.push(random)
// } console.log(arr);

// for (let i = 0; i < arr.length - 1; i++) {
// if (arr[i] === arr[i + 1]) {
//     console.log("Array has identical neighboring elements");
//     break;
// }
// if (i === arr.length - 2) {
//     console.log("Array does not have identical neighboring elements");
//   }
// }

// 13) Определите в массиве A номер первого элемента, равного X.
// Определите номер первого элемента, равного X, в первой половине массива A (массив имеет чётное число элементов).
// Определите номер первого элемента, равного X, во второй половине массива A (массив имеет чётное число элементов).

// 14) Заполнить массив из 10 элементов случайными числами в интервале [-10..10] и сделать реверс отдельно для 1-ой и 2-ой половин массива.
// let arr = []
// let random
// for (let i = 0; i < 10; i++) {
// random = Math.floor(Math.random() * (10 + 10)) - 10
// arr.push(random)
// }
// console.log(arr);
// let FirstHalfarr = []
// let SecondHalfarr = []
// for (let i = 0; i <1; i++) {     
// FirstHalfarr.push(arr)
// }
// console.log(FirstHalfarr);
// console.log(arr);
// 15) Заполнить массив из 12 элементов случайными числами в интервале [-12..12] и выполнить циклический сдвиг ВПРАВО на 4 элемента.

// let arr = []
// let random
// let mas = []
// for (let i = 0; i < 12; i++) {
// random = Math.floor(Math.random() * (12 + 12)) - 12
// arr.push(random)
// }
// console.log(arr);
// mas = arr.splice(8,4)
// let add = mas.concat(arr)
// console.log(add);

// 16) Вывести элементы числового массива, которые больше, чем элементы, стоящие перед ними.
// Например, дан массив [3, 9, 8, 4, 5, 1]. Следует вывести числа 9 и 5, так как перед ними стоят соответственно числа 3 и 4, которые меньше их.

// let arr = [3, 9, 8, 4, 5, 1]
// let bef = arr[0]
// for (let i = 0; i < arr.length; i++) {
// if (bef < arr[i]) {
//     debugger
//     console.log(arr[i]);
// }
// bef = arr[i]
// }

// 17) Все элементы массива поделить на значение наибольшего элемента этого массива.

// let arr = []
// let random
// for (let i = 0; i < 5; i++) {
// random = Math.floor(Math.random() * (50 - 10) + 10)
// arr.push(random)
// }
// console.log(arr);
// let max = arr[0]
// for (let i = 0; i < arr.length; i++) {
// if (max < arr[i]) {
//     max = arr[i]
// }
// }
// console.log(max);
// for (let i = 0; i < arr.length; i++) {
// arr[i] = arr[i] / max
// }
// console.log(arr);

// 18) Найти номер и значение первого положительного элемента массива.

// let arr = []
// let random
// for (let i = 0; i < 5; i++) {
// random = Math.floor(Math.random() * (5 + 10) - 10)
// arr.push(random)
// }
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
// if(arr[i]>0){
//     console.log(arr[i],i);
//     break
// }
// }

// 19) Дан массив, содержащий положительные и отрицательные числа. Заменить все элементы массива на противоположные по знаку.
// Например, задан массив [1, -5, 0, 3, -4]. После преобразования должно получиться [-1, 5, 0, -3, 4].

// let arr = [1, -5, 0, 3, -4]
// for (let i = 0; i < arr.length; i++) {
// arr[i]*=-1
// }
// / console.log(arr);

// 20)В одномерном массиве найти минимальный и максимальный элементы. Вычислить их разность.
// Например, дан массив [3, 5,20 9, 4, 2, 6]. Максимальным числом является 9, минимальным является 2. Разность составляет 9-2=7.

// let arr = [3, 5, 20, 9, 4, 2, 6]
// let arr_max = arr[0]
// let arr_min = arr[0]
// for (let i = 0; i < arr.length; i++) {
// if(arr[i]>arr_max){
//     arr_max=arr[i]
// }
// }
// console.log(arr_max);
// for (let i = 0; i < arr.length; i++) {
// if(arr[i]<arr_min){
//     arr_min=arr[i]
// }
// }console.log(arr_min);
// arr_max-=arr_min
// console.log(arr_max);

// 21) Найти сумму тех элементов массива, которые одновременно имеют четные и отрицательные значения.
// Например, в массиве [3, -5, -2, 4, -8, 0] отрицательными четными элементами являются числа -2 и -8. Их сумма равна -10.

// let arr =[3, -5, -2, 4, -8, 0]
// let summa = 0
// for (let i = 0; i < arr.length; i++) {
// if(arr[i]<0 && arr[i]%2==0){
//     summa+=arr[i]
// }
// }
// console.log(summa);

// 22) В массиве найти минимальное значение среди элементов с нечетными индексами.

// let arr = [2, 5, 4, -8, 7]
// let min = arr[1]
// for (let i = 0; i < arr.length; i++) {
//    if(i%2 != 0){
// if (arr[i]<min) {
//     min = arr[i]
// }
//    }

// }

// console.log(min);

// 23) Дан одномерный массив. Найти среднее арифметическое его элементов. Вывести на экран только те элементы массива, которые больше найденного среднего арифметического.

// let arr = [4, 7, 5, 8, 9]
// let summa = 0
// let count = 0
// for (let i = 0; i < arr.length; i++) {
// summa+=arr[i]
// count++
// }
// summa=summa/count
// console.log(summa);
// for (let i = 0; i < arr.length; i++) {
// if(summa<arr[i]){
//     console.log(arr[i])
// }
// }

// 24) Дан массив A вещественного типа, содержащий 20 положительных и отрицательных элементов. Сформировать массив B из положительных элементов массива A, имеющих четный индекс. Найти сумму квадратов элементов нового массива.

// let arr = [1, -2, -5, 7, 6, 5, 3, 2, -1, 0, 10, 11, 12, 13, 14, 16, 17, 30, 32]
// let slash = []
// let summa = 0
// for (let i = 0; i < arr.length; i++) {
// if(i%2 !=1 && arr[i]>0){
//     slash.push(arr[i])
// }
// }
// console.log(slash);
// for (let i = 0; i < slash.length; i++) {
// summa+=slash[i]**2
// }console.log(summa);

// 25) Получить среднее арифметическое всех чётных элементов массива, стоящих на нечётных местах.

// let arr= [5, 3, 2, -1, 0, 10, 51, 1, 32, 14,]
// let summa = 0
// let count = 0
// for (let i = 0; i < arr.length; i++) {
// if(i%2 == 1 && arr[i]%2 == 0){
//     summa+=arr[i]
//     count++
// }
// }
// console.log(summa);
// summa/=count
// console.log(summa);

// 26) Даны две квадратных таблицы чисел. Требуется построить третью, каждый элемент которой равен сумме элементов, стоящих на том же месте
// в 1-й и 2-й таблицах.

// let arr = [
// [6 , 5 , 3 , 2] ,
// [11 , 0 , 7 , 9]
// ]
// let arr2 = [
// [4 , 5 , 7, 2],
// [5 , 8 , 9, 1]
// ]
// let arr3 = []
// for (let i = 0; i < 2; i++) {
// arr3.push([])
// for (let j = 0; j < 4; j++) {
//     arr3[i].push(arr[i][j] + arr2[i][j])
// }
// }
// console.log(arr3);

// 27) Однажды царь решил вознаградить одного из своих мудрецов за хорошую работу.
// Он привел его в прямоугольную комнату размром NxM, в каждой клетке
// которой лежало несколько килограммов золота. Царь разрешил мудрецу
// сделать обойти несколько клеток (переходя с клетки, где сейчас
// находится мудрец, в одну из четырех с ней соседних), и собрать все
// золото, которое попадется на его пути.
// Вам дан маршрут мудреца. Требуется определить, сколько килограммов золота он собрал.

// let arr = [
// [9, 5, 7, 6],
// [2, 5, 7, 6]
// ]
// let shag = [
// [0,1],
// [1,1],
// [0,3]
// ]
// let arr2 = []
// let summa = 0
// for (let i = 0; i < shag.length; i++) {
// arr2.push(arr[shag[i][0]][shag[i][1]])
// summa+=arr2[i]
// }
// console.log(arr2);
// console.log(summa);

// 28) Двумерный массив 5х5 заполнен нулями. Написать скрипт которая заполняет центральную колонку всеми единицами (1), а центральную строку — двойками (2). На пересечении строки и колонки стоит число 3.

// let arr = [
// [0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0]
// ]
// for (let i = 0; i < arr.length; i++) {
// for (let j = 0; j < arr.length; j++) {
//     if (i <=4 && j < 3 && j > 1) {
//         arr[i][j] = 1
//     }
//     if(i>1 && i<3 ){
//         arr[i][j]=2
//     }
//     if(i>1 && i<3 && j>1 && j<3){
//         arr[i][j] = 3
//     }

// }
// }
// console.log(arr);
// 29) Двумерный массив 5х5 заполнен нулями. Написать скипт которая заполняет левую диагональ всеми единицами (1), а правую — двойками (2). На пересечении диагоналей стоит число 3.
// 30) Двумерный массив символов 10х10 точками (".") и звездочками ("*"). Точка — белая клетка, "*" — черная. Черным нарисованы прямоугольники, которые НЕ ПЕРЕСЕКАЮТСЯ и НЕ СОПРИКАСАЮТСЯ. Одна черная клетка — тоже прямоугольник.
// Написать скрипт которая заполняет вычисляет количество прямоугольников




