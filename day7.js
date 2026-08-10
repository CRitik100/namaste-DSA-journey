/**
 * Pattern 1
 */

console.log("----------------\n----------------");
let n = 7;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row += " * ";
  }
  console.log(row);
}

/**
 * Pattern 2
 */
console.log("----------------\n----------------");

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += " * ";
  }
  console.log(row);
}
/**
 * Pattern 3
 */
console.log("----------------\n----------------");

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += " " + j + " ";
  }
  console.log(row);
}
/**
 * Pattern 4
 */
console.log("----------------\n----------------");

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += " " + (i + 1) + " ";
  }
  console.log(row);
}

/**
 * Pattern 5
 */
console.log("----------------\n----------------");

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row += " " + (j + 1) + " ";
  }
  console.log(row);
}

/**
 * Pattern 6
 */
console.log("----------------\n----------------");

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i - 1; j++) {
    row += "   ";
  }
  for (let k = 0; k <= i; k++) {
    row += " * ";
  }
  console.log(row);
}

/**
 * Pattern 7
 */
console.log("----------------\n----------------");

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    j % 2 == 0 ? (row += " 0 ") : (row += " 1 ");
  }
  console.log(row);
}
