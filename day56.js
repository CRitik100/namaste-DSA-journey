/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let comPref = strs[0];
  let prev = (curr = "");
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length <= comPref.length) {
      prev = comPref;
      curr = strs[i];
    } else {
      prev = strs[i];
      curr = comPref;
    }
    if (prev.startsWith(curr)) {
      comPref = curr;
    } else {
      let temp = "";
      for (let j = 0; j < curr.length; j++) {
        if (prev.startsWith(curr.slice(0, j + 1))) {
          temp = curr.slice(0, j + 1);
        } else {
          break;
        }
      }
      comPref = temp;
      if (comPref == "") return comPref;
    }
  }

  return comPref;
};
