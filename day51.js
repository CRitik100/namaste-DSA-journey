/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    const data = {
        R: 0,
        L: 0
    }
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        data[s[i]] = data[s[i]] + 1;
        if (data.R == data.L) {
            count++;
            data.R = 0;
            data.L = 0;
        }
    }
    return count;
};