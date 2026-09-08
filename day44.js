/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return head;
  let sentinal = new ListNode();
  sentinal.next = head;
  let start = (end = head);
  for (let i = 1; i <= k; i++) {
    if (end.next == null) {
      end = head;
      k = k % i;
      i = 0;
    } else {
      end = end.next;
    }
  }
  while (end.next) {
    start = start.next;
    end = end.next;
  }
  end.next = sentinal.next;
  head = start.next;
  start.next = null;
  return head;
};
