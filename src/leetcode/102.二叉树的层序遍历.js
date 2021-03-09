/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
  if (!root) {
      return []
  }
  let ret = [] // 存结果
  let q = [root] // 队列
  while(q.length) {
    // 将当前的层级都push进结果数组
    ret.push(q.map(item => item.val)) 

    // 解决下一层级的元素问题
      let temp = [] // 存下一层级
      while(q.length) {
        const t = q.shift()
        if (t.left) {
          temp.push(t.left)
        } 
        if (t.right) {
          temp.push(t.right)
        }
      }
    q = [...temp]
  }
  return ret
};
// @lc code=end

