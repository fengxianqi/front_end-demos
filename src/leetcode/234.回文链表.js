/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
var isPalindrome = function(head) {
  if (!head || !head.next) {
    return true
  }

  let slow = head // 慢指针
  let prev = null // 存储反转链表
  let fast = head // 快指针
  while (fast && fast.next) {
    fast = fast.next.next
    // 反转
    const t = slow.next
    slow.next = prev
    prev = slow
    slow = t
  }

  // 如果链表元素是基数，slow往前一步
  if (fast) {
    slow = slow.next
  }

  // slow此时已经在中间
  // prev此时是中间往前面的
  while(slow && prev) {
    if (slow.val !== prev.val) {
      return false
    }
    slow = slow.next
    prev = prev.next
  }
  return true
  
};
// @lc code=end

