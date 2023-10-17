/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 *
 * https://leetcode.cn/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (59.56%)
 * Likes:    1468
 * Dislikes: 0
 * Total Accepted:    470K
 * Total Submissions: 789.2K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的每个数字在每个组合中只能使用 一次 。
 * 
 * 注意：解集不能包含重复的组合。 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 输出:
 * [
 * [1,1,6],
 * [1,2,5],
 * [1,7],
 * [2,6]
 * ]
 * 
 * 示例 2:
 * 
 * 
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 输出:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= candidates.length <= 100
 * 1 <= candidates[i] <= 50
 * 1 <= target <= 30
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const ans = [];
  candidates.sort((a, b) => a - b)
  const dfs = (target, combine, idx) => {
      if (target < 0) {
          return;
      }
     
      if (target === 0) {
          ans.push(combine);
          return;
      }
      for (let i = idx; i < candidates.length; i++) {
         // 防止重复
        if (i > idx && candidates[i] === candidates[i - 1]) {
          continue
        }
        dfs(target - candidates[i], [...combine,candidates[i]], i + 1)
      }
  }

  dfs(target, [], 0);
  return ans;
};
// @lc code=end

