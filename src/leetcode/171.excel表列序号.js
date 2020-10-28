/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 * 
 * 
 * 思路
 * 'A'.charCodeAt = 65
 * 
 * 26进制的进位相加
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  const len = s.length
  let ret = 0
  for (let i = 0 ; i < len;i++){
    ret += (s[len - i - 1].charCodeAt() - 64) * Math.pow(26, i)
  }
  return ret
};
// @lc code=end

