/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 * 
 * 动态规划
 * 偷第k家，则不能偷k-1家，此时总金额为k与前k-2家总金额之和
 * 不偷k家，则总金额为前k-1总金额
 * 得出dp方程：
 * dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums || !nums.length) {
    return 0
  }

  let len = nums.length

  if (len === 1) {
    return nums[0]
  }

  let first = nums[0]
  let second = Math.max(nums[0], nums[1])
  for (let i =2; i< len; i++) {
    let t = second
    second = Math.max(first + nums[i], second)
    first = t
  }
  return second
};
// @lc code=end

