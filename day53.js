/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase();
    let filteredData = reverseFilteredData = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/)) {
            filteredData = filteredData + s[i];
            reverseFilteredData = s[i] + reverseFilteredData;
        }
    }
    return filteredData == reverseFilteredData;
};