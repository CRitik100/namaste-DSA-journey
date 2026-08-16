/**
 * Move all zeroes to the end of the array
 */

var moveZeroes = function (nums) {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }
  while (pointer < nums.length) {
    nums[pointer++] = 0;
  }
};

const nums = [0, 1, 0, 3, 12];
console.log(nums);
moveZeroes(nums);
console.log(nums);
