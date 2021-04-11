/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) {
    return []
  }
  let ret = []
  let q = [root]

  let flag = false
  while(q.length) {
    let cur = []
    let childs = []
    while(q.length) {
      const node = q.shift()
      cur.push(node.val)
      // 孩子放到数组
      node.left && childs.push(node.left)
      node.right && childs.push(node.right)
    }
    if (flag) {
      cur.reverse()
    }
    ret.push(cur)
    q = childs
    flag = !flag
  }
  return ret
};
// @lc code=end

