/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 使用快慢指针，当fast和slow会相遇，则说明有环
    let fast = head
    let slow = head
    while(slow !== null && fast !== null && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next
      if (fast === slow) {
        return true
      }
    }
    if (slow === null || fast === null || fast.next === null) {
      return false
    }
    return true
};
// @lc code=end

