/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 * 
 * 
 * 思路
 * 下一行等于上一行错位相加（前面补零）
 * 第0行 1
 * 第1行  
 *       1 0
 *       0 1
 *     -------
 *       1 1
 * 
 * 第2行
 *       1 1 0
 *       0 1 1
 *     ----------
 *       1 2 1
 * */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if(!rowIndex) {
    return [1]
  }
  let ret = [1]
  for(let i = 0; i< rowIndex;i++) {
    ret.unshift(0)
    for (let j = 0; j < i + 1; j ++) {
      ret[j] = ret[j] + ret[j + 1]
    }
  }
  return ret
};
// @lc code=end

