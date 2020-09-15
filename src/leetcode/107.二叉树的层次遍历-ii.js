/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * 
 * 思路：BFS遍历
 * 
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) {
    return []
  }

  // 声明队列
  const queue = []
  queue.push(root)
  // 存储结果
  const res = []
  // 当队列不为空就一直遍历
  while (queue.length) {
    const subRes = []

    // 当前层级的元素个数，后续push进来的不会影响
    const levelSize = queue.length
    for (let i = 0; i < levelSize; i++) {
      // 出队
      const cur = queue.shift()
      subRes.push(cur.val)
      // 入队
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
    res.unshift(subRes)
  }
  return res
};
// @lc code=end

