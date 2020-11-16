/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
      return false
    }
    for (let i =0; i<s.length; i++) {
      if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
        return false
      }
    }
    return true

};
// @lc code=end

