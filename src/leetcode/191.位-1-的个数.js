/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 * 
 * 
 * 思路一：
 * 转换为二进制string，计数
var hammingWeight = function(n) {
    const s = n.toString(2)
    let count = 0
    for (let i=0;i<s.length;i++) {
      if (s[i] === '1') {
        count++
      }
    }
    return count
};
 * 
 * 思路二：
 * n&1得出末位是0或1,1的时候count++
var hammingWeight = function(n) {
    // const s = n.toString(2)
    let count = 0
    while (n != 0) {
      count += n & 1;
      n = n >>> 1;
   }
    return count
};
 * 
 * 思路三（最好）
 * 利用 n & (n - 1) 来消除n最右边的1，然后如果n还是不等于0的话，让count++，同时继续消除n最右边的1。
 * 
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0
  while (n != 0) {
    count++
    n = n & (n-1);
 }
  return count
};
// @lc code=end

