/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  // 判断隔壁是水域或边界，计数+1
  let count = 0
  let glen = grid.length
  const len =  grid[0].length;
  for (let i = 0; i<grid.length;i++) {
    for (let j = 0; j<len;j++) {
      if (grid[i][j]) {
        // 是1即陆地时，开始计数
        // 判断当前节点的四边分别是什么，水域或边界都加一
        console.log(i, j)
        // 左边坐标： i, j-1
        if (j-1 < 0 || !grid[i][j -1]) {
          count++
        }
        // 右边坐标： i, j+1
        if (j+1>=len || !grid[i][j+1]) {
          count++
        }
        // 上边坐标： i-1, j
        if (i-1 < 0 || !grid[i-1][j]) {
          count++
        }
        // 下边坐标： i+1, j
        if (i+1 >= glen || !grid[i+1][j]) {
          count++
        }
      }
    }
  }
  return count
};
// @lc code=end

