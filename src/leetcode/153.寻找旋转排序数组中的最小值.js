/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  // 二分查找目标元素
  let low = 0
  let high = nums.length - 1
  while (low < high) {
    let mid = Math.floor((low + high) / 2)
    if (nums[mid] < nums[high]) {
      high = mid
    } else {
      low = mid + 1
    }
  }
  return nums[low]
};
// @lc code=end

