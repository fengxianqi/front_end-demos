/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II.
 * 
 * 思路
 * 声明p和q两个指针，遍历数组
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0
    const len = prices.length
    let p = 0, q = 1
    while(p < len && q < len) {
      // 如果价格是呈递增形式，则q指针+1，直到出现递减
      if (prices[p] < prices[q] && prices[q] > prices[q - 1]) {
        q++
      } else {
        // 如果q与p相差超过1个位置，即表示先递增再递减的趋势（如[1,3,2]），此时max等于q的上一位与p位的差值
        // p指针跳到q位置，q+1，进入下一次循环
        if (p < q - 1) {
          max += prices[q - 1] - prices[p]
          p = q
          q++
        } else {
          // 价格是递减形式，且p和q相邻，则p和q进入下一位直接顺延
          p++
          q++
        }
      }
      
    }

    // 若q已经到达尽头，且q和p不相邻，则是处于一直递增或末尾递增的状态（如： [1,3,1,2,3,4,5]），此时需要加上末尾的差值
    if (q === len && p < q - 1) {
      max += prices[q - 1] - prices[p]
    }
    return max
};
// @lc code=end

