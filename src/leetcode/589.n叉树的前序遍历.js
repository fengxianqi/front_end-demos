/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * 
 * 
思路一：递归
var preorder = function(root) {
  const ret = []
  const pOrder = (root) => {
    if (!root) {
      return
    }
    ret.push(root.val)
    root.children.forEach(item => {
      pOrder(item)
    })
  }
  pOrder(root)
  return ret
};






 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if (!root) {
    return []
  }
  const ret = []
  let q = [root]
  while(q.length) {
    const cur = q.shift()
    q = [...cur.children, ...q]
    ret.push(cur.val)
  }
  return ret
};
// @lc code=end

