/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) {
    return true
  }

  // 递归获取高度
  const height = (node) => {
    if (!node) {
      return 0
    }
    return Math.max(height(node.left), height(node.right)) + 1
  }

  // 高度差不超过1
  // 左右子树都是平衡
  return Math.abs(height(root.left) -height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};
// @lc code=end

