/**
 * Selection Sort
 */

function selectionSort(arr) {
  let min, temp;
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
}

let arr = [5, 55, 4, 9, 3, 5, 64, 616, 464, 1];
selectionSort(arr);
console.log(arr);
