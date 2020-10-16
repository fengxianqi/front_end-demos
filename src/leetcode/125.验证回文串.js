/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s) {
    return true
  }
  // [\W_]
  // [@,.: #!$%^&*()~;'"\?_\\{}\[\]\-`]
  // 移除标点符号
  const str = s.replace(/[\W_]/ig, '').toLocaleLowerCase()
  return str === str.split('').reverse().join('')
};
// @lc code=end

