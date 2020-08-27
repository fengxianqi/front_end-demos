/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 * 
 * 
 * 
 * 思路一：
 * 1. 先去掉字符串首尾的空格
 * 2. 若字符串此时不存在空格了，则表示只有一个单词，直接返回length
 * 3. 若中间有空格，则分隔，取最后一个的length
 * 
 * 
 * 思路二：
 * 倒序计数
 * 1. 从字符串末尾开始遍历
 * 2. isStarted表示是否开始出现字母并计数
 * 3. 若还没开始计数，表示末尾都是空格，continue跳过
 * 4. 若开始计数了，且遇到了空格则break
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let len = 0
  if (!s) {
    return len
  }
  let sLen = s.length - 1
  let isStarted = false
  while(sLen >= 0) {
    if (s[sLen] === ' ') {
      if (isStarted) {
        break
      } else {
        sLen--
        continue
      }
    }
    isStarted = true
    len++
    sLen--
  }
  return len
};
// @lc code=end