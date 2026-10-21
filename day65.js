var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
  let len = this.stack.length;

  if (len == 0 || value < this.stack[len - 1][1]) {
    this.stack.push([value, value]);
  } else {
    this.stack.push([value, this.stack[len - 1][1]]);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1][1];
};
