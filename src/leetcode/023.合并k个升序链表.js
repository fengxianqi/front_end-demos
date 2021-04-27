/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  // 分治合并
  if (!lists.length){
    return null
  }
  if (lists.length === 1) {
    return lists[0]
  }

  const merge2List = (l1, l2) => {
    if (!l1) {
      return l2
    }

    if (!l2) {
      return l1
    }

    if (l1.val < l2.val) {
      l1.next = merge2List(l1.next, l2)
      return l1
    } else {
      l2.next = merge2List(l1, l2.next)
      return l2
    }
  }

  const merge = (lists, left, right) => {
    if (left === right) {
      return lists[left]
    }

    let mid = Number.parseInt((left+right) / 2)
    const l1 = merge(lists,left,mid)
    const l2 = merge(lists, mid + 1, right)
    return merge2List(l1,l2)
  }

  return merge(lists, 0, lists.length - 1)

};
// @lc code=end

