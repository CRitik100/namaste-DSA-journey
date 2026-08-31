/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head != null) {
    let prevNode = null;
    let currNode = head;
    let nextNode = currNode.next;
    currNode.next = null;
    while (nextNode != null) {
      prevNode = currNode;
      currNode = nextNode;
      nextNode = currNode.next;
      currNode.next = prevNode;
    }
    head = currNode;
  }
  return head;
};
