/**
 * Write a function that searches for an element in an array and return the index no.
 * And if the element is not found return the -1.
 */

const arr = [131651641, -5, 7, 9, 11, 1111, -656, 1000, 178, -2000, 3000];
let desNo = 178;

function searchElement(arr, no) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === no) return i;
  }
  return -1;
}

let desIndex = searchElement(arr, desNo);
console.log(arr);
console.log(`Index of ${desNo} in the arr is ${desIndex}.`);

/**
 * Write a function that return the count of -ve no's in an array.
 */

function countNegatives(arr) {
  let count = 0;
  arr.forEach((value) => {
    if (value < 0) count++;
  });
  return count;
}
let totalNegativeNo = countNegatives(arr);
console.log("Total -ve no is " + totalNegativeNo);

/**
 * Write a function which return the largest no from an array.
 */

function largestNumber(arr) {
  let result = arr[0];
  arr.forEach((value) => {
    if (value > result) result = value;
  });
  return result;
}

let largeNo = largestNumber(arr);

console.log("Largest No of arr is " + largeNo);

/**
 * Write a function which return the smallest no from an array.
 */

function smallestNumber(arr) {
  let result = arr[0];
  arr.forEach((value) => {
    if (value < result) result = value;
  });
  return result;
}

let smallNo = smallestNumber(arr);

console.log("Smallest No of arr is " + smallNo);
