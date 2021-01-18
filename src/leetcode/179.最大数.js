/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {

  // 转换为字符串后再排序
  // 102和210， 大的在前

  const arr = nums.sort((a,b) => {
    const str1 = `${a}${b}`
    const str2 = `${b}${a}`
    return str2 - str1
  })

  // [0, 0] ，数组中全是0的情况
  if (arr[0] === 0) {
    return '0'
  }
  return arr.join('')
};
// @lc code=end

