/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const v1 = version1.split('.')
  const v2 = version2.split('.')

  while(v1.length || v2.length) {
      const c1 = Number.parseInt(v1.length ? v1.shift() : '0')
      const c2 = Number.parseInt(v2.length ? v2.shift() : '0')
      if (c2 > c1) {
          return -1
      } else if (c2 < c1) {
          return 1
      }
  }

  return 0
};
// @lc code=end

