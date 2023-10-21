/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 *
 * https://leetcode.cn/problems/non-decreasing-subsequences/description/
 *
 * algorithms
 * Medium (51.89%)
 * Likes:    733
 * Dislikes: 0
 * Total Accepted:    154.8K
 * Total Submissions: 298.3K
 * Testcase Example:  '[4,6,7,7]'
 *
 * 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。
 * 
 * 数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [4,6,7,7]
 * 输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [4,4,3,2,1]
 * 输出：[[4,4]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 15
 * -100 <= nums[i] <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {

  const res = [], path = []

  const backtracking = (nums, index) => {
    // 只要有2个以上元素就是递增
    if (path.length > 1) {
      res.push([...path])
    }
    if (index > nums.length) {
      return
    }

    const obj = {}
    for (let i = index; i < nums.length; i++) {
      // 若不是递增，或同层级已经使用过，则不再进入递归
      // 判断递增条件：当前值大于等于path的最后一个元素
      if ((path.length > 0 && nums[i] < path[path.length - 1]) || obj[nums[i]]) {
        continue
      }

      obj[nums[i]] = true
      path.push(nums[i])
      backtracking(nums, i + 1)
      path.pop()
    }
  }

  backtracking(nums, 0)
  return res
};
// @lc code=end

