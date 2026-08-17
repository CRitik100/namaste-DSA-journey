/**
 * Missing Number
 */

var missingNumber = function (nums) {
  let sum = 0;
  let reqSum = nums.length * ((1 + nums.length) / 2);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return reqSum - sum;
};

const nums = [3, 0, 1];
console.log(missingNumber(nums));
