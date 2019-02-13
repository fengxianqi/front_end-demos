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

*/



/**
代码来源： https://github.com/hanzichi/leetcode/blob/master/Algorithms/Longest%20Palindromic%20Substring/longest-palindromic-substring.js
 * @param {string} s
 * @return {string}
 */
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
