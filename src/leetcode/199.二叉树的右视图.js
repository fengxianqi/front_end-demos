/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  // 广度优先遍历，将每个队列的最后一个加入数组
  if (!root) {
    return []
  }

  let ans = []
  let q = [root]
  while(q.length) {
    let len = q.length
    while(len) {
      let node = q.shift()
      if (len === 1) {
        // 最后一个了，即最右边的一个
        ans.push(node.val)
      }

      if (node.left) {
        q.push(node.left)
      }
      if (node.right) {
        q.push(node.right)
      }
      len--
    }
  }
  return ans
};
// @lc code=end

