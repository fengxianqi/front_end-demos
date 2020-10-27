/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * 
 * 思路
 * 用一个object记录出现次数
 * 然后遍历该obj取出值最大那个
 * 
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const obj = {}
  nums.forEach(item => {
    if(obj[item]) {
      obj[item]++
    } else {
      obj[item] = 1
    }
  })
  let majority = nums[0]
  let max = obj[majority]
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key]
      majority = key
    }
  }
  return majority
};
// @lc code=end

