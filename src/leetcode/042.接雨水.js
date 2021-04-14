


/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [42] 接雨水
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
   // 单调栈解法
   // 遍历数组，若当前值小于栈顶元素，入栈（下标入栈）
   // 若当前值大于栈顶元素，遍历出栈，一层一层地累加中间的雨水
  let ans = 0;
  const stack = [];
  const n = height.length;
  for (let i = 0; i < n; ++i) {
      while (stack.length && height[i] > height[stack[stack.length - 1]]) {
          const top = stack.pop();
          if (!stack.length) {
              break;
          }
          const left = stack[stack.length - 1];
          const currWidth = i - left - 1;
          const currHeight = Math.min(height[left], height[i]) - height[top];
          ans += currWidth * currHeight;
      }
      stack.push(i);
  }
  return ans;

};
// @lc code=end
