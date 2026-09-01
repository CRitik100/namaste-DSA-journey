/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let uniqueNode = new Set();
    let curr = head;
    let flag = false;
    while (curr && !flag) {
        flag = uniqueNode.has(curr);
        uniqueNode.add(curr);
        curr = curr.next;
    }
    return flag;
};