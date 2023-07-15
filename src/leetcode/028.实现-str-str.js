/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */
/**
 * 
 * 思路一：
 * 不可避免地想到了暴力破解法
 * 即遍历haystack，当遇到一个字符刚好等于needle[0]，就遍历needle，直到完全匹配就说明就是该位置。
 * 
 *   // needle为空则返回0
  if (!needle) {
    return 0
  }
  let ret = -1
  const haystackLen = haystack.length
  const needleLen = needle.length
  for (let i = 0; i < haystackLen; i++) {
    if (haystack[i] === needle[0]) {
      let j = 1
      for (; j < needleLen; j++) {
        // haystack后面没有字符了 或 发现有一个字符不等，说明不满足
        if (i + j >= haystackLen || haystack[i + j] !== needle[j]) {
          break
        }
      }
      if (j === needle.length) {
        // 遍历needle结束，说明needle就在该位置
        ret = i
        break
      }
    }
  }
  return ret
 * 
 * 
 * 
 * 
 * 思路二：
 * KMP算法： 
 * http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html
 * https://www.jianshu.com/p/ffbf1e8962b0
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // KMP算法：https://programmercarl.com/0028.%E5%AE%9E%E7%8E%B0strStr.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC

    if (!needle) {
      return 0
    }

    const getNext = (needle) => {
      let next = [];
      let j = -1;
      next.push(j);

      for (let i = 1; i < needle.length; ++i) {
          while (j >= 0 && needle[i] !== needle[j + 1])
              j = next[j];
          if (needle[i] === needle[j + 1])
              j++;
          next.push(j);
      }

      return next;
    }
    let next = getNext(needle);
    let j = -1;
    for (let i = 0; i < haystack.length; ++i) {
        while (j >= 0 && haystack[i] !== needle[j + 1])
            j = next[j];
        if (haystack[i] === needle[j + 1])
            j++;
        if (j === needle.length - 1)
            return (i - needle.length + 1);
    }

    return -1;
};
// @lc code=end

