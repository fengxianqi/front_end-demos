/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 * 
 * 
 * 
 * 思路：
 * 采用递归的方法，难点是正则匹配
 * \d 匹配一个数字
 * \1 匹配前面第一个括号内匹配到的内容
 * (\d)\1* 匹配相邻数字相同的内容 使用replace方法将匹配到的内容处理为长度 + 内容的第一个字符 结果为所求报数
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) {
    return '1'
  }
  const preResult = countAndSay(n-1)

  return preResult.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
};
// @lc code=end

