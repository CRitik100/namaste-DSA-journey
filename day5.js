/**
 * Find the second largest number in an array of numbers.
 */

const arr = [-31651641, -5, -5];

function secondLargestNo(arr) {
  let largestNo = -Infinity;
  let secLargestNo = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNo) {
      secLargestNo = largestNo;
      largestNo = arr[i];
    } else if (arr[i] > secLargestNo && arr[i] != largestNo) {
      secLargestNo = arr[i];
    }
  }
  console.log(`Largest No is ${largestNo} \n2nd largest No is ${secLargestNo}`);
}

secondLargestNo(arr);
