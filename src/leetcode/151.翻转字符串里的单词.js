/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // https://leetcode-cn.com/problems/reverse-words-in-a-string/solution/java-shuang-bai-fei-split-reverse-shuang-zp1z/

  let left = 0;
  let right = s.length-1;
  let str = ''

  // 去除左右两边的空串
  while(s[left]===' ') left++;
  while(s[right] === ' ') right--;

  // 从右边逐个累加每个单词到str
  while(left <= right){
      let index = right;
     
      while(index >= left && s[index] !== ' ' ) index--;

      for(let i = index+1 ; i <= right ; i++ ) {
        str+=s[i]
      }
      if(index > left) {
        str+= ' '
      }
      while( index >= left && s[index]==' ' ) index--;
      right = index;
  }
  return str;

};
// @lc code=end

