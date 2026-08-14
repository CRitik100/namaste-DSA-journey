/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
 */

var reverseString = function (s) {
  let temp;
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    temp = s[s.length - 1 - i];
    s[s.length - 1 - i] = s[i];
    s[i] = temp;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
