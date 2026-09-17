/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let reversedString_1 = "";
  if (s.length < k) {
    return s;
  }
  for (let i = k - 1; i >= 0; i--) {
    reversedString_1 += s[i];
  }
  if (s.length < 2 * k) {
    return reversedString_1 + s.slice(k);
  } else {
    return reversedString_1 + s.slice(k, 2 * k) + reverseStr(s.slice(2 * k));
  }
};
