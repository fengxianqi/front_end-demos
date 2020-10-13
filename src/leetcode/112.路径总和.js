/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * 思路二：
 * 广度优先，记住当前节点到根节点的和，若刚好是叶子节点且总和等于sum，就返回true
 * 
 */

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) {
    return false
  }

  // 递归
  // 如果当前节点刚好是叶子节点，则val和sum如果相等就表示总和一样
  if (root.left === null && root.right === null) {
    return sum === root.val
  }

  // 对于left节点，判断总和等于sum-root.val
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum -root.val)
};
// @lc code=end

