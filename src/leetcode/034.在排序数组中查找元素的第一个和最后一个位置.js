/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (42.29%)
 * Likes:    2049
 * Dislikes: 0
 * Total Accepted:    692.9K
 * Total Submissions: 1.6M
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 
 * 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * nums 是一个非递减数组
 * -10^9 <= target <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  // 二分
  let min = -1
  let max = -1
  const binarySearch = (nums, left, right, target) => {
    if (left > right) {
      return -1
    }
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle
    } else if (nums[middle] < target) {
      return binarySearch(nums, middle + 1, right, target)
    } else {
      return binarySearch(nums, left, middle - 1, target)
    }
  }

  const targetIndex = binarySearch(nums, 0, nums.length - 1, target)
  if (targetIndex!=-1) {
    // 查找当前左右是否
    // 往左找
    max = targetIndex
    min = targetIndex
    let index = targetIndex
    while(index >= 0) {
      index--
      if (nums[index] === target) {
        min--
      } else {
        break
      }
    }
    index = targetIndex
    while (index < nums.length - 1) {
      index++;
      if (nums[index] === target) {
        max++
      } else {
        break;
      }
    }
  }

  return [min, max]
};
// @lc code=end

