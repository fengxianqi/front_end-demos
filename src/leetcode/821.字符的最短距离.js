/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  const len = s.length
  let ret = []
  let prev = -len

  // 从左到右遍历，将第一个c后面的字符，距离左边的c都算出来
  for (let i = 0; i< len;i++) {
    if (s[i] === c) {
      prev = i
    }
    ret[i] = i - prev
  }

  // ret = [
  //   12, 13, 14, 0, 1,
  //    0,  0,  1, 2, 3,
  //    4,  0
  // ]
  // 上面遍历中，12,13,14其实是被忽略的数，等下面的遍历再取值

  // prev-i是s的长度，最长不会超过它，因此从右向左遍历时用2倍或以上的值作为初始值
  prev = len * 2

  // 从右向左遍历，距离右边的c的距离都算出来，并直接与前一次遍历得到的值做比较
  for (let i = len - 1; i>=0;i--) {
    if (s[i] === c) {
      prev = i
    }
    ret[i] = Math.min(ret[i], prev - i)
  }

  return ret
};
// @lc code=end

