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
    let sentinal = new ListNode();
    sentinal.next = head;
    let pre = sentinal;
    let curr;
    while(pre.next && pre.next.next){
        curr = pre.next;
        pre.next = pre.next.next;
        curr.next = pre.next.next;
        pre.next.next = curr;
        pre = pre.next.next;
    }
    return sentinal.next;
};