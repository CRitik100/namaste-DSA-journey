/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let map = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i]);
        } else if (s[i] == map[stack[stack.length - 1]]) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length == 0;
};