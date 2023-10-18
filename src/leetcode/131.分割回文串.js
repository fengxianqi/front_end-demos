/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 *
 * https://leetcode.cn/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (73.40%)
 * Likes:    1658
 * Dislikes: 0
 * Total Accepted:    331.6K
 * Total Submissions: 451.9K
 * Testcase Example:  '"aab"'
 *
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 * 
 * 回文串 是正着读和反着读都一样的字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "aab"
 * 输出：[["a","a","b"],["aa","b"]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a"
 * 输出：[["a"]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {

  const res = [], path = []

  // 回溯函数
  const backtracking = (s, startIndex) => {
    // 终止条件
    if (startIndex >= s.length) {
      res.push([...path])
      return
    }

    for (let i = startIndex; i < s.length;i++) {
      const str = s.slice(startIndex, i + 1)
      if (isPalindrome(str)) {
        path.push(str)
      } else {
        continue
      }
      backtracking(s, i + 1)
      path.pop()
    }
  }

  // 判断是否是回文
  const isPalindrome = (str) => {
    const middle = Math.floor(str.length / 2)
    for (let i = 0; i< middle; i++) {
      if (str[i] !== str[str.length - i - 1]) {
        return false
      }
    }
    return true
  }

  backtracking(s, 0)
  return res
};
// @lc code=end

