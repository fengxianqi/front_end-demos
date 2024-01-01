
/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-by-leetcode-soluti/

  if (!nums.length) {
    return 0
  }
  // dp[i]表示nums以nums[i]结尾的最长子序列长度
  // dp[i] = Max(dp[i], dp[j] + 1) , 0 <= j < i
  let dp = new Array(nums.length)
  dp[0] = 1
  let max = 1
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      // 满足递增序列
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    max = Math.max(max, dp[i])
  }
  return max
};
// @lc code=end

