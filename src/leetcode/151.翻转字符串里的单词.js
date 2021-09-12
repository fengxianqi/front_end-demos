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
  while(s[left]===' ') left++;
  while(s[right] === ' ') right--;

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

