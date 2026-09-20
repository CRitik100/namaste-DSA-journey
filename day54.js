/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let start = 0;
  let end = s.length - 1;
  let isPal = true;
  while (start <= end) {
    if (!s[start].match(/[a-z0-9]/)) {
      start++;
      continue;
    } else if (!s[end].match(/[a-z0-9]/)) {
      end--;
      continue;
    }
    if (s[start].toLowerCase() == s[end].toLowerCase()) {
      start++;
      end--;
    } else {
      isPal = false;
      break;
    }
  }
  return isPal;
};
