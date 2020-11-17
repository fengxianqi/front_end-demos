/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  // 用一个长度为k的hash表已出现的元素，若包含则说明有重复，每次遍历时保证hash表是长度为k
  const set = new Set()
  for (let i =0; i <nums.length;i++) {
    if (set.has(nums[i])) {
      return true
    }
    set.add(nums[i])
    if (set.size > k) {
      set.delete(nums[i - k])
    }
  }
  return false
};
// @lc code=end

