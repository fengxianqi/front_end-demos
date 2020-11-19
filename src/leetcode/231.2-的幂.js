/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 * 
 * 思路一
 * 暴力遍历
 * 
 * 思路二
var isPowerOfTwo = function(n) {
  return Math.log2(n) % 1 === 0
};
 * 

 思路三
n & (n -1) =0 。

 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return n > 0 && (n & (n - 1)) === 0
};
// @lc code=end

