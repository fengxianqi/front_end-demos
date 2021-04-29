/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * 
 * 解法一：线性表
 * 将链表转换为数组后再还原为链表
 * 
 * 
 * 解法二：
 * 1.找到链表中点
 * 2.反转链表后半部分
 * 3.合并链表
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  // 解法二
  if (!head || !head.next) {
    return head
  }

  let slow = head
  let fast = head.next
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // fast还有值，偶数链
  // fast=null，奇数链
  let mid = slow.next

  // 必须断链
  slow.next = null


  // 反转链表
  const reverse = (head) =>{
    let prev = null
    let cur = head
    while(cur) {
      const t = cur.next
      cur.next = prev
      prev = cur
      cur = t
    }
    return prev
  }

  let newHead = reverse(mid)


  while (newHead != null) {
    // 暂存右边链的next
    const temp = newHead.next;

    // 右链的next断掉，且指向左边链的下一位，
    newHead.next = head.next;

    // 左边链的next断掉，指向当前右链头部
    head.next = newHead;

    // 准备进入下一次循环
    head = newHead.next;
    newHead = temp;
}


}; 
// @lc code=end

