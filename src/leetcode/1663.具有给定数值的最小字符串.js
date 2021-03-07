/*
 * @lc app=leetcode.cn id=1663 lang=javascript
 *
 * [1663] 具有给定数值的最小字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * https://leetcode-cn.com/problems/smallest-string-with-a-given-numeric-value/solution/ju-you-gei-ding-shu-zhi-de-zui-xiao-zi-fu-chuan-by/
 */
var getSmallestString = function(n, k) {
  let s = ''
  for (let rest = n; rest >= 1; --rest) {
      let bound = k - 26 * (rest - 1)
      if (bound > 0) {
          s += String.fromCharCode(bound + 'a'.charCodeAt() - 1 )
          k-=bound
      } else {
          s+='a'
          k-=1
      }
  }
  return s
};
