/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  // 异或后，能得到不同位的1，此时转换为二进制，然后再计算1的个数
  const val = x^y 
  if (val === 0) {
    return 0
  }
  return val.toString(2).match(/1/g).length;
};
// @lc code=end

