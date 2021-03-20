/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
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
 */
var BSTIterator = function(root) {
  this.stack = []

  // 迭代模拟递归
  // 将左节点统统入栈，能保证栈顶肯定是最小的那个

  this._leftMostInOrder(root)
};

BSTIterator.prototype._leftMostInOrder = function (r) {
  while(r) {
    this.stack.push(r)
    r = r.left
  }
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {

  const topMostNode = this.stack.pop()
  // 如果栈顶元素刚好是一个叶子节点，则不用做任何处理，直接出栈
  // 栈顶元素不可能拥有左节点了，因为_leftMostInOrder已经处理完了
  // 如果有右节点，则将右节点入栈递归找最小

  if (topMostNode.right) {
    this._leftMostInOrder(topMostNode.right)
  }

  return topMostNode.val
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return !!this.stack.length
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

