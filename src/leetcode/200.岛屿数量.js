/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // 遍历
  // 遇到1时，count++，然后将它前后左右都dfs地置为2
  if (!grid.length) {
    return 0
  }
  let count = 0
  for (let i = 0;i < grid.length;i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i,j)
        count++
      }
    }
  }

  
function dfs (grid, r, c) {
  if (!isInArea(grid, r, c)) {
    // 超出区域
    return
  }

  if (grid[r][c] === 2) {
    // 已经遍历过，return
    return
  }
  grid[r][c] = 2


  dfs(grid, r , c + 1)
  dfs(grid, r , c - 1)
  dfs(grid, r + 1, c)
  dfs(grid, r - 1, c)


}

function isInArea(grid, r, c){
  return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length
}

  return count
};

// @lc code=end

