/**
 * Binary Search.
 */

var search = function (nums, target) {
  let start = 0;
  let end = nums.length-1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    }
  }
  return -1;
};

let nums = [1, 2, 3, 4, 6, 7, 8, 9, 10];
let target = -15;

console.log(search(nums, target));
