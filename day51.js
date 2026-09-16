/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let count = flag = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "L") flag++;
        else if (s[i] == "R") flag--;
        if (flag == 0) count++; 
    }
    return count;
};