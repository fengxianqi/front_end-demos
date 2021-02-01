/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 * 
 * 思路一：hash存值
 var isAnagram = function(s, t) {
  if (!s && !t) {
    return true
  }
  if (s.length !== t.length) {
    return false
  }

  let obj = {}
  for(let i=0;i<s.length;i++) {
    if (obj[s[i]]) {
      obj[s[i]]++
    } else {
      obj[s[i]] = 1
    }
  }

  for (let j=0;j<t.length;j++) {
    if (!obj[t[j]]) {
      return false
    } else {
      obj[t[j]]--
    }
  }

  for (let key in obj) {
    if (obj[key] !== 0) {
      return false
    }
  }
  return true
};
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  //思路二，排序对比
  return s.split('').sort().join('') === t.split('').sort().join('')
};
// @lc code=end

