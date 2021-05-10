/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // https://leetcode-cn.com/problems/unique-paths/solution/dong-tai-gui-hua-by-powcai-2/
  // 动态规划
  // dp[i][j] = dp[i-1][j] + dp[i][j-1]
  // let dp = new Array(m).fill(new Array(n));
  // //第一行都赋予 1
  // for(let i = 0; i < m; ++i) {
  //     dp[i][0] = 1;
  // }
  // //第一列都赋予 1
  // for(let j = 0; j < n; ++j) {
  //     dp[0][j] = 1;
  // }
  // //两个for循环推导，对于(i,j)来说，只能由上方或者左方转移过来
  // for(let i = 1; i < m; ++i) {
  //     for(let j = 1; j < n; ++j) {
  //         dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
  //     }
  // }
  // return dp[m - 1][n - 1];


  // 优化节省空间O(2n)
  // let pre = new Array(n).fill(1);
  // let cur = new Array(n).fill(1);
  // for (let i = 1; i < m;i++){
  //     for (let j = 1; j < n; j++){
  //         cur[j] = cur[j-1] + pre[j];
  //     }
  //     pre = [...cur]
  // }
  // return pre[n-1]; 

  // 优化空间O(n)
  let cur =  new Array(n).fill(1);
  for (let i = 1; i < m;i++){
      for (let j = 1; j < n; j++){
          cur[j] += cur[j-1] ;
      }
  }
  return cur[n-1];

};
// @lc code=end

