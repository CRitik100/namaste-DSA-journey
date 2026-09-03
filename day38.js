/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let listOfNode = new Set();
    let listANode = headA;
    let listBNode = headB;
    let flag = null;
    while ((listANode || listBNode) && !flag) {
        if (listOfNode.has(listANode)) {
            flag = listANode;
        }
        else if (listOfNode.has(listBNode)) {
            flag = listBNode;
        }
        if (listANode) {
            listOfNode.add(listANode);
            listANode = listANode.next;
        }
        else if (listBNode) {
            listOfNode.add(listBNode);
            listBNode = listBNode.next;
        }
    }
    return flag;
};