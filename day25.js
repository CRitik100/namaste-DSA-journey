/**
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 */

var isPowerOfTwo = function (n) {
    if (n==0) return false;
    if (n == 1) return true;
    if (n % 2 == 0) return isPowerOfTwo(n / 2);
    return false;
};

console.log(isPowerOfTwo(0));
