/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let stack = [];
  let output = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push("(");
      if (stack.length > 1) {
        output = output + "(";
      }
    } else {
      stack.pop();
      if (stack.length >= 1) {
        output = output + ")";
      }
    }
  }
  return output;
};
