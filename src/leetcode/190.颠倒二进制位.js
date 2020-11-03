/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 * 
 * 思路一
 * n为十进制整数，toString(2)转换为二进制字符串，split成数组，reverse翻转，join拼成二进制字符串
 * padEnd末尾补零，parseInt转成十进制整数
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  // 移位运算
  let ret = 0

  // 32位数字移位
  for (let i=0;i<32;i++) {
    // 左移一位，且拼接1或0
    // n的末位是0时，0&1=0；是1时，1&1=1
    ret = (ret << 1) + (n & 1)

    // n右移一位，进入下一次循环
    n >>= 1
  }

  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
  // a >>> b：将 a 的二进制表示向右移 b (< 32) 位，丢弃被移出的位，并使用 0 在左侧填充。
  //  >>> 0 保证了数值是非负数
  return ret >>> 0
};
// @lc code=end

