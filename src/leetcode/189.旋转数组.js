/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 * 
 * 
 * 思路一
 * 截取后半段，然后再续在前面
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const arrK = nums.slice(nums.length - k - 1)
  
  console.log(arrK)
  nums = arrK.concat(nums.slice(0, nums.length - k - 1))
  return nums
};
// @lc code=end

