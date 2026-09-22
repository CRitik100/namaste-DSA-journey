/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;
    let data = {};
    for (let i = 0; i < s.length; i++) {
        if (!data[s[i]]) {
            data[s[i]] = 1;
        } else {
            data[s[i]]++;
        }
    }
    for (let j = 0; j < t.length; j++) {
        if (!data[t[j]] || data[t[j]] < 0) return false;
        data[t[j]]--;
    }
    return true;
};