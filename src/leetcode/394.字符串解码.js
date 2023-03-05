/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 *
 * https://leetcode.cn/problems/decode-string/description/
 *
 * algorithms
 * Medium (56.81%)
 * Likes:    1425
 * Dislikes: 0
 * Total Accepted:    225.5K
 * Total Submissions: 397.6K
 * Testcase Example:  '"3[a]2[bc]"'
 *
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "3[a]2[bc]"
 * 输出："aaabcbc"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "3[a2[c]]"
 * 输出："accaccacc"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "2[abc]3[cd]ef"
 * 输出："abcabccdcdcdef"
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "abc3[cd]xyz"
 * 输出："abccdcdcdxyz"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 30
 * s 由小写英文字母、数字和方括号 '[]' 组成
 * s 保证是一个 有效 的输入。
 * s 中所有整数的取值范围为 [1, 300] 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = []
  let ret = ''

  const isDigit = (num) => {
    return /\d/.test(num)
  }

  for (let i = 0; i < s.length; i++) {
    const item = s[i]
    if (item === ']') {
      let temp = ''
      let cur = ''
      // 出栈
      while(!isDigit(stack[stack.length-1])) {
        cur = stack.pop()
        if (cur !== '[') {
          temp = cur + temp
        }
      }
      let repeat = 0
      let count = 0
      // 遍历后，栈顶肯定是数字，把数字都累加
      while(isDigit(stack[stack.length - 1])) {
        cur = stack.pop()
        repeat = Number(cur) * Math.pow(10, count) + repeat
        count++
      }

      const tempRet = temp.repeat(repeat)

      // 如果栈不为空，则需追加到栈顶
      if (stack.length) {
        stack.push(tempRet)
      } else {
        ret += tempRet
      }

    } else {
      stack.push(item)
    }
  }

  // 栈不为空，说明后面都是字符，追加在结果后
  // 或者是纯数字，若是纯数字，则过滤掉
  ret += stack.filter(item => !isDigit(item)).join('')

  return ret
};
// @lc code=end

