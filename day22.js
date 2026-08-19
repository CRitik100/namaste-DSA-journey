function sumOfNo(no) {
  if (no == 1) return 1;
  return no + sumOfNo(no - 1);
}

console.log(sumOfNo(6));
