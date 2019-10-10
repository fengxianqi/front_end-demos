/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

/**
 * 
 * 思路： 
 * 1. 用一个指针记录当前不重复的数组值,该指针从零开始
 * 2. 从第二项开始遍历数组，与前一项比较，如果当前值和前一个值相同，则不作任何处理
 * 3. 如果当前值和前一个值不同，说明不重复，此时指针要往后移一位，将这个值放到nums[len]里
 * 4. 遍历结束，不重复数组为： nums[0]~nums[len]， 因此长度应该是： len+1
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 2) {
    return nums.length
  }
  let len = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      // 如果与上一个不同
      len++
      nums[len] = nums[i]
    }
  }
  return len + 1
};

// @lc code=end

