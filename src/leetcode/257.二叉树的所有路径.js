/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  // 深度优先搜索
  const pushPath = (root, path, paths) => {
    if (root) {
      path += root.val
      if (!root.left && !root.right) {
        paths.push(path)
      } else {
        path += '->'
        pushPath(root.left, path, paths)
        pushPath(root.right, path, paths)
      }
    }
  }
  const paths = []
  pushPath(root, '', paths)
  return paths
};
// @lc code=end

