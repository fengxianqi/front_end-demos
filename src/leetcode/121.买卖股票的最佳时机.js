/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 * 
 * 思路
 * 暴力解法，两层遍历
 * 
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length) {
    return 0
  }
  let max = 0
  for (let i =0;i <prices.length;i++) {
    for (let j =i;j<prices.length;j++) {
      const temp = prices[j] - prices[i]
      if (temp > max) {
        max = temp
      }
    }
  }
  return max
};
// @lc code=end

