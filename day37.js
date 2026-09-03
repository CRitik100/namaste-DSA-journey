/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let slow = head;
    let fast = head;
    let prevN = null;
    let currN = head;
    let nextN;
    let flag = true;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        nextN = currN.next;  // Store the next Node
        currN.next = prevN;  // reverse the Direction.
        prevN = currN;        // Updating the prev Node.
        currN = nextN;       // Updating the curr Node.

    }
    fast ? nextN = currN.next : nextN = currN;

    while (prevN && nextN) {
        if (prevN.val != nextN.val) {
            flag = false;
            break;
        }
        prevN = prevN.next;
        nextN = nextN.next;
    }
    return flag;

};