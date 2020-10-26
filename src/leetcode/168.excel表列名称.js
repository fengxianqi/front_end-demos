/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  // 1  A
  // 27 AA
  // 52 AZ
  // 53 BA

  // String.fromCharCode(65) = A
  let ret = ''
  while(n >0) {
    n--
    ret += String.fromCharCode(65 + n % 26)
    n = Math.floor(n / 26)
  }
  return ret.split('').reverse().join('')
};
// @lc code=end

