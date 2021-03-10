/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // 暴力解法
  // 分三次遍历，每一行、每一列、每一个小格
  // 三次遍历可在一次迭代完成

  // 将每个小宫格编号
  // [
  //   [0, 1, 2],
  //   [3,4,5],
  //   [6,7,8]
  // ]

  // [[0,1,2],[0,1,2]]在box[0]
  // [[3,4,5],[0,1,2]]在box[1]
  // [[0,1,2],[3,4,5]]在box[3]
  // box[z] = j/3 + (i/3)*3
  // (i/3)*3 表示某一行开头的第几个，第0个，第3个，第6个
  // j/3表示某行的第几个，第0行的第0个，第0行的第1个，第0行的第2个

  let rows = new Array(9).fill({}) // 存行的值 rows[0]表示第一行的值，横向
  let cols = new Array(9).fill({}) // 存列的值，cols[0]表示第一列的值，纵向
  let box = new Array(9).fill({})  // 第几个小宫格的值

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j]
      // [i, j]
      if (num === '.') {
        continue
      }

      // 横向已出现过
      if (rows[i][num]) {
        return false
      }

      // 纵向已出现过
      if (cols[j][num]) {
        return false
      }

      // box已出现过
      const boxIndex = Number.parseInt(j/3) + Number.parseInt(j/3) * 3
      if (box[boxIndex][num]) {
        return false
      }

      rows[i][num] = 1
      cols[j][num] = 1
      box[boxIndex][num] = 1
    }
    return true
  }


};
// @lc code=end

