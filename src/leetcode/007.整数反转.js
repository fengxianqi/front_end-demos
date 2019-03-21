/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.95%)
 * Total Accepted:    95.4K
 * Total Submissions: 298.6K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // 记住符号位
  let symbol = ''
  let arr = x.toString().split('')
  // 如果首位是-，则从数组中移除，用symbol记住
  if (arr[0] === '-') {
    symbol = '-'
    arr.shift()
  }
  const ret = parseInt(symbol + arr.reverse().join(''))
  // 如果超出范围，说明溢出，则返回0
  if (ret <= Math.pow(-2, 31) || ret >= Math.pow(2, 31)) {
    return 0
  }
  return ret
};
