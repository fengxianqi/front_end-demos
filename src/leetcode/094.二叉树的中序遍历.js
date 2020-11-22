/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
  // 声明存储结果的数组
  let res = []

  // 定义一个递归函数
  const inorder = (root) => {
    if (root ===null) {
      return
    }
    inorder(root.left)
    res.push(root.val)
    inorder(root.right)
  }

  inorder(root)
  return res


};
// @lc code=end

