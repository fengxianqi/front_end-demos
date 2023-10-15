/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (58.08%)
 * Likes:    2649
 * Dislikes: 0
 * Total Accepted:    761.6K
 * Total Submissions: 1.3M
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：digits = ""
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= digits.length <= 4
 * digits[i] 是范围 ['2', '9'] 的一个数字。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const k = digits.length;
  const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
  if(!k) return [];
  if(k === 1) return map[digits].split("");

  const res = [], path = [];
  backtracking(digits, k, 0);
  return res;

  // n = '23'
  // k = 2
  // a = 0 index
  function backtracking(n, k, a) {
      if(path.length === k) {
          res.push(path.join(""));
          return;
      }
      for(const v of map[n[a]]) {
          path.push(v);
          backtracking(n, k, a + 1);
          path.pop();
      }
  }

};
// @lc code=end

