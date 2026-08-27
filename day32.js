/**
 * Merge Sort.
 */

function mergeSortedArray(array_1, array_2) {
  let pointer_1 = 0;
  let pointer_2 = 0;
  let arr = [];
  while (pointer_1 < array_1.length || pointer_2 < array_2.length) {
    if (
      array_1[pointer_1] <= array_2[pointer_2] ||
      pointer_2 >= array_2.length
    ) {
      arr.push(array_1[pointer_1]);
      pointer_1++;
    } else if (
      array_1[pointer_1] > array_2[pointer_2] ||
      pointer_1 >= array_1.length
    ) {
      arr.push(array_2[pointer_2]);
      pointer_2++;
    }
  }
  return arr;
}

var sortArray = function (nums) {
  let half = Math.floor(nums.length / 2);

  if (nums.length == 1) return nums;

  let left = sortArray(nums.slice(0, half));
  let right = sortArray(nums.slice(half));

  return mergeSortedArray(left, right);
};

const arr = [5, 1, 1, 2, 0, 0];
console.log(sortArray(arr));
