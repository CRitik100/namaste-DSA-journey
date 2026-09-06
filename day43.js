/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sentinal = new ListNode();
  let prev = sentinal;
  let val1 = (val2 = sum = newDigit = carry = 0);
  while (l1 || l2 || carry) {
    // Get the Digit of each Node.
    val1 = l1 ? l1.val : 0;
    val2 = l2 ? l2.val : 0;

    // Calculation.
    sum = val1 + val2 + carry;
    newDigit = sum % 10;
    carry = Math.floor(sum / 10);

    // Creating a New Node and connecting with previous Node.
    let newNode = new ListNode(newDigit);
    prev.next = newNode;

    // Updating the Nodes
    prev = newNode;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return sentinal.next;
};
