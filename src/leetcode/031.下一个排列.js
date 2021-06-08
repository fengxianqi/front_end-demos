/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  //  https://leetcode-cn.com/problems/next-permutation/solution/xia-yi-ge-pai-lie-suan-fa-xiang-jie-si-lu-tui-dao-/

  const len = nums.length
  if (len <= 1) {
    return
  }

  let i = len - 2
  let j = len - 1
  let k = len - 1

  // 查找nums[i] < nums[j]
  // 从后向前查找第一个相邻升序的元素
  while(i >=0 && nums[i] >= nums[j]) {
    i--
    j--
  }

  // 然后在 [j,end) 从后向前查找第一个大于 A[i] 的值 A[k]
  if (i >= 0) {
    // 查nums[i] <nums[k]
    while(nums[i] >= nums[k]) {
      k--
    }
    // 换位置
    [nums[i], nums[k]] = [nums[k], nums[i]]

  }

  // j到end此时是降序的，此时将j到end重新按升序排列
  for (let l = j, r = len - 1;l < r; l++,r--) {
    [nums[l],nums[r]] = [nums[r],nums[l]]
  }

};
// @lc code=end

