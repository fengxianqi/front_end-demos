/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 * 
 * 找到前半部分链表的尾节点。
反转后半部分链表。
判断是否回文。
恢复链表。
返回结果。
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
  if (!head) {
    return true
  }
  let slow = head
  let fast = head.next
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // 此时slow刚好在中间，反转后半部分
  let prev = null
  let cur = slow
  while(cur) {
    const t = cur.next
    cur.next = prev
    prev = cur
    cur = t
  }

  // prev是反转后的后半部分
  let p1 = head
  let p2 = prev
  while(p1 && p2) {
    if (p1.val !== p2.val) {
      return false
    }
    p1 = p1.next
    p2 = p2.next
  }
  return true
};
// @lc code=end

