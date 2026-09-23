/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length != t.length) return false;
    let data = {};
    let check = {};
    for (let i = 0; i < s.length; i++) {
        if (!data[s[i]] && !check[t[i]]) {
            data[s[i]] = t[i];
            check[t[i]] = 1 ;
        }else if (data[s[i]] != t[i]) {
            return false;
        }
    }    
    return true;
};