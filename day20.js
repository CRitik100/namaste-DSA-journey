/**
 * Recursion
 */

// Print numbers from n to 1 using recursion
function printFun(num) {
  if (num == 0) return;
  console.log(num--);
  printFun(num);
}

printFun(11);

