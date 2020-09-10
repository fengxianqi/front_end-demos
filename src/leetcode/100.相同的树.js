/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // 深度优先
    if (p === null && q === null) {
      return true
    } else if(p === null || q === null) {
      return false
    } else if (p.val !== q.val) {
      return false
    } else {
      return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }
};
// @lc code=end

