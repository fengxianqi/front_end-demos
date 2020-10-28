/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  // 5*4*3*2*1
  // 6*5*4*3*2*1
  // 7*6*5*4*3*2*1
  // 2,5,10,12,15,20 规律是找出n以内0,2,5结尾的数字个数，一个2和一个5会产生一个0， 一个0产生一个0,
  // 2的个数会比5的个数多，因此只需算5的个数
  // 当出现25时，会有2个5，此时会多一个0
  // 当出现125时，会有3个5，此时会是3个0
  let count = 0
  while (n > 0) {
      count += Math.floor(n / 5)
      n = Math.floor(n / 5)
  }
  return count

};
// @lc code=end

