/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * 
思路： 遍历两个链表
1. 如果两个链表都不为空，则将小的放到结果，该小的链表指针进入next，进入下一次遍历
2. 如果其中一个为空，则直接放进结果，进入下一次遍历，直至遍历结束
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let ret = new ListNode(0)
    const head = ret
    let currentL1 = l1
    let currentL2 = l2
    while (currentL1 || currentL2) {
      if (currentL1 && currentL2) {
        if (currentL1.val < currentL2.val) {
          ret.next = new ListNode(currentL1.val)
          currentL1 = currentL1.next
        } else {
          ret.next = new ListNode(currentL2.val)
          currentL2 = currentL2.next
        }
      }else if (currentL1) {
        ret.next = new ListNode(currentL1.val)
        currentL1 = currentL1.next
      } else {
        ret.next = new ListNode(currentL2.val)
        currentL2 = currentL2.next
      }
      ret = ret.next
    }
    return head.next
};
// const l1 = new ListNode(1)
// l1.next = new ListNode(2)
// l1.next.next = new ListNode(4)
// l1.next.next.next = new ListNode(5)
// l1.next.next.next.next = new ListNode(8)


// const l2 = new ListNode(1)
// l2.next = new ListNode()
// l2.next.next = new ListNode(4)

// mergeTwoLists(l1, l2)

// @lc code=end

