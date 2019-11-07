/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

/**
 * 
 * 思路： 
 * 1. 用一个变量len标记当前数组下标，如果不等于val则放到nums[len]中，len++
 * 2. 这样nums[0]~nums[len]会一直保证是没有等于val的值
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let len = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[len] = nums[i]
      len++
    }
  }
  return len
};
// @lc code=end

