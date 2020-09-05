/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 * 
 * 
 * 思路：
 * 声明aPointer和bPointer两个指针，从每个字符的最后一位开始相加，carry存储进位；
 * 若某个字符串已经遍历结束，且没有进位，则将另一个剩余的直接拼接在前面，返回即可。
 *
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0;
    let aPointer = a.length - 1
    let bPointer = b.length - 1
    let ret = []
    while(aPointer >= 0 || bPointer >= 0) {
      // || 0 是当指针超出时，当做0处理
      const curA = a[aPointer] || 0
      const curB = b[bPointer] || 0


      // 如果有一个已经到头了，且没有出现进位，则直接将剩余的拼接在结果上
      if (aPointer < 0 && !carry) {
        ret = b.substr(0, bPointer + 1) + ret
        break
      } else if (bPointer < 0 && !carry) {
        ret = a.substr(0, aPointer + 1) + ret
        break
      }
      

      const temp =Number.parseInt(curA) + Number.parseInt(curB) + carry
      carry = Number.parseInt(temp / 2)
      ret = (temp % 2).toString() + ret
      aPointer--
      bPointer--
    }
    // 遍历结束后仍有进位，则直接在前面插入1
    if (carry) {
      ret = '1' + ret
    }
    return ret
};
// @lc code=end

