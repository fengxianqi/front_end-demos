/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head || !head.next) {
    return head
  }
  let cur = head

  while(cur !== null && cur.next !== null) {
    if (cur.val !== cur.next.val) {
      cur = cur.next
      
    } else {
      cur.next = cur.next.next
    }
  }
  return head
};
// @lc code=end
