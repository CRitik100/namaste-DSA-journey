/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 */

function reverseInteger(x) {
  let rev = 0;
  let sign = 1;
  if (x < 0) {
    sign = -1;
    x = Math.abs(x);
  }
  while (x > 0) {
    let lastDigit = x % 10;
    rev = rev * 10 + lastDigit;
    x = Math.floor(x / 10);
  }
  rev *= sign;
  let limit = Math.pow(2, 31);
  if (rev > limit || rev < -limit) return 0;
  return rev;
}

console.log(reverseInteger(-123));
