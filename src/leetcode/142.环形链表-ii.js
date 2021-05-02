/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle = function(head) {
  // 
  // https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/xiang-xi-tu-jie-ken-ding-kan-de-ming-bai-by-xixili/
  // 使用快慢指针
  // head到环起点的距离会刚好等于相遇点到环开始点的距离
  // 当指针相遇时，将快指针重置为head起点
  // 然后两个指针一起再往后移动，直到再次相遇


  if (!head) {
      return null
  }
  let p = head
  let q = head
  while(q && q.next) {
      p = p.next
      q = q.next.next
      if (p === q) {
          // 相遇点到起始点的距离 = head到起始点的距离 
          q = head
          while(q !== p) {
              p = p.next
              q = q.next
          }
          return q
      }

  }
  return null
};
// @lc code=end

