/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // 二分法
  // 数组虽然旋转过，但从中间分开时，肯定有一边是有序的
  // 因此可以用以判断target在哪部分
  let l = 0
  let r = nums.length - 1


  while(l <= r) {
    const mid = Number.parseInt((l+r)/2)
    if (nums[mid] === target) {
      return mid
    }

    if (nums[l] < nums[mid]) {
      // 左半段是单调递增的
      if (nums[l] <= target && nums[mid] > target ) {
        // 在左半段
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      // 右半段是递增的
      if (nums[mid] < target && target <= nums[r]) {
        // 在右半段
        l  = mid + 1
      } else {
        r = mid - 1
      }
    }
  }
  if (nums[l] === target) {
    return l
  }

  if (nums[r] === target) {
    return r
  }

  return -1
};
// @lc code=end

