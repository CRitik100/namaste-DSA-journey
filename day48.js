/**
 * Find Words Containing Character
 */
var findWordsContaining = function (words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) res.push(i);
  }
  return res;
};

let words = ["leet", "code"];
let x = "e";

console.log(findWordsContaining(words, x));
