/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {

  let ret = 1

  // 深度遍历
  const dfs = (root) => {
    if (!root) {
      return 0
    }

    // 左子树的深度
    const l = dfs(root.left)
    // 右子树的深度
    const r = dfs(root.right)

    // 当前节点直径与结果比较
    ret = Math.max(ret, l + r + 1)

    // 返回当前节点做大的长度
    return Math.max(l, r) + 1
  }

  dfs(root)
  return ret - 1
};
// @lc code=end

