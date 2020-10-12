/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if(!root) {
    return 0
  }

  // 广度优先遍历

  // 记录高度
  let height = 1
  let q = [root] // 当前需遍历的队列
  while(q.length) {
    let temp = [] // 用来存储下一级的节点

    // 遍历当前队列
    for (let i =0;i<q.length;i++) {
      // 如果一个节点同时无左右子节点，说明是叶子节点，即高度已经到头了，该高度即当前树的最小高度，直接return
      if (!q[i].left && !q[i].right) {
        return height
      }

      // 若有左子树，则放到temp数组中，等待下一次遍历
      if (q[i].left) {
        temp.push(q[i].left)
      }
      if (q[i].right) {
        temp.push(q[i].right)
      }
    }
    // 当前队列遍历已经结束，将子级赋值给当前队列，进入下一次循环
    q = temp
    // 进入下一层级了，高度要加一
    height++
  }
  return height
};
// @lc code=end

