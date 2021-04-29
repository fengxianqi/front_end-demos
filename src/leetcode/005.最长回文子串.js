/* 题目描述 */
/*************************************************************************************************

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"

*************************************************************************************************/


/* 解法思路
解法一：
遍历字符串，再遍历当前字符左右的回文并记录，从而得出最长回文子串，复杂度会比较高，这是正常能想出来的解法。

解法二：
马拉车算法，前后看了几遍，实在是太巧妙了，一般人很难想出来。
解法思路请参考： https://www.jianshu.com/p/e74ce81ecc7d
代码来源： https://github.com/hanzichi/leetcode/blob/master/Algorithms/Longest%20Palindromic%20Substring/longest-palindromic-substring.js
var longestPalindrome = function(s) {
    var str = Manacher(s);
    return str;
};

function Manacher(s) {
  var str = '*#'
    , dp = []
    , maxn = 0
    , idx = 0;

  for (var i = 0, len = s.length; i < len; i++)
    str += s[i] + '#';

  for (var i = 1, len = str.length; i < len; i++) {
    if (maxn > i) dp[i] = Math.min(dp[2 * idx - i], maxn - i);
    else dp[i] = 1;

    while (str[i - dp[i]] === str[i + dp[i]]) dp[i]++;

    if (dp[i] + i > maxn)
      maxn = dp[i] + i, idx = i;
  }

  var ans = 0
    , pos;

  for (var i = 1; i < len; i++) {
    if (dp[i] > ans)
      ans = dp[i], pos = i;
  }

  var f = str[pos] === '#'
    , tmp = f ? '' : str[pos]
    , startPos = f ? pos + 1 : pos + 2
    , endPos = f ? dp[pos] - 3 + startPos : dp[pos] - 4 + startPos;

  for (var i = startPos; i <= endPos; i += 2) 
    tmp = str[i] + tmp + str[i];

  return tmp;
}
*/



/**

 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // 中心扩展算法
  // 遍历，然后将当前i向两边扩散查找（aba情况），
  // 或者 (i, i+1)向两边查找（abba情况）

  if (!s) {
    return ''
  }
  const expandAroundCenter = (s, left, right) => {
    while(left >=0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }
    return right - left - 1
  }

  let start = 0, end = 0
  for (let i =0;i<s.length;i++){
    let len1 = expandAroundCenter(s, i, i)
    let len2 = expandAroundCenter(s, i, i+1)
    let len = Math.max(len1, len2)

    // 如果出现更大的子串，则替换
    if (len > end - start) {
      start = i - Number.parseInt((len - 1)/2)
      end = i + Number.parseInt(len /2)
    }
  }
  return s.substring(start, end+1)

};

