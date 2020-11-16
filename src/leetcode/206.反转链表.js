/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 * 
 * 迭代：
 * 遍历链表时，将next改为指向前一个元素
 * 定义两个指针： pre 和 cur ；pre 在前 cur 在后。
每次让 pre 的 next 指向 cur ，实现一次局部反转
局部反转完成之后，pre 和 cur 同时往前移动一个位置
循环上述过程，直至 pre 到达链表尾部

作者：huwt
链接：https://leetcode-cn.com/problems/reverse-linked-list/solution/fan-zhuan-lian-biao-shuang-zhi-zhen-di-gui-yao-mo-/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  // 遍历
  let prev= null
  let cur = head
  while(cur !== null) {
    const t = cur.next // 下一个节点先暂存
    cur.next = prev    // 当前的next指向前面的链表
    prev = cur         // 此时的prev是翻转后的根节点
    cur = t            // 准备进入下一次循环
  }
  return prev
};
// @lc code=end

