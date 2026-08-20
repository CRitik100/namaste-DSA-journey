/**
 * Sum of All odd elements in an Array.
 */

let sum = (arr) => {
  let isOdd = arr[0] % 2 != 0;
  if (arr.length == 1) {
    return isOdd ? arr[0] : 0;
  }

  return isOdd ? arr[0] + sum(arr.slice(1)) : sum(arr.slice(1));
};

const arr = [2, 5, 0, 1, 3, 2, 1, 1];
console.log(sum(arr));
