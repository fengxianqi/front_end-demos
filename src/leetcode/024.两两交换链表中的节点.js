/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode.cn/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (71.29%)
 * Likes:    1829
 * Dislikes: 0
 * Total Accepted:    631K
 * Total Submissions: 885.2K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1]
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 100] 内
 * 0 <= Node.val <= 100
 * 
 * 
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
var swapPairs = function(head) {
  if (!head) {
    return head
  }

  const dummyHead = new ListNode(0, head)
  let cur = dummyHead
  while(cur.next && cur.next.next) {
    // 记录两个临时节点
    const t1 = cur.next
    const t2 = cur.next.next

    // 先将cur指向2
    cur.next = cur.next.next

    // 1指向3
    t1.next = t2.next

    // 2指向1
    cur.next.next = t1

    // cur指针进入下一次循环，开始3和4的调换
    cur = cur.next.next
  }
  return dummyHead.next
};
// @lc code=end

