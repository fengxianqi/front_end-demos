/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return []
  }
  const rows = matrix.length
  const columns = matrix[0].length

  const order = []

  let left = 0,right = columns - 1, top = 0, bottom = rows - 1

  while(left <= right && top <= bottom) {
    // 从左到右
    for (let column = left; column <= right; column++) {
      order.push(matrix[top][column])
    }

    // 从上到下
    for (let row = top+1;row<= bottom; row++) {
      order.push(matrix[row][right])
    }

    if (left < right && top < bottom) {
      // 从右到左
      for (let column = right-1;column > left; column--) {
        order.push(matrix[bottom][column])
      }

      // 从下到上
      for (let row = bottom;row>top;row--) {
        order.push(matrix[row][left])
      }
    }
   

    left++
    right--
    top++
    bottom--
  }

  
  return order

};
// @lc code=end

