/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (!nums.length) {
    return [];
  }
  let ret = [];
  for (let i = 0, j=0; j<nums.length; j++) {
    // 如果下一个刚好是连续的，继续循环
    if (j+1<nums.length && nums[j+1] === nums[j] + 1) {
      continue;
    }
    // 如果不连续
    // 下标一样，则单独一个数字
    if (i === j) {
      ret.push(`${nums[i]}`)
    } else {
      // 下标不同，说明有区间
      ret.push(`${nums[i]}->${nums[j]}`)
    }
    // 不连续时，i要+1
    i = j + 1
  }
  return ret
};
// @lc code=end

