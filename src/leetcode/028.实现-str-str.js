/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */
/**
 * 
 * 思路一：
 * 不可避免地想到了暴力破解法
 * 即遍历haystack，当遇到一个字符刚好等于needle[0]，就遍历needle，直到完全匹配就说明就是该位置。
 * 
 * 
 * 思路二：
 * KMP算法： 
 * http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html
 * https://www.jianshu.com/p/ffbf1e8962b0
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // needle为空则返回0
  if (!needle) {
    return 0
  }
  let ret = -1
  const haystackLen = haystack.length
  const needleLen = needle.length
  for (let i = 0; i < haystackLen; i++) {
    if (haystack[i] === needle[0]) {
      let j = 1
      for (; j < needleLen; j++) {
        // haystack后面没有字符了 或 发现有一个字符不等，说明不满足
        if (i + j >= haystackLen || haystack[i + j] !== needle[j]) {
          break
        }
      }
      if (j === needle.length) {
        // 遍历needle结束，说明needle就在该位置
        ret = i
        break
      }
    }
  }
  return ret
};
// @lc code=end

