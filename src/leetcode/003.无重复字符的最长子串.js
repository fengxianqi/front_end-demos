/* 题目描述 */
/*************************************************************************************************

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

*************************************************************************************************/

/* 解法思路

遍历字符串s，同时用变量map记住出现过的字符的最后一个位置，用start和len记录当前子串，遍历过程中maxLength记录最长子串长度。
每次遍历时，判断当前字符是否存在于子串中，
若存在，则更新子串。比如子串'pwsa'遇到'w',子串的开始位置要挪到's'，新的子串为'sa'。
若不存在，子串长度加1。

在循环结束前，判断len是否大于maxLength，大于则更新maxLength,这样能使maxLength始终是出现过的最长子串。
var lengthOfLongestSubstring = function(s) {
    let start = 0 // 当前不重复子串开始的位置
    let len = 0 // 当前不重复子串的长度，与start结合就能得出当前子串
    let maxLegth = len  // 最大的长度， 即len的最大值时
    let map = {} // 记录出现过的字符最后一个位置
    
    for(let i =0; i < s.length; i++) {
        let temp = s[i]
        if (map[temp] !== undefined && map[temp] >= start) {
            // 如果当前子串已存在该字符
            start = map[temp] + 1 // 子串的开始位置移到相同字符的后一个位置，如'pw'遇到'p',start要移到第一个p的后一个，即指向'w'
            len = i - start + 1 // 当前子串的长度
        } else {
            // 字符不存在子串中，则start不用变, 子串长度+1
            len++
        }
        if (len > maxLegth) {
            maxLegth = len // 保持maxLength是最大的len
        }
        map[temp] = i // 记住当前的字符所在的位置
    }
    return maxLegth
};
*/

/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 滑动窗口 + hash表
    const hash = {}
    let i = 0; // 左边界，没有重复时，调整右边界
    let res = 0;
    let len = s.length;
    for (j = 0; j < len; j++) {
        if (hash[s[j]] !== undefined) {
            // 出现重复，调整左边界
            i = Math.max(i, hash[s[j]] + 1)
        }
        hash[s[j]] = j
        res = Math.max(res, j - i + 1)
    }
    return res;
};
// @lc code=end