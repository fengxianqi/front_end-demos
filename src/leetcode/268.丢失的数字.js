/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const len = nums.length
  for (let i = 0; i <= len;i++) {
    if (nums.indexOf(i) < 0) {
      return i
    }
  }
  return -1
};
// @lc code=end

