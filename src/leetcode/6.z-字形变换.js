/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  // 思路：
  // 建一个数组表示结果的每一行
  // 从左到右遍历s，curRow也随着s的遍历不断从上到下(numRows-1时从下到上)，插入到对应的行中
  // curRow表示当前的行，它是从上到下再从下到上不断游走的，只需要知道在行号在 0或numRows-1转向就可以了
  if (numRows <= 1) {
    return s
  }

  // 初始化每一行
  const rows = new Array(Math.min(s.length, numRows)).fill('')

  let curRow = 0
  let flag = false // 转向标志
  for (let i = 0;i<s.length;i++) {
    rows[curRow] += s[i]

    if (curRow === 0 || curRow === numRows - 1) {
      // 第一行或最后一行时，转向
      flag = !flag
    }
    // true时向下遍历，false时往上遍历
    curRow += flag ? 1 : -1
  }

  return rows.join('')

};
// @lc code=end

