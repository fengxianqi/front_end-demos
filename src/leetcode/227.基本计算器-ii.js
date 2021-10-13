/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  // https://leetcode-cn.com/problems/basic-calculator-ii/solution/ji-ben-ji-suan-qi-ii-by-leetcode-solutio-cm28/

  s = s.trim();
  const stack = new Array();
  let preSign = '+';
  let num = 0;
  const n = s.length;
  for (let i = 0; i < n; ++i) {

      if (/\d/.test(s[i])) {
        num = num * 10 + Number(s[i]);
      }
      if (isNaN(Number(s[i])) || i === n - 1) {
          switch (preSign) {
              case '+':
                  stack.push(num);
                  break;
              case '-':
                  stack.push(-num);
                  break;
              case '*':
                  stack.push(stack.pop() * num);
                  break;
              default:
                  stack.push(stack.pop() / num | 0);
          }   
          preSign = s[i];
          num = 0;
      }
  }
  let ans = 0;
  while (stack.length) {
      ans += stack.pop();
  }
  return ans;
};
// @lc code=end