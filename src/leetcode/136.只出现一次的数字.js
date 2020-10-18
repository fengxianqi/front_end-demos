/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // 思路一
  // 排序
  // 然后遍历判断

  // 思路二
  // 哈希才能object后判断

  // 思路三
  // 异或运算，一个数与自己异或等于0，如果将所有数都异或运算，则最后结果就是那个单个数字。
  var ret = 0
  for(let i =0 ;i<nums.length;i++) {
    ret^=nums[i]
  }
  return ret
};
// @lc code=end

