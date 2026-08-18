// Print numbers from 1 to n using recursion.
function printFun(start, num) {
  if (start > num) return;
  console.log(start);
  printFun(++start, num);
}

let num = 7;
printFun(1, num);
