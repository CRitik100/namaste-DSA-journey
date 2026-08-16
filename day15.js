/**
 * Merge two sored arrays into one sorted array.
 */

var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  for (let k = m + n - 1; k >= 0; k--) {
    if (nums1[i] > nums2[j] || j == -1) {
      nums1[k] = nums1[i];
      i--;
    } else if (nums1[i] <= nums2[j] || i == -1) {
      nums1[k] = nums2[j];
      j--;
    }
  }
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
console.log(nums1);
console.log(nums2);
merge(nums1, m, nums2, n);
console.log(nums1);
