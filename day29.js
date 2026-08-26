/**
 * Bubble Sort
 */

function bubbleSort(arr) {
  let flag;
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    flag = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }
    if (flag == false) {
      return;
    }
  }
}

let arr = [5, 55, 4, 9, 3, 5, 64, 616, 464, 1];
bubbleSort(arr);
console.log(arr);
