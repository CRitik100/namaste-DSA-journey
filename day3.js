for (let i = 0; i < 5; i++) {
  console.log(`Namaste 🙏 ${i}`);
}

let arr = [11, 22, 33, 44, 55];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/**Print all the Even no of the array */

console.log("Even no of array.");

let checkEvenNo = (num) => {
  return num % 2 == 0;
};

for (let i = 0; i < arr.length; i++) {
  if (checkEvenNo(arr[i])) console.log(arr[i]);
}

/**
 * While Loop
 */
let i = 11;
let j = 1;
console.log(`Table of ${i}`);
while (j < 11) {
  console.log(`${i} * ${j} = ${i * j}`);
  j++;
}
