/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let data = {};
    let temp = "";
    for (let i = 0; i < strs.length; i++) {
        temp = strs[i].split("").sort().join("");
        if (data[temp]){
            data[temp].push(strs[i]);
        }
        else {
            data[temp] = [strs[i]];
        }
    }
    return [...Object.values(data)];
};