/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  // 前序遍历，根节点->左子树->右子树
  // 中序遍历， 左子树->根节点->右子树

  // 在前序遍历第一个就是根节点，
  // 在中序遍历中，根节点左边就是左子树，右边就是右子树
  // 前和中两个遍历时，左子树的个数是相等的，因此可得出左右子树的前和中遍历
  // 递归
    if (!preorder.length) {
      return null
    }
    const root = new TreeNode(preorder[0])

    // 找根节点的位置，待使用hash表来优化该查找算法
    const i = inorder.indexOf(preorder[0])

    const in_left = inorder.slice(0, i)
    const in_right = inorder.slice(i+1)

    const pre_left = preorder.slice(1, i + 1)
    const pre_right = preorder.slice(i+1)



    root.left = buildTree(pre_left, in_left)
    root.right = buildTree(pre_right, in_right)
    return root
};
// @lc code=end

