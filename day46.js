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
var swapPairs = function(head) {
    if(!head) {
        return null;
    }
    if(!head.next){
        return head;
    }
    let newStart = head.next;
    let newList = head.next.next;
    newStart.next = head;
    newStart.next.next = swapPairs(newList);
    return newStart;
};