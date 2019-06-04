/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.48%)
 * Total Accepted:    63.2K
 * Total Submissions: 194.5K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/* 
思路： 
1. 将字符串数组中的第一个字符串first取出来，
2. 遍历first的所有字符
3. 遍历剩余的字符串数组中的相同位置字符，若都相同则push到ret，否则结束所有的遍历。
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) {
      return ''
    }
    let ret = []
    // 将数组中的第一个字符串取出来，遍历该字符串所有的字符
    let first = strs[0]
    for (let i = 0; i < first.length; i++) {
      let char = first[i]
      let j = 1
      // 将字符串的一个字符去比较数组中的对应位置
      // 若都相同，则for循环能够顺利结束，此时j === strs.length，记住该字符
      // 若有一个不相同，直接break循环，此时 j < strs.length ，外层循环也不需再遍历了，break
      for (; j < strs.length; j++) {
        // 超出其他字符串的长度了
        if (strs[j].length - 1 < i) {
          break
        }
        if (char !== strs[j][i]) {
          break;
        }
      }
      if (j === strs.length) {
        ret.push(first[i])
      } else {
        break
      }
    }
    return ret.join('')
};

// console.log(longestCommonPrefix(["flower","flow","flight"]))

