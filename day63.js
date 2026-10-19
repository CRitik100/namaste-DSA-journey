var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
  this.transfer = (stack1, stack2) => {
    let top = null;
    while (stack1.length > 0) {
      top = stack1.pop();
      stack2.push(top);
    }
  };
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.s2.length == 0) {
    this.transfer(this.s1, this.s2);
  }
  let peek = this.s2.pop();
  return peek;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.s2.length == 0) {
    this.transfer(this.s1, this.s2);
  }
  let peek = this.s2[this.s2.length - 1];
  return peek;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s1.length == 0 && this.s2.length == 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
