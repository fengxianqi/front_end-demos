/*
 * @lc app=leetcode.cn id=324 lang=javascript
 *
 * [324] 摆动排序 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {

  // arr = [1,2,3,4,5,6]
  const arr = nums.slice().sort()
  let n = nums.length - 1
  for (let i = 1; i < nums.length; i += 2) {

    nums[i] = arr[n] // nums[1, 3, 5] = [6, 5, 4]
    n--
  }

  for ( let i = 0; i < nums.length; i+= 2) {
    nums[i] = arr[n] // nums[0, 2, 4] = [3, 2, 1]
    n--
  }
};
// @lc code=end

