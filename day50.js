/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let data = new Map();
    let v = c = 0;
    for (let i = 0; i < s.length; i++) {
        if (data.has(s[i])) {
            data.set(s[i], data.get(s[i]) + 1);
        }
        else {
            data.set(s[i], 1);
        }
    }
    for (const [key, value] of data) {
        if (key == "a" || key == "e" || key == "i" || key == "o" || key == "u") {
            v = Math.max(v,value);
        }
        else{
            c = Math.max(c,value);
        }
    }
    return v+c;
};