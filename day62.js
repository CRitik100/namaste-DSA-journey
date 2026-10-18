var MyStack = function () {
  this.q = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let top = null;
  let len = this.q.length;
  for (let i = 0; i < len; i++) {
    top = this.q[0];
    if (i != len - 1) {
      this.q.push(top);
    }
    this.q.shift();
  }
  return top;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let top = null;
  let len = this.q.length;
  for (let i = 0; i < len; i++) {
    top = this.q[0];
    this.q.push(top);
    this.q.shift();
  }
  return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q.length == 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
