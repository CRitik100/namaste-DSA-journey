/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    let jewelSet = new Set();
    for(let j =0; j< jewels.length ; j++){
        jewelSet.add(jewels[j]);
    }
    for (let i = 0; i < stones.length; i++) {
        if (jewelSet.has(stones[i])) count++;
    }
    return count;
};