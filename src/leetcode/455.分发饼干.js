/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 *
 * https://leetcode.cn/problems/assign-cookies/description/
 *
 * algorithms
 * Easy (56.26%)
 * Likes:    800
 * Dislikes: 0
 * Total Accepted:    357.9K
 * Total Submissions: 636.8K
 * Testcase Example:  '[1,2,3]\n[1,1]'
 *
 * 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
 * 
 * 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >=
 * g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: g = [1,2,3], s = [1,1]
 * 输出: 1
 * 解释: 
 * 你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
 * 虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
 * 所以你应该输出1。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: g = [1,2], s = [1,2,3]
 * 输出: 2
 * 解释: 
 * 你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
 * 你拥有的饼干数量和尺寸都足以让所有孩子满足。
 * 所以你应该输出2.
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  // g小孩胃口
  // s饼干
  const child = g.sort((a, b) => a - b)
  const cookie = s.sort((a,b) => a - b)

  // 贪心：每次都用最大的饼干喂给胃口最大的小孩
  let ret = 0
  let index = cookie.length - 1 // 饼干下标
  for (let i = child.length - 1; i >=0; i--) {
    // 遍历胃口
    if (index >= 0 && cookie[index] >= child[i]) {
      ret++
      index--
    }
  }
  return ret
  
};
// @lc code=end

