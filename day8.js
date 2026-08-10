/**
 * Find the no of digit in a number.
 */

function noOfDigits(no) {
  let count = 0;
  no = Math.abs(no);
  if (no == 0) return 1;
  while (no > 0) {
    count += 1;
    no = Math.floor(no / 10);
  }
  return count;
}

let no = -0;
let totalDigit = noOfDigits(no);
console.log(totalDigit);
