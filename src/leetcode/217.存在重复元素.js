/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 * 思路一：使用Set，判断最后的长度是否一致
var containsDuplicate = function(nums) {
  const set = new Set(nums)
  return set.size !== nums.length
};
 * 
 * 
 * 思路二：
 * 遍历数组，已出现的存到hash表中，发现已存在则说明存在重复元素
 * 
 * 
 * 思路三：
 * 遍历数组，indexOf某个值与index不一致时，表示存在重复元素
 * 
 * 
 * 思路四：
 * 排序后，再遍历，检查相邻元素
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const set = new Set(nums)
  return set.size !== nums.length
};
// @lc code=end

