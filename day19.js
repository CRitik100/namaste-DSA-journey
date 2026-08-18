/**
 * Single Number
 */

// One Way
var singleNumber = function (nums) {
  const unique = [nums[0]];
  let totalUniqueNo;
  for (let i = 1; i < nums.length; i++) {
    if (unique.length == 0) unique.push(nums[i]);
    else {
      totalUniqueNo = unique.length;
      for (let j = 0; j < totalUniqueNo; j++) {
        if (unique[j] == nums[i]) {
          unique.splice(j, 1);
          break;
        } else if (unique[j] != nums[i] && j == totalUniqueNo - 1) {
          unique.push(nums[i]);
          console.log(unique);
        }
      }
    }
  }
  return unique[0];
};

// another Way

var singleNumber2 = function (nums) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }

  for (const key in hash) {
    if (hash[key] == 1) return Number(key);
  }
};

// Another way

var singleNumber3 = function (nums) {
  const result = nums.reduce((xor, currValue) => xor ^ currValue, 0);
  return result;
};

const nums = [2, 2, 1];
console.log(singleNumber3(nums));
