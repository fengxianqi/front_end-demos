/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
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
var getIntersectionNode = function(headA, headB) {
  // 双指针法，遍历a到结尾后，将pA再指向headB；同理遍历b结尾也将pB指向headA
  // 消除了高度差后，若他们相交，则会在相交点相遇
  // 若不相交，两者同时为null，结束遍历
  if (headA === null || headB === null) {
    return null
  }

  let pA = headA, pB = headB
  // 当两个同时为null时会跳出循环
  while(pA || pB) {
    if(pA === pB) return pA
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }
  return null
};
// @lc code=end

