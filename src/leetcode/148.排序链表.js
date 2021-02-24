/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function(head) {
  if(head==null || head.next==null) return head;
  let slow = head; //慢指针
  let fast = head.next; //快指针
  
  // 利用快慢指针找到链表的中点

  while(fast!=null && fast.next!=null){ //快慢指针找到链表中点
      slow = slow.next; //慢指针走一步
      fast = fast.next.next; //快指针走两步
  }
  let rightHead = slow.next; //链表第二部分的头节点
  slow.next = null; //cut 链表
  

  // 递归地去排序左右链表

  let left = sortList(head); //递归排序前一段链表
  let right = sortList(rightHead); //递归排序后一段链表
  return merge(left,right);
};

function merge (h1, h2) {
  let dummy = new ListNode(-1);
  let p = dummy;

  // 合并两个有序链表
  while(h1!=null && h2!=null){
      if(h1.val < h2.val){
          p.next = h1;
          h1 = h1.next;
      }else{
          p.next = h2;
          h2 = h2.next;
      }
      p = p.next;
  }
  if(h1!=null)    p.next = h1;
  else if(h2!=null) p.next = h2;
  return dummy.next;
}

// @lc code=end

