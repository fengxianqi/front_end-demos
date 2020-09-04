/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 * 
 * 
 * 思路：
 * 声明一个变量用于记录进位
 * 从后向前遍历数组，最后一个元素加一，/10记住进位
 * 若无进位，则说明最后一位元素加一后小于10，直接break
 * 若有进位，则进入下一个元素继续遍历。
 * 遍历结束后，仍有进位，则数组头部需插入一个1
 * 
 * 
 * 思路二：
 * 数组合并成数字，加一后再转为数组，使用BigInt类型防止移溢出。
 * 
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const len = digits.length
  const ret = [...digits]
  // 存储进位
  let carry = 0
  for (let i = len - 1; i >= 0; i--) {
    let num = ret[i]+ carry
    // 末位加一
    if (i === len - 1) {
      num += 1
    }
    ret[i] = num % 10
    carry = Number.parseInt(num / 10)
    if (!carry) {
      break
    }
  }
  // 遍历到最后仍有进位，则头部插入
  if (carry) {
    ret.unshift(1)
  }
  return ret
};
// @lc code=end

