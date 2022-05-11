/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (69.19%)
 * Likes:    1245
 * Dislikes: 0
 * Total Accepted:    362.3K
 * Total Submissions: 523.7K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
 * 输出：7
 * 解释：因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [[1,2,3],[4,5,6]]
 * 输出：12
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  // 当 i>0 且 j=0, dp[i][0] = dp[i-1][0] + grid[i][0];
  // 当 i=0 且 j>=0, dp[0][j] = dp[0][j-1] + grid[0][j]
  // 当 i>0 且 j>0, dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]


  if (!grid || !grid.length || !grid[0].length) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
  dp[0][0] = grid[0][0]

  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i-1][0] + grid[i][0]
  }

  for (let j =1; j<cols;j++) {
    dp[0][j] = dp[0][j-1] + grid[0][j]
  }

  for (let i =1;i<rows;i++) {
    for (let j = 1; j <cols;j++) {
      dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
    }
  }
  console.log(dp)
  return dp[rows-1][cols-1]
};
// @lc code=end

