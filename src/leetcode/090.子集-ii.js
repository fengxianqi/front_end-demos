/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 *
 * https://leetcode.cn/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (63.53%)
 * Likes:    1163
 * Dislikes: 0
 * Total Accepted:    329K
 * Total Submissions: 518.1K
 * Testcase Example:  '[1,2,2]'
 *
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
 * 
 * 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,2]
 * 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[[],[0]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const res =[], path = []
  const arr = nums.sort((a, b) => a-b) // 排序用于去重

  const backtracking = (arr, index) => {
    res.push([...path])

    // 终止条件
    if (index >= arr.length) {
      return
    }

    for (let i = index; i < arr.length; i++) {
      if (i > index && arr[i] === arr[i - 1]) {
        // 相同元素
        continue
      }
      path.push(arr[i])
      backtracking(arr, i + 1)
      path.pop()
    }
  }

  backtracking(arr, 0)
  return res
};
// @lc code=end

