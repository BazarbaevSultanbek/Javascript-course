// var numArray = [140000, 104, 99];
// numArray.sort((a, b) => a - b);
// console.log(numArray)\

// var items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic' },
//     { name: 'Zeros', value: 37 }
// ];
// items.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     // a должно быть равным b
//     return 0;
// });



// 1

// Пузырьковая сортировка

// var arr = filterArray(['10', true, undefined, null, 9, 15, 2]);

// console.log(bubbleSort(arr));

// function bubbleSort(arr) {
//    for (var i = 0; i < arr.length - 1; i++)
//       for (var j = i + 1; j < arr.length; j++) {
//          if (arr[i] > arr[j]) {
//             swap(arr, i, j);
//          }
//       }

//    return arr;
// }

// function swap(arr, i, j) {
//    var val = arr[i];
//    arr[i] = arr[j];
//    arr[j] = val;
// }

// function filterArray(arr) {
//    return arr.filter((val) => (typeof (val) != 'boolean' && val == Number(val))).map((val) => Number(val));
// }



//2    


// var arr = filterArray(['10', true, undefined, null, 9, 15, 2]);

// console.log(cocktailSort(arr));

// function cocktailSort(arr) {
//    var left = 0;
//    var right = arr.length - 1;
//    while (left < right) {
//       for (var i = left; i < right; i++) {
//          if (arr[i] > arr[i + 1]) {
//             swap(arr, i, i + 1);
//          }
//       }
//       right--;
      
//       for (var i = right; i > left; i--) {
//          if (arr[i] < arr[i - 1]) {
//             swap(arr, i, i - 1);
//          }
//       }
//       left++;
//    }
//    return arr;
// }

// function swap(arr, i, j) {
//    var val = arr[i];
//    arr[i] = arr[j];
//    arr[j] = val;
// }

// function filterArray(arr) {
//    return arr.filter((val) => (typeof (val) != 'boolean' && val == Number(val)))
//              .map((val) => Number(val));
// }
