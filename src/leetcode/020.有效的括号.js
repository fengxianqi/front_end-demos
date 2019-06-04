/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (38.34%)
 * Total Accepted:    79.6K
 * Total Submissions: 207.8K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/*
思路：用一个栈结构来存放结果，如果前一个是互补括号，则出栈，否则入栈，最后栈为空表示刚好括号闭合。
1. 互补括号分别用一个正负数相加刚好等于0来表示，判断更容易些
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 将两个互补的括号设定一个加起来为0的值，用于判断是否互补
    const mapper = {
      '(': -1,
      ')': 1,
      '[': -2,
      ']': 2,
      '{': -3,
      '}': 3
    }
    // 结果栈，最后为空表示正确
    let ret = []
    for (let i = 0; i < s.length; i++) {
      const temp = mapper[s[i]]
      if (temp !== undefined) {
        // 如果栈不为空且是互补括号，则出栈
        if (ret.length && ret[0] + temp === 0) {
          ret.shift()
        } else {
          // 入栈
          ret.unshift(temp)
        }
      }
    }
    // 栈为空表示刚好都闭合
    return ret.length === 0
};
