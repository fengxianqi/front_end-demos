/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
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
var removeNthFromEnd = function(head, n) {
  // 声明一个虚拟头，next指向当前链的头
  let dummyHead = new ListNode(0, head)

  // 快指针
  let fast = dummyHead

  // 快指针先走n步
  for (let i = 0; i <= n; i++) {
    fast = fast.next
  }

  let p = dummyHead
  // 快慢指针同时往下走，当快指针遍历到尾部，慢指针就刚好处于倒数第n个的前一个节点
  while(fast) {
    p = p.next
    fast = fast.next
  }
  // 此时p已经指向了要删除节点的上一个节点
  p.next = p.next.next
  return dummyHead.next
};
// @lc code=end

