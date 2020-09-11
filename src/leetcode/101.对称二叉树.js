/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
    // 空树是对称的
    if (!root) {
      return true
    }

    // 递归方法
    function dfs(l, r) {
      // 如果左右子树为空，则表示对称
      if (!l && !r) {
        return true
        // 若左右子树只有一个为空，则表示非对称
      } else if (!l || !r) {
        return false
      }
      // 左右子树分别递归
      return l.val === r.val && dfs(l.left, r.right) && dfs(l.right, r.left)
    }
    return dfs(root.left, root.right)
};
// @lc code=end

