/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.37%)
 * Likes:    2439
 * Dislikes: 0
 * Total Accepted:    447.7K
 * Total Submissions: 578.7K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：["()"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 8
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
// 作者：xiao-ben-dan-s
// 链接：https://leetcode-cn.com/problems/generate-parentheses/solution/sui-ran-bu-shi-zui-xiu-de-dan-zhi-shao-n-0yt3/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
  if (n<=0) {
    return []
  }
  res = []

  const dfs = (paths, left, right) => {
      if (left > n || right > left) return
      if (paths.length=== n * 2) { // 因为括号都是成对出现的
          res.push(paths)
          return
      }
      dfs(paths + '(', left + 1, right)  // 生成一个就加一个
      dfs(paths + ')', left, right + 1)
  }
  dfs('', 0, 0)
  return res


};
// @lc code=end

