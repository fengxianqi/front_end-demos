/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) {
    return []
  }
  
  const ret = []
  // 第一个是数组1
  ret.push([1])

  // 遍历新增数组，从下标1即第二行开始
  for(let i =1; i < numRows;i++) {
    const temp = [] // 用于存当前生成的一行
    const preRow = ret[i - 1] // 取出上一行

    // 每一行首位一直是1
    temp.push(1)
    
    // 当前行是i，根据preRow遍历插入中间的元素
    for (let j = 1; j<i;j++) {
      temp.push(preRow[j -1] + preRow[j])
    }

    // 最后元素肯定是1
    temp.push(1)

    // 当前行push进结果数组
    ret.push(temp)
  }

  return ret
};
// @lc code=end

