/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 *
 * https://leetcode.cn/problems/maximal-square/description/
 *
 * algorithms
 * Medium (49.30%)
 * Likes:    1307
 * Dislikes: 0
 * Total Accepted:    239K
 * Total Submissions: 484.7K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix =
 * [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 * 输出：4
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [["0","1"],["1","0"]]
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：matrix = [["0"]]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 
 * matrix[i][j] 为 '0' 或 '1'
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {
  // https://leetcode.cn/problems/maximal-square/solutions/234964/zui-da-zheng-fang-xing-by-leetcode-solution/
  
  // 找边长最大的
  let maxSide = 0;
  if (!matrix || !matrix.length || !matrix[0].length) {
    return maxSide;
  }
  const rows = matrix.length
  const cols = matrix[0].length

  const dp = new Array(rows)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(cols).fill(0)
  }


  for (let i = 0; i< rows; i++){
    for (let j = 0; j < cols;j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          // 第一行或第一列
          dp[i][j] = 1
        } else {
          // 当前值由左上角，左，上三个节点的最小值决定
          dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1],dp[i-1][j-1]) + 1
        }
        maxSide = Math.max(maxSide, dp[i][j])
      }
    }
  }
  return maxSide * maxSide
};
// @lc code=end

