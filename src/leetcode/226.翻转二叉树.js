/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  // 节点为空，则直接返回
  if (root === null) {
    return null
  }

  // 交换左右节点
  [root.left, root.right] = [root.right, root.left]

  // 递归地去交换左右节点
  invertTree(root.left)
  invertTree(root.right)
  
  return root
};
// @lc code=end

