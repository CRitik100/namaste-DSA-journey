/**
 * Insertion Sort : We check the current element with the previous elements and place it in the correct position.
 * 
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
}

let arr = [7, 4, 3, 5, 1, 2];
insertionSort(arr);
console.log(arr);
