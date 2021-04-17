/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
//   作者：xiao_ben_zhu
// 链接：https://leetcode-cn.com/problems/permutations/solution/chou-xiang-cheng-jue-ce-shu-yi-ge-pai-lie-jiu-xian/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
  const res = [];
  const used = {};

  function dfs(path) {
    if (path.length == nums.length) { // 个数选够了
      res.push(path.slice()); // 拷贝一份path，加入解集res
      return;                 // 结束当前递归分支
    }
    for (const num of nums) { // for枚举出每个可选的选项
      // if (path.includes(num)) continue; // 别这么写！查找的时间是O(n)，增加时间复杂度
      if (used[num]) continue; // 使用过的，跳过
      path.push(num);         // 选择当前的数，加入path
      used[num] = true;       // 记录一下 使用了
      dfs(path);              // 基于选了当前的数，递归
      path.pop();             // 上一句的递归结束，回溯，将最后选的数pop出来
      used[num] = false;      // 撤销这个记录
    }
  }

  dfs([]); // 递归的入口，空path传进去
  return res;

};
// @lc code=end

