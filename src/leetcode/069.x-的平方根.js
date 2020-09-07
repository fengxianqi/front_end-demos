/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 * 
 * 思路：
 * 暴力遍历法：从1开始遍历，若发现i的平方刚好大于等于x，则表示i或i-1刚好是x的平方根
 * 
var mySqrt = function(x) {
  let i = 1;
  for (; i < x; i++) {
    if (i * i >= x) {
      break
    }
  }
  if (i * i === x) {
    return i
  } else {
    return i - 1
  }
};
 * 
 * 
 * 
 * 思路二： 
 * 二分法
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x < 2) return x;
  let left = 1,
      right = Math.floor(x / 2);
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (mid * mid == x) {
          return mid;
      } else if (mid * mid > x) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return right;
};
// @lc code=end

