/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * 思路：
 * 递归地选中间的为根节点
 * 
 * 答案不唯一，个数是偶数的情况下，可以选中点左边，也可以右边，也可以随机的为根节点
 * 
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const helper = (start, end) => {
    if (start > end) {
      return null
    }
    // 总是选择中间位置左边的数字作为根节点
    const mid = Math.floor((start + end) / 2)

    const node = new TreeNode(nums[mid])

    node.left = helper(start, mid - 1)
    node.right = helper(mid + 1, end)
    return node
  }
  return helper(0, nums.length - 1)
};
// @lc code=end

