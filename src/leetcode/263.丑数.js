/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num < 1) {
    return false
  }
  while(num % 2 === 0) {
    num /= 2
  }
  while(num % 3 === 0) {
    num /= 3
  }
  while(num % 5 === 0) {
    num /= 5
  }
  return num ===1
};
// @lc code=end

