let sum = (a, b) => {
  return a + b;
};
let sub = (a, b) => {
  return a - b;
};
let mul = (a, b) => {
  return a * b;
};
let div = (a, b) => {
  return a / b;
};

function calculation(operation, a, b) {
  return operation(a, b);
}

console.log(calculation(sum, 10, 11));
console.log(calculation(sub, 10, 11));
console.log(calculation(mul, 10, 11));
console.log(calculation(div, 11000, 10));

/**
 * Create a Function which accept the age of the function and tell the eligibility for Voting.
 */

let eligibilityCheck = (age) => {
  if (age < 1) {
    console.log("Invalid Age");
  } else if (age >= 18) {
    console.log("You are Eligible for choosing the leader.");
  } else {
    console.log(`You have to wait for another ${18 - age}.`);
  }
};
eligibilityCheck(-15);
eligibilityCheck(15);
eligibilityCheck(19);

/**
 * Create a function for Even and odd Number check.
 */

function checkNumber(num) {
  num % 2 == 0
    ? console.log(`${num} is even no.`)
    : console.log(`${num} is odd no.`);
}

checkNumber(11);
checkNumber(12);
