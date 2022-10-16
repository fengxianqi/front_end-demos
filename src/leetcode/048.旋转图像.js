/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 *
 * https://leetcode-cn.com/problems/rotate-image/description/
 *
 * algorithms
 * Medium (74.02%)
 * Likes:    1452
 * Dislikes: 0
 * Total Accepted:    388.4K
 * Total Submissions: 521.8K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[7,4,1],[8,5,2],[9,6,3]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * 输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == matrix.length == matrix[i].length
 * 1 <= n <= 20
 * -1000 <= matrix[i][j] <= 1000
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  // 方法一：先上下翻转，再左对角线翻转
  // 方法二：找出每个点翻转后的位置计算公式

  // 实现方法二
  // matrix[i][j]翻转后的位置：matrix[j][n-i-1] (第i行会变成倒数第i列)，赋值：matrix[j][n-i-1]=matrix[i][j]
  // matrix[j][n-i-1]翻转后的位置：matrix[n-i-1][n-j-1],赋值：matrix[n-i-1][n-j-1]=matrix[j][n-i-1]
  // matrix[n-i-1][n-j-1]翻转后的位置：matrix[n-j-1][n-(n-i-1)-1]即matrix[n-j-1][i]，赋值：matrix[n-j-1][i]=matrix[n-i-1][n-j-1]
  // matrix[n-j-1][i]翻转后的位置为：matrix[i][i]，赋值：matrix[i][j]=matrix[n-j-1][i]
  // 用一个临时变量来存储matrix[i][j]，赋值: temp = matrix[i][j]

  const n = matrix.length;
  // 注意奇数和偶数列的情况，奇数列时中间的元素不用翻转
  for (let i = 0; i < Math.floor(n / 2); ++i) {
      for (let j = 0; j < Math.floor((n + 1) / 2); ++j) {
          // 用临时变量存储当前节点
          const temp = matrix[i][j];
          // 当前节点被第四个节点的元素覆盖
          matrix[i][j] = matrix[n - j - 1][i];
          matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
          matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
          matrix[j][n - i - 1] = temp;
      }
  }
};
// @lc code=end

