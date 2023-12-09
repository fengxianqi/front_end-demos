/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 *
 * https://leetcode.cn/problems/integer-break/description/
 *
 * algorithms
 * Medium (62.60%)
 * Likes:    1322
 * Dislikes: 0
 * Total Accepted:    296.5K
 * Total Submissions: 473.1K
 * Testcase Example:  '2'
 *
 * 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。
 * 
 * 返回 你可以获得的最大乘积 。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: n = 2
 * 输出: 1
 * 解释: 2 = 1 + 1, 1 × 1 = 1。
 * 
 * 示例 2:
 * 
 * 
 * 输入: n = 10
 * 输出: 36
 * 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 2 <= n <= 58
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  // dp[i]：整数n拆分后的最大乘积
  // 确定递推公式
  // dp[i]由两种途径获得,(从1开始遍历到j)
  // 1. dp[i] = j * (i-j)
  // 2. dp[i] = j * (dp[i-j])
  // 即： dp[i] = max(dp[i], max(j * (i-j), j * dp[i-j]));
  const dp = new Array(n + 1).fill(0)
  dp[2] = 1 // dp[0]和dp[1]无意义
  for(let i = 3; i <= n;i++) {
    for (j = 1; j <= i/2;j++) {
      dp[i] = Math.max(dp[i], Math.max(j * (i-j), j * dp[i-j]))
    }
  }
  return dp[n]
};
// @lc code=end

