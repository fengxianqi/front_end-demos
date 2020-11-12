/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 * 
 * 遍历，用一个obj来记录已经遍历过的值，如果出现过表示死循环
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if(n === 1) {
    return true
  }
    let obj = {}
    let temp = n
    
    while (temp !== 1 && !obj[temp]) {
      obj[temp] = 1
      const arr = temp.toString().split('')
      temp = arr.reduce((prev, cur) => { return Math.pow(Number.parseInt(cur), 2) + prev}, 0)
      if (temp === 1) {
        return true
      }
    }
    return false
};
// @lc code=end

