/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  if (!s) {
    return true
  }

  if (s.startsWith(')')) {
      return false
  }

  const leftStack = [] // 存放左括号下标
  const starStack = [] // 存放*号下标
  for (let i = 0; i<s.length;i++){
      const t = s[i]
      if (t === '(') {
          leftStack.push(i)
      } else if(t === '*') {
          starStack.push(i)
      } else {
          // )
          if (leftStack.length) {
              // 左括号有值则直接弹出，*号可以不管，留待后面清算
              leftStack.pop()
          } else {
              if (starStack.length) {
                  starStack.pop()
              } else {
                  return false
              }
          }
      }
  }

  // 清算
  // 如果左括号比*还多，说明没法完全闭合，直接false
  if(leftStack.length > starStack.length) {
      return false
  }

  // 比较两个栈的栈顶元素值的大小，要保证 ' ( ' 在 ' * ' 的左边
  while(leftStack.length && starStack.length) {
      if (leftStack.pop() > starStack.pop()) {
          return false
      }
  }
  return true
};
// @lc code=end

