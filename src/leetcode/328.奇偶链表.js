/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head) {
      return head
    }
    let evenHead = head.next // 记住偶数链表头部
    let odd = head // 奇数指针
    let even = evenHead // 偶数链表指针
    while(even && even.next) {
      // 偶数的next是奇数，赋值为奇数后面
      odd.next = even.next
      // 奇数进一位，此时是1,3,3的next是4
      odd = odd.next

      // 偶数从2开始，2的next接4
      even.next = odd.next
      // 进入下一轮
      even = even.next
    }
    // 拼接
    odd.next = evenHead
    return head
};
// @lc code=end

