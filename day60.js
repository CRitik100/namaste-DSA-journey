/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let data = {};
  for (let i = 0; i < strs.length; i++) {
    let s = strs[i];
    let freqArray = new Array(26).fill(0);
    let temp = "";
    // Updating the freqArray based of char based on alphabetical position.
    for (let j = 0; j < s.length; j++) {
      let position = s[j].charCodeAt() - "a".charCodeAt();
      freqArray[position]++;
    }

    for (let k = 0; k < 26; k++) {
      temp = temp + String.fromCharCode(96 + k) + freqArray[k];
    }
    console.log(temp);
    if (!data[temp]) {
      data[temp] = [s];
    } else {
      data[temp].push(s);
    }
  }
  return [...Object.values(data)];
};
