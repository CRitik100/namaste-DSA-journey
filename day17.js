/**
 * Max Consecutive Ones
 */

var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let currentCount = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] ? currentCount++ : (currentCount = 0);
    maxCount = Math.max(maxCount, currentCount);
  }
  return maxCount;
};

const nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));
