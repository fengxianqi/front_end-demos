/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (48.01%)
 * Likes:    1345
 * Dislikes: 0
 * Total Accepted:    379.5K
 * Total Submissions: 790K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi]
 * 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：intervals = [[1,4],[4,5]]
 * 输出：[[1,5]]
 * 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= intervals.length <= 10^4
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // 先升序再逐个合并
  if (intervals.length < 2) {
    return intervals
  }
  const res = []
  // 按第一个元素升序
  const sortedArr = intervals.sort((a,b) => a[0] - b[0])

  for (let i = 0; i < sortedArr.length;i++) {
    // 如果res为空，则直接push
    // 或者：结果数组最后一个数字小于当前左边数字，说明没法合并，直接push
    if (res.length <= 0 || res[res.length -1][1] < sortedArr[i][0]) {
      res.push(sortedArr[i])
    } else {
      // res最后一个数字由谁大来决定
      res[res.length -1][1] = Math.max(res[res.length -1][1], sortedArr[i][1])
    }
  }
  return res
};
// @lc code=end

