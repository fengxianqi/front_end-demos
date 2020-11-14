/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 * 
 * 
 * 思路二
 * 在头部设置一个哨兵节点，并将它的next设置为head，这样就可以防止头部节点刚好等于val，最后return 哨兵.next
 * 
 * 
 * 
 * 
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  // 如果头结点刚好等于目标值，则头结点先遍历
  while(head !== null && head.val === val) {
    head = head.next
  }

  if (!head) {
    return head
  }

  // 遍历后面结点
  let p = head
  while(p && p.next) {
    if (p.next.val === val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return head
};
// @lc code=end

