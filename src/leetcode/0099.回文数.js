/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.03%)
 * Total Accepted:    86.7K
 * Total Submissions: 154.6K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 * 
 * 解题思路：
 * 
 * 方法一： 转为字符串后，for循环一半，判断首尾是否一直相等
 * var isPalindrome = function(x) {
    if (x < 0) {
      return false
    }
    let ret = true
    let xStr = x.toString()
    let len = xStr.length
    for (let i = 0, j = len - 1; i < parseInt(len / 2); i++, j--) {
      if (xStr[i] !== xStr[j]) {
        ret = false
        break
      }
    }
    return ret
};
 * 
方法二： 直接判断反转后是否相等
var isPalindrome = function(x) {
  return x.toString() == x.toString().split('').reverse().join('');
};


方法三： 进阶，不转为字符串的方法
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
      return false
    }
    let a = 0
    let b = x
    while (b !== 0) {
      a = a * 10 + b % 10
      b = parseInt(b / 10)
    }
    return a === x
};

