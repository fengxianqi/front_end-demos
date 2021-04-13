/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  let ret = ''
  while(i>=0 || j >=0) {
      const n = Number(num1[i] || 0) + Number(num2[j] || 0) + carry
      ret =  (n % 10).toString() + ret
      carry = Number.parseInt(n / 10)
      i--
      j--
  }
  if (carry){
      ret = carry.toString() + ret
  }
  return ret
};
// @lc code=end

