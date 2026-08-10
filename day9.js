/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */

function palindrome(no) {
  if (no < 0) return false;
  let actualNo = no;
  let reverse = 0;
  while (no > 0) {
    let lastDigit = no % 10;
    reverse = reverse * 10 + lastDigit;
    no = Math.floor(no / 10);
  }

  console.log(actualNo);
  console.log(reverse);
  return actualNo === reverse;
}

let no = 161;
let status = palindrome(no);
status
  ? console.log(`${no} is Pallindrome.`)
  : console.log(`${no} is not Pallindrome.`);
