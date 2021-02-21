/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if (!nums || !nums.length) {
    return
  }
  let l = 0 // 左指针
  let r = 0 // 右指针
  const len = nums.length
  // 0到左指针的位置存储非0的数字
  // 右指针不断遍历，遇到非0则将该数字赋值到左指针，左指针往前
  // 遍历结束后，将左指针往后的数字都归0
  while(r < len) {
    if (nums[r] !== 0) {
      nums[l] = nums[r]
      l++
    }
    r++
  }
  for (let i = l; i<len;i++) {
    nums[i] = 0
  }
};
// @lc code=end

