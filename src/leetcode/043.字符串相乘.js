/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 *
 * https://leetcode-cn.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (44.89%)
 * Likes:    919
 * Dislikes: 0
 * Total Accepted:    222.2K
 * Total Submissions: 495.8K
 * Testcase Example:  '"2"\n"3"'
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * 
 * 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 * 
 * 示例 2:
 * 
 * 
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= num1.length, num2.length <= 200
 * num1 和 num2 只能由数字组成。
 * num1 和 num2 都不包含任何前导零，除了数字0本身。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  // https://leetcode-cn.com/problems/multiply-strings/solution/tu-jie-zi-fu-chuan-xiang-cheng-si-lu-qin-6q7l/
  if (num1 == "0" || num2 == "0") {
    return '0'
  }
  let arr = [];
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      arr[i + j] = (arr[i + j] || 0) + num2[j] * num1[i];
    }
  }
  // 进位值
  let carry = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    let cur = arr[i] + carry;
    arr[i] = cur % 10;
    carry = Math.floor(cur / 10);
  }
  // 还有进位则直接加上
  if (carry) {
    arr.unshift(carry);
  }
  return arr.join("");
};
// @lc code=end

