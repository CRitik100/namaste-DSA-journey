/**
 * Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.
 */

var removeDuplicates = function (nums) {
  let pointer = 1;
  let temp;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[pointer - 1]) {
      temp = nums[i];
      nums[i] = nums[pointer];
      nums[pointer] = temp;
      pointer++;
    } else {
      nums[i] = null;
    }
  }
  return pointer;
};

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let result = removeDuplicates(arr);
console.log(result);
console.log(arr);
