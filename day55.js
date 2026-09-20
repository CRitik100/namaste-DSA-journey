/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let largeOddNo = "";
    for (let i = num.length - 1; i >= 0; i--) {
        if (Number(num[i]) % 2 == 1) {
            largeOddNo = num.slice(0,i+1); 
            break;
        }
    }
    return largeOddNo;

};