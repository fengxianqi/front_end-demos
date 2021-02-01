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




思路二：
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
}

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

