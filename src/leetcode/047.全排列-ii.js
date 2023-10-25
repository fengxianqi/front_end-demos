/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode.cn/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (65.60%)
 * Likes:    1482
 * Dislikes: 0
 * Total Accepted:    498.4K
 * Total Submissions: 759.8K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,1,2]
 * 输出：
 * [[1,1,2],
 * ⁠[1,2,1],
 * ⁠[2,1,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

  const res =[], path = []
  const sortNums = nums.sort((a,b) => a - b)

  /**
   * 
   * @param {array} nums 
   * @param {array} used:使用过的 
   */
  const backtracking = (nums, used) => {
    if (nums.length === path.length) {
      res.push([...path])
      return
    }

    for (let i = 0; i<nums.length;i++) {
      // used[i - 1] == true，说明同一树枝nums[i - 1]使用过
      // used[i - 1] == false，说明同一树层nums[i - 1]使用过
      // 如果同一树层nums[i - 1]使用过则直接跳过 
      // https://programmercarl.com/0047.%E5%85%A8%E6%8E%92%E5%88%97II.html#%E6%80%9D%E8%B7%AF   
      if (i > 0 && nums[i] === nums[i-1] && !used[i -1]) {
        continue
      }
      if (!used[i]) {
        used[i] = true
        path.push(nums[i])
        backtracking(nums, used)
        path.pop()
        used[i] = false
      }
    }
  }

  backtracking(sortNums, [])
  return res
};
// @lc code=end

