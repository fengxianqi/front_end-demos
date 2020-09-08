/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 * 
 * 动态规划
 * f(x)=f(x−1)+f(x−2)
 * 
 * 
 * 
 * 
 * 思路二：
 * 用斐波那契数列的公式

var climbStairs = function(n) {
    const sqrt_5 = Math.sqrt(5);
    const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2,n + 1);
    return Math.round(fib_n / sqrt_5);
};

作者：guanpengchn
链接：https://leetcode-cn.com/problems/climbing-stairs/solution/hua-jie-suan-fa-70-pa-lou-ti-by-guanpengchn/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let f1 = 0, f2 = 0, fn = 1
  for (let i = 1; i<=n;i++) {
    // let temp = f1
    // f1 = fn
    // f2 = temp
    f2 = f1
    f1 = fn
    fn = f1 + f2
  }
  return fn
};
// @lc code=end