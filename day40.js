/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let sentinal = new ListNode();
    sentinal.next = head;
    let prev = sentinal;
    let end = prev;
    for (let i = 0; i < n; i++) {
        end = end.next;
    }

    while(end.next){
        prev = prev.next;
        end= end.next;
    }
    prev.next= prev.next.next;
    head = sentinal.next;
    return head;
};