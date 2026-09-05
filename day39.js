/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let sentinal = new ListNode();
    sentinal.next = head;
    prev = sentinal;
    while (prev.next) {
        if (prev.next.val == val) {
            prev.next = prev.next.next;
        }
        else{
            prev = prev.next;
        }
    }
    head = sentinal.next;
    return head;
};